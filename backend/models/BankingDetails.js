const mongoose = require('mongoose');

const BankingDetailsSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: String,
    required: true,
  },
  routingNumber: {
    type: String,
    required: true,
  },
  ssn: {
    type: String,
    required: true,
  },
  agreedToTerms: {
    type: Boolean,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('BankingDetails', BankingDetailsSchema);
