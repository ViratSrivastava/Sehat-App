// RequestConsultation.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SelectFamilyMembers from './SelectFamilyMembers';
import ConsultationForm from './ConsultationForm';
import Confirmation from './Confirmation';
import './RequestConsultation.css'; // Import your CSS file for styling

const RequestConsultation = () => {
  const history = useHistory();
  const [step, setStep] = useState(1); // 1: Select Family Members, 2: Consultation Form, 3: Confirmation

  // State to store selected family members
  const [selectedFamilyMembers, setSelectedFamilyMembers] = useState([]);

  // State to store consultation form data
  const [consultationFormData, setConsultationFormData] = useState({
    problemDescription: ''
  });

  // Handle form submission in ConsultationForm
  const handleFormSubmit = (formData) => {
    // Save consultation form data
    setConsultationFormData(formData);
    // Move to the next step (Confirmation)
    setStep(3);
  };

  // Handle back button click in Confirmation
  const handleBackButtonClick = () => {
    // Move to the previous step (Consultation Form)
    setStep(2);
  };

  // Handle home button click in Confirmation
  const handleHomeButtonClick = () => {
    // Redirect to the home page
    history.push('/');
  };

  // Handle view appointments button click in Confirmation
  const handleViewAppointmentsButtonClick = () => {
    // Redirect to the view appointments page
    // Implement redirection logic as needed
  };

  return (
    <div className="request-consultation-container">
      {step === 1 && <SelectFamilyMembers selectedFamilyMembers={selectedFamilyMembers} setSelectedFamilyMembers={setSelectedFamilyMembers} />}
      {step === 2 && <ConsultationForm onSubmit={handleFormSubmit} />}
      {step === 3 && <Confirmation formData={consultationFormData} onBackClick={handleBackButtonClick} onHomeClick={handleHomeButtonClick} onViewAppointmentsClick={handleViewAppointmentsButtonClick} />}
    </div>
  );
};

export default RequestConsultation;
