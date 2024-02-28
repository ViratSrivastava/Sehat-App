// Home.js
import React from 'react';
import { View, Text } from 'react-native';
import './Home.css'; // Import your CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h2>Home Page</h2>
      <div className="button-container">
        <button className="home-button">View Profile</button>
        <button className="home-button">View Past Records</button>
        <button className="home-button">Request New Consultation</button>
        <button className="home-button">Medical Chatbot</button>
      </div>
    </div>
  );
};

export default Home;
