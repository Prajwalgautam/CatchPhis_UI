import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
    const { isLoggedIn, currentUser, isPremiumUser } = useAuth();
    const navigate = useNavigate();

    if (!isLoggedIn) {
        navigate('/login');
        return null;
    }

    return (
        <div className="profile-container">
            <h2>Profile</h2>
            <p>Welcome, {currentUser?.username}!</p>
            <p>Status: {isPremiumUser ? 'Premium User' : 'Free User'}</p>
            {!isPremiumUser && (
                <button onClick={() => navigate('/activate')}>Activate Premium</button>
            )}
        </div>
    );
};

export default Profile;
