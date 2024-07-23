const mongoose = require('mongoose');

const cardDetailsSchema = new mongoose.Schema({
  cardholderName: String,
  cardNumber: String,
  expiration: String,
  cvv: String,
  postalCode: String,
});

module.exports = mongoose.model('CardDetails', cardDetailsSchema);
