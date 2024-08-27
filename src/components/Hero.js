// src/components/Hero.js
import React from 'react';
import './Hero.css'; // Create a separate CSS file if needed

const Hero = () => {
    return (
        <div className="hero-container">
            <nav className="nav-bar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#opportunity">Franchise Opportunity</a></li>
                </ul>
            </nav>
            <div className="hero-image">
    
            </div>
        </div>
    );
}

export default Hero;
