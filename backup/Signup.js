// Signup.js
import React from 'react';
import { View, Text } from 'react-native';
import './Signup.css'; // Import your CSS file for styling

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Signup</h2>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <input type="text" name="gender" />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input type="text" name="dob" />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input type="text" name="address" />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input type="text" name="phoneNumber" />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input type="password" name="confirmPassword" />
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
