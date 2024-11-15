// server.js

const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// Configure passport with Google OAuth
passport.use(new GoogleStrategy({
  clientID: 'YOUR_GOOGLE_CLIENT_ID',
  clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
  callbackURL: 'http://localhost:3000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  //  this save user data to database or retrieve user data from database
  return done(null, profile);
}));

// Authentication route
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Redirect to frontend home page after successful authentication
    res.redirect('http://localhost:3000/home');
  });

// Define other routes for profile, past records, consultation requests, etc. -- to do

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


/// this code is boiler plate - Virat///
