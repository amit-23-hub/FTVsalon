// src/components/Header.js
import React from 'react';
import './Header.css'; // Create a separate CSS file if needed

const Header = () => {
    return (
        <div className="header-container">
            <div className="text-section">
                <h1>FRANCHISE OPPORTUNITY</h1>
                <h2>ONCE IN A LIFETIME OPPORTUNITY</h2>
                <p>“F Salon Academy is an entrepreneurship venture that is expanding rapidly in the beauty and wellness sector.”</p>
                <p>With a mission to open over 500 academies globally, we offer international standard courses in beauty, hairdressing, and more.</p>
                <p><strong>MICHEL ADAM (FOUNDER & CHAIRMAN)</strong></p>
            </div>
            <div className="image-section">
                <img src="https://i.ibb.co/N6fhhXQ/img.png" alt="Founder" />
            </div>
        </div>
    );
}

export default Header;
