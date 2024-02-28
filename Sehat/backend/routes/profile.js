// backend/routes/profile.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Profile route
router.get('/profile', async (req, res) => {
  try {
    const userId = req.userId; // Extracted from JWT token
    const user = await User.findById(userId).select('name email address phoneNumber photo');
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
