import React from 'react';
import { useHistory } from 'react-router-dom';
import './Activate.css';

const Activate = () => {
  const history = useHistory();

  const handleActivation = () => {
    // Dummy activation logic for testing
    const accountType = 'personal'; // Example condition

    if (accountType === 'personal') {
      history.push('/');
    } else {
      history.push('/create-corporate-detail');
    }

    // Future API integration
    // fetch('/api/activate', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ accountType }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   if (data.success) {
    //     if (data.accountType === 'personal') {
    //       history.push('/');
    //     } else {
    //       history.push('/create-corporate-detail');
    //     }
    //   } else {
    //     alert('Activation failed');
    //   }
    // });
  };

  return (
    <div className="activate-container">
      <h2>Activate Account</h2>
      <button onClick={handleActivation}>Activate</button>
    </div>
  );
};

export default Activate;
