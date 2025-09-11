import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/src/assets/logo.svg" alt="logo" className="logo" />
                <span>SAS</span>
                <div className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </div>
            </div>
            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/assistant" className="nav-link" onClick={() => setIsOpen(false)}>Assistant</Link>
                <Link to="/map" className="nav-link" onClick={() => setIsOpen(false)}>Map</Link>
                <Link to="/faq" className="nav-link" onClick={() => setIsOpen(false)}>FAQ</Link>
                <Link to="/feedback" className="nav-link" onClick={() => setIsOpen(false)}>Feedback</Link>
            </div>
        </nav>
    );
};

export default Navbar;
