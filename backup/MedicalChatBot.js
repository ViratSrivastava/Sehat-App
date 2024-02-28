// MedicalChatBot.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import './MedicalChatBot.css'; // Import your CSS file for styling

const MedicalChatBot = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  // Function to handle user input
  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  // Function to handle sending user message
  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      // Send user message to chatbot API and update chat history
      const newMessage = { type: 'user', message: inputMessage };
      setChatHistory([...chatHistory, newMessage]);
      setInputMessage('');
      // Call function to send user message to chatbot API
      // fetchChatbotResponse(inputMessage);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-history">
        {/* Display chat history */}
        {chatHistory.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            {message.message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputMessage}
          onChange={handleInputChange}
          placeholder="Type your message here..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default MedicalChatBot;
