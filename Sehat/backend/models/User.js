// backend/models/User.js
//basically this file is for saving/ taking data inputs into the backend system and verifying flaws(if any) at the gates.
//technically this is userdata

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true, // Ensure phone number is unique among users
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique among users same as phone number
  },
  password: {
    type: String,
    required: true,
  },
  familyMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FamilyMember' }],
});

// constant "familyMemberSchema" is for taking data for adding family members to the database.

const familyMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  birthday: { type: Date, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true }, // Phone number uniqueness is required but i might get confusing like everyone having same phone number.. eerhh....
  email: { type: String, required: true }, //same goes for email id bruh. needs discussion
  relationship: { type: String, required: true },
  photo: { type: String } // Assuming you store photo URLs cause idk what how should we save the images how in hell we'll fetch it/
});

const FamilyMember = mongoose.model('FamilyMember', familyMemberSchema);

module.exports = mongoose.model('User', userSchema);