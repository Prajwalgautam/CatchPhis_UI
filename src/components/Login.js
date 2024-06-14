// src/components/Chat.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGoogle } from 'react-icons/fa';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 600px;
    // background: linear-gradient(135deg, #71b7e6, #9b59b6);
    padding: 2rem;
`;
const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height:400px;
    max-width: 400px;
    background-color: #fff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const LoginTitle = styled.h2`
    margin-bottom: 1rem;
    text-align: center;
    color: #333;
`;

const LoginInput = styled.input`
    margin-bottom: 1.5rem;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

const LoginButton = styled.button`
    padding: 0.75rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
    &:focus {
        outline: none;
    }
`;

const GoogleButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem;
    background-color: #db4437;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1rem;
    &:hover {
        background-color: #c23321;
    }
    &:focus {
        outline: none;
    }

    svg {
        margin-right: 0.5rem;
    }
`;

const ErrorMessage = styled.p`
    color: red;
    text-align: center;
`;

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'password') {
            alert('Login successful!');
            setError('');
        } else {
            setError('Invalid username or password');
        }
    };

    const handleGoogleSignIn = () => {
        alert('Google Sign-In clicked');
        // Implement Google Sign-In logic here
    };

    return (
        <LoginContainer>
            <LoginForm onSubmit={handleSubmit}>
                <LoginTitle>Login</LoginTitle>
                <LoginInput
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <LoginInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <LoginButton type="submit">Login</LoginButton>
                <GoogleButton onClick={handleGoogleSignIn}>
                    <FaGoogle /> Sign in with Google
                </GoogleButton>
            </LoginForm>
        </LoginContainer>
    );
};

export default Login;
