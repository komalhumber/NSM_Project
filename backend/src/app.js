const express = require("express");
const cors = require("cors");
const session = require("express-session");

const authRoutes = require("./routes/authRoutes");
const requestRoutes = require("./routes/requestRoutes");
const quoteRoutes = require("./routes/quoteRoutes");

const app = express();

app.use(express.json());

app.use(cors({
  origin: "http://localhost:4200",
  credentials: true
}));

app.use(session({
  secret: "secret123",
  resave: false,
  saveUninitialized: false
}));

app.use("/api/auth", authRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api", quoteRoutes);

app.get("/", (req,res)=>{
  res.send("NSM Backend Running");
});

module.exports = app;