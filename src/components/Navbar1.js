// components/Navbar1.js

import React from 'react';
import './Navbar1.css'; 
import flogo from "../images/flogo.png";

const Navbar1 = () => {
  return (
    <nav>
      <input id="nav-toggle" type="checkbox" />
      <div className="logo">
        <img src={flogo} alt="" style={{ width: '250px', height: 'auto' }} />
      </div>
      <ul className="links">
        <li><a href="index.html" id="home-link">Enquiry</a></li>
        <li><a href="about.html">phone +91 9266665444</a></li>
        <li><a href="contact.html">mailinfo@fsalonacademy.org</a></li>
      </ul>
      <label htmlFor="nav-toggle" className="icon-burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>
    </nav>
  );
}

export default Navbar1;
