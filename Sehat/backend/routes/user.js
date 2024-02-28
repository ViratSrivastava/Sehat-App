// backend/routes/user.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Add family member route
router.post('/family', async (req, res) => {
  try {
    const userId = req.userId; // Extracted from JWT token
    const userData = req.body;

    // Validate required fields for adding a family member
    const requiredFields = ['name', 'gender', 'birthday', 'address', 'phoneNumber', 'email', 'relationship'];
    for (const field of requiredFields) {
      if (!userData[field]) {
        return res.status(400).json({ message: `Missing required field: ${field}` });
      }
    }

    // Check if the phone number or email already exists for the user or any family member
    const existingUser = await User.findOne({ 
      $or: [{ email: userData.email }, { 'familyMembers.phoneNumber': userData.phoneNumber }, { 'familyMembers.email': userData.email }] 
    });
    if (existingUser) {
      return res.status(400).json({ message: 'Email or phone number already exists' });
    }

    // Add family member to the user's familyMembers array
    await User.findByIdAndUpdate(userId, { $push: { familyMembers: userData } });
    res.status(200).json({ message: 'Family member added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
