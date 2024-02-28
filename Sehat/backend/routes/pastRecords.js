// backend/routes/pastRecords.js
// as the path suggest this file is made to connect to the 

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route to fetch past consultation records
router.post('/past-records', async (req, res) => {
  try {
    const userId = req.userId; // Extracted from JWT token
    const { familyMemberId } = req.body; // ID of the selected family member

    // Check if the user has access to the selected family member
    const user = await User.findById(userId);
    const familyMember = user.familyMembers.find(member => member._id.toString() === familyMemberId);
    if (!familyMember) {
      return res.status(403).json({ message: 'Access denied to selected family member' });
    }

    // Fetch past consultation records for the selected family member
    const pastRecords = familyMember.consultationRecords; // Assuming consultationRecords is an array in the familyMember object

    // If no records are available, send a no response - logical eeeh...
    if (!pastRecords || pastRecords.length === 0) {
      return res.status(204).end(); // No Content
    }

    // Sort past records in dated order
    pastRecords.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Send past consultation records as JSON response
    res.status(200).json({ pastRecords });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
