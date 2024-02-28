// ConsultationForm.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import './ConsultationForm.css'; // Import your CSS file for styling

const ConsultationForm = () => {
  const history = useHistory(); // Initialize useHistory hook
  const [problemDescription, setProblemDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assume onSubmit function handles form submission, e.g., sending data to backend
    // After successful submission, redirect to confirmation page
    history.push('/confirmation'); // Redirect to confirmation page
  };

  return (
    <div className="consultation-form-container">
      <h2>Consultation Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Describe the problem:</label>
        <textarea
          value={problemDescription}
          onChange={(e) => setProblemDescription(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ConsultationForm;
