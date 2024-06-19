import React from 'react';
import { useHistory } from 'react-router-dom';
import './CreateCorporateDetail.css';

const CreateCorporateDetail = () => {
  const history = useHistory();

  const handleCreateDetail = () => {
    // Dummy logic for creating corporate detail
    alert('Corporate detail created successfully');
    history.push('/create-subscription');

    // Future API integration
    // fetch('/api/create-corporate-detail', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ corporateDetails }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   if (data.success) {
    //     history.push('/create-subscription');
    //   } else {
    //     alert('Failed to create corporate details');
    //   }
    // });
  };

  return (
    <div className="create-corporate-detail-container">
      <h2>Create Corporate Detail</h2>
      <button onClick={handleCreateDetail}>Create Detail</button>
    </div>
  );
};

export default CreateCorporateDetail;
