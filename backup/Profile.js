import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'; // Import your CSS file for styling

const Profile = () => {
  // Example user data, replace with actual user data fetched from backend
  const userData = {
    name: 'John Doe',
    gender: 'Male',
    dob: '01/01/1990',
    address: '123 Main St, City, Country',
    phoneNumber: '+1234567890',
    email: 'john@example.com',
    // Add more user data as needed
  };

  return (
    <div className="profile-container">
      <div className="profile-circle">
        {/* Display user image here */}
        <img src="user-image-url" alt="User" />
      </div>
      <div className="profile-details">
        <h2>{userData.name}</h2>
        <p><strong>Gender:</strong> {userData.gender}</p>
        <p><strong>Date of Birth:</strong> {userData.dob}</p>
        <p><strong>Address:</strong> {userData.address}</p>
        <p><strong>Phone Number:</strong> {userData.phoneNumber}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        {/* Add more user details as needed */}
      </div>
      <div className="manage-family">
        <Link to="/manage-family">Manage Family Members</Link>
      </div>
    </div>
  );
};

export default Profile;
