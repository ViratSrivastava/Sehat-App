import React, { useState } from 'react';
import './AddMemberForm.css';
const AddMemberForm = ({ onClose, onAddMember }) => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    address: '',
    phoneNumber: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the callback function passed from the parent component to add the new member
    onAddMember(formData);
    // Close the modal or navigate away
    onClose();
  };

  return (
    <div>
      <h2>Add New Family Member</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <label>Gender:</label>
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
        <label>Date of Birth:</label>
        <input type="text" name="dob" value={formData.dob} onChange={handleChange} required />
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        <label>Phone Number:</label>
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
};

export default AddMemberForm;
