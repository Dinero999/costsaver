const express = require('express');
const router = express.Router();
const BankingDetails = require('../models/BankingDetails');

router.post('/bank-details', async (req, res) => {
  console.log('Received data:', req.body); // Log received data

  const { fullName, accountNumber, routingNumber, ssn, agreedToTerms } = req.body;

  const newBankingDetails = new BankingDetails({
    fullName,
    accountNumber,
    routingNumber,
    ssn,
    agreedToTerms,
  });

  try {
    await newBankingDetails.save();
    console.log('Your banking details is been processed,please wait for a while'); // Log success
    res.status(200).json({ message: 'Your banking details is been processed,please wait for a while' });
  } catch (error) {
    console.error('Error processing your banking details:', error); // Log error
    res.status(500).json({ message: 'Error processing your banking details:', error });
  }
});

module.exports = router;
