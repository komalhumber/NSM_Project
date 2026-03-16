const ServiceRequest = require("../models/ServiceRequest");

exports.createRequest = async (req, res) => {

  const request = await ServiceRequest.create({
    ...req.body,
    createdBy: req.session.userId
  });

  res.status(201).json(request);

};

exports.getRequests = async (req, res) => {

  const { status, categoryId, q } = req.query;

  let filter = {};

  if (status) filter.status = status;

  if (categoryId) filter.categoryId = categoryId;

  if (q) {
    filter.$text = { $search: q };
  }

  const requests = await ServiceRequest
    .find(filter)
    .sort({ createdAt: -1 });

  res.json(requests);

};