// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route to fetch all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Route to fetch user data by user ID
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to update user balance, commission, and tax
router.put('/users/:id', async (req, res) => {
  try {
    const { balance, commission, tax } = req.body;
    const user = await User.findById(req.params.id);
    if (user) {
      user.balance = balance !== undefined ? balance : user.balance;
      user.commission = commission !== undefined ? commission : user.commission;
      user.tax = tax !== undefined ? tax : user.tax; // Update tax field
      await user.save();
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Route to create or update user data
router.post('/users', async (req, res) => {
  const { uid, email } = req.body;
  
  try {
    let user = await User.findOne({ uid });
    if (!user) {
      user = new User({ uid, email });
      await user.save();
    } else {
      user.email = email;
      await user.save();
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error saving user data' });
  }
});

module.exports = router;