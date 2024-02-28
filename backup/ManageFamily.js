import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddMemberForm from './AddMemberForm';
import './ManageFamily.css'; // Import your CSS file for styling

const ManageFamily = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddMember = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSaveMember = async (newMemberData) => {
    try {
      // Send new family member data to the backend API to save
      // we need too add a back-end api here
      const response = await fetch('/api/familyMembers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMemberData),
      });
      const data = await response.json();
      
      // Update the list of family members displayed on the page
      setFamilyMembers([...familyMembers, data]);
    } catch (error) {
      console.error('Error saving new member:', error);
    }
    
    handleCloseForm();
  };

  return (
    <div className="manage-family-container">
      <h2>Manage Family Members</h2>
      <div className="family-members">
        {/* Display existing family members */}
        {familyMembers.map(member => (
          <div key={member.id} className="family-member">
            <img src={member.photo} alt={member.name} />
            <p>{member.name}</p>
            <p>{member.gender}</p>
          </div>
        ))}
      </div>
      {showForm && (
        <div className="overlay">
          <div className="form-container">
            <button className="close-btn" onClick={handleCloseForm}>Close</button>
            <AddMemberForm onClose={handleCloseForm} onAddMember={handleSaveMember} />
          </div>
        </div>
      )}
      <Link to="#" className="add-member-btn" onClick={handleAddMember}>
        <div className="add-icon">+</div>
      </Link>
    </div>
  );
};

export default ManageFamily;