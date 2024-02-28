// Confirmation.js
import React from 'react';
import { useHistory } from 'react-router-dom';

const Confirmation = () => {
  const history = useHistory();

  const handleHomeButtonClick = () => {
    history.push('/home');
  };

  const handleViewAppointmentsButtonClick = () => {
    // Navigate to view appointments page
  };

  return (
    <div>
      <h2>Appointment Booked</h2>
      <p>Confirmation message...</p>
      <button onClick={handleHomeButtonClick}>Go Home</button>
      <button onClick={handleViewAppointmentsButtonClick}>View Appointments</button>
    </div>
  );
};

export default Confirmation;
