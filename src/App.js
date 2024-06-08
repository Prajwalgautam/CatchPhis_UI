import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Pricing from './components/Pricing';
import Chat from './components/Chat';
import Success from './components/Success';
import Cancel from './components/Cancel';
import './App.css';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/success" component={Success} />
                <Route path="/cancel" component={Cancel} />
            </Routes>
        </Router>
    );
}

export default App;
