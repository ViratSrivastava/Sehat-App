// PastRecord.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useHistory } from 'react-router-dom';
import './PastRecords.css'; 

const PastRecord = () => {
  const history = useHistory();
  const [selectedMember, setSelectedMember] = useState('');

  const handleMemberSelect = (member) => {
    setSelectedMember(member);
    // Redirect to MedicalRecords page with selected member ID
    history.push(`/medical-records/${member.id}`);
  };

  // Logic to fetch list of family members

  return (
    <div>
      <h2>Past Records</h2>
      <ul>
        {/* Display list of family members */}
        <li onClick={() => handleMemberSelect({ id: 1, name: 'Family Member 1' })}>Family Member 1</li>
        {/* Add more family members */}
      </ul>
    </div>
  );
};

export default PastRecord;
