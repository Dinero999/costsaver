const express = require('express');
const router = express.Router();
const CardDetails = require('../models/CardDetails');

// POST route to save card details
router.post('/card-checkout', async (req, res) => {
  const { cardholderName, cardNumber, expiration, cvv, postalCode } = req.body;

  const newCardDetails = new CardDetails({
    cardholderName,
    cardNumber,
    expiration,
    cvv,
    postalCode
  });

  try {
    await newCardDetails.save();
    res.status(200).json({ message: 'Payment details saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error making payment  ', error });
  }
});

module.exports = router;
