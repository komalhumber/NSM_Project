const Quote = require("../models/Quote");
const ServiceRequest = require("../models/ServiceRequest");

exports.submitQuote = async (req, res) => {

  const quote = await Quote.create({
    ...req.body,
    providerId: req.session.userId,
    requestId: req.params.id
  });

  const request = await ServiceRequest.findById(req.params.id);

  if (request.status === "open") {
    request.status = "quoted";
    await request.save();
  }

  res.status(201).json(quote);
};

exports.acceptQuote = async (req, res) => {

  const quote = await Quote.findById(req.params.id);

  const request = await ServiceRequest.findById(quote.requestId);

  if (String(request.createdBy) !== req.session.userId) {
    return res.status(403).json({ message: "Not owner" });
  }

  await Quote.updateMany(
    { requestId: request._id },
    { status: "rejected" }
  );

  quote.status = "accepted";
  await quote.save();

  request.status = "assigned";
  request.acceptedQuoteId = quote._id;

  await request.save();

  res.json({ message: "Quote accepted" });

};