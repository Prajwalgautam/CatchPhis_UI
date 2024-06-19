import React from 'react';
import { useHistory } from 'react-router-dom';
import './CreateSubscription.css';

const CreateSubscription = () => {
  const history = useHistory();

  const handleCreateSubscription = () => {
    // Dummy logic for creating subscription
    alert('Subscription created successfully');
    history.push('/');

    // Future API integration
    // fetch('/api/create-subscription', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ subscriptionDetails }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   if (data.success) {
    //     history.push('/');
    //   } else {
    //     alert('Failed to create subscription');
    //   }
    // });
  };

  return (
    <div className="create-subscription-container">
      <h2>Create Subscription</h2>
      <button onClick={handleCreateSubscription}>Create Subscription</button>
    </div>
  );
};

export default CreateSubscription;
