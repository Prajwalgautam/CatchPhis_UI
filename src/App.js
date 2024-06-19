import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Pricing from './components/Pricing';
import Chat from './components/Chat';
import Cancel from './components/Cancel';
import Activate from './components/Activate';
import CreateCorporateDetail from './components/CreateCorporateDetail';
import CreateSubscription from './components/CreateSubscription';
import './App.css';
import Success from './components/Success';
import { AuthProvider, useAuth } from './components/AuthContext';

function App() {
    return (
        <AuthProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/login" element={<Login />} />{/* route to home after login */}
                    <Route path="/register" element={<Register />} />
                    <Route path="/activate" element={<Activate />} />
                    <Route path="/create-corporate-detail" element={<CreateCorporateDetail />} />
                    <Route path="/create-subscription" element={<CreateSubscription />} />
                    <Route path="/cancel" element={<Cancel />} />
                    <Route path="/success" component={Success} />
                    {/* <Route path="/cancel" component={Cancel} /> */}
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;

