// src/components/Section.js
import React from 'react';
import './Section.css'; // Create a separate CSS file if needed

const Section = () => {
    return (
        <div className="section-container">
            <div className="image-section">
                <img src="https://i.ibb.co/ph89xxx/img2.png" alt="Salon Interior" />
            </div>
            <div className="text-section">
                <h2>Why Choose F Salon Academy Over Others?</h2>
                <p>People go with brands, and FashionTV is a brand in itself. No one can match the quality and professional work of FashionTV in terms of beauty, fashion, and wellness. This is the main reason why F Salon Academy and its academic salon franchisees in India are expanding at a larger pace compared to other salon academies. It is the best salon franchise in India. If you are inspired to become part of something big, then investing in the F Salon Academy franchise is the smart choice.</p>
                <p>Being a part of FTV Salon Academy means becoming part of a global network that is available in 190+ countries with FTV Salon Academy franchise opportunities. Our aim is to create 1 million jobs per year, and we are fulfilling this purpose by opening jaw-dropping academies and providing international quality education that the Indian market has been lacking for years. After becoming part of the FashionTV Salon Academy franchise, you are going to have FTV's full support until you become the boss of your own and start handling everything without our support. FTV also supports you with its international brand cosmetics, equipment, and accessories at special discounts. These products are used in an international market and by FashionTV experts.</p>
                <p>To be part of the FTV Salon Academy franchise in India, you do not require special qualifications. Whether you are a housewife or a new entrepreneur, you should go for the FTV’s academy salon franchise as it is the best business opportunity. We provide the following support to each and every franchisee:</p>
                <button className="enquire-button">Enquire Now</button>
            </div>
        </div>
    );
};

export default Section;
