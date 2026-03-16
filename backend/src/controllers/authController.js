const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {

  const { fullName, email, password, role } = req.body;

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await User.create({
    fullName,
    email,
    passwordHash,
    role
  });

  res.status(201).json(user);
};

exports.login = async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "Invalid email" });
  }

  const valid = await bcrypt.compare(password, user.passwordHash);

  if (!valid) {
    return res.status(400).json({ message: "Invalid password" });
  }

  req.session.userId = user._id;
  req.session.role = user.role;

  res.json(user);
};

exports.logout = (req, res) => {

  req.session.destroy();

  res.json({ message: "Logged out" });

};