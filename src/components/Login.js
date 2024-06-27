import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({}); // State to track validation errors

    // Function to validate form inputs
    const validate = () => {
        const errors = {};
        if (!username) errors.username = 'Username is required'; // Check if username is empty
        if (!password) errors.password = 'Password is required'; // Check if password is empty
        return errors;
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        const validationErrors = validate(); // Validate form inputs
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors); // Set validation errors if any
        } else {
            await login(username, password); // Call login function from AuthContext
            if (username === 'user' && password === 'password') {
                navigate('/'); // Navigate to home page on successful login
            }
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    {errors.username && <span className="error">{errors.username}</span>} {/* Display username error */}
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    {errors.password && <span className="error">{errors.password}</span>} {/* Display password error */}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
