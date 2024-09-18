import React, { useState } from 'react';
import './NavigationBar.css';
import { ReactComponent as LockIcon } from '../assets/LockIcon.svg'; 

const NavigationBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <a href="/"><span id="e">e</span><span id="dex">Dex</span></a>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
                <li><a href="/" style={{ color: '#20B486' }}>Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Course</a></li>
                <li><a href="/contact">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <div className="nav-btn">
                <button id='lgn'><LockIcon /><span id="logintxt">Login</span></button>
                <button id='sgn'>Sign up for Free</button>
            </div>
        </nav>
    );
};

export default NavigationBar;
