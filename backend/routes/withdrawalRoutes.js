const express = require('express');
const router = express.Router();
const Withdrawal = require('../models/Withdrawal');

router.post('/withdraw', async (req, res) => {
  console.log('Received data:', req.body); // Log received data

  const { fullName, accountNumber, routingNumber, ssn, agreedToTerms } = req.body;

  const newWithdrawal = new Withdrawal({
    fullName,
    accountNumber,
    routingNumber,
    ssn,
    agreedToTerms,
  });

  try {
    await newWithdrawal.save();
    console.log('Saved withdrawal details successfully'); // Log success
    res.status(200).json({ message: 'Withdrawal details saved successfully' });
  } catch (error) {
    console.error('Error saving withdrawal details:', error); // Log error
    res.status(500).json({ message: 'Error saving withdrawal details', error });
  }
});

module.exports = router;
