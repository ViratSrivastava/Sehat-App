// SelectFamilyMembers.js
import React, { useState } from 'react';
import './SelectFamilyMembers.css'; // Import your CSS file for styling

const SelectFamilyMembers = ({ familyMembers, onSelect }) => {
  const [selectedMember, setSelectedMember] = useState('');

  const handleSelectMember = (member) => {
    setSelectedMember(member);
    onSelect(member);
  };

  return (
    <div className="select-family-members-container">
      <h2>Select Family Member</h2>
      <ul>
        {familyMembers.map((member) => (
          <li key={member.id} onClick={() => handleSelectMember(member)}>
            {member.name}
          </li>
        ))}
      </ul>
      <p>Selected: {selectedMember ? selectedMember.name : 'None'}</p>
    </div>
  );
};

export default SelectFamilyMembers;
