import React from 'react';
import './FounderSection.css';

const FounderSection = () => {
  return (
    <section className="founder-section">
      <div className="image-container">
        <img src="/images/founder.jpg" alt="Founder" />
      </div>
      <div className="text-content">
        <h2>MICHEL ADAM (FOUNDER & CHAIRMAN)</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam scelerisque eleifend ultrices. Praesent in tortor quis velit fermentum lobortis. Vivamus fermentum magna eget purus commodo, sit amet lobortis velit luctus.
        </p>
      </div>
    </section>
  );
};

export default FounderSection;
