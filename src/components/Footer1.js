import React from 'react';
import './Footer1.css'; // Import CSS for styling
import flogo2 from "../images/flogo2.png";
import flogo3 from "../images/flogo3.png";

const Footer1 = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* First Column */}
        <div className="footer-column">
          <img src={flogo2} alt=" " className="footer-logo" />
          <p>
            Launchpad of your truly International <br></br> Career with flexible courses at your <br></br> time and your pace in FTV Salon  <br></br>  Academy.
          </p>
          <img src={flogo3} alt="  " className="footer22" />
        </div>

        {/* Second Column */}
        <div className="footer-column quick-links">
          <h3>QUICK LINKS</h3>
          <div className="red-line"></div>
          <div className="quick-links-container">
            <ul>
              <li><a href="">Calibre With Courses</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Franchise Opportunity</a></li>
              <li><a href="">Download Certificate</a></li>
            </ul>
            <ul>
              <li><a href="">Why Us</a></li>
              <li><a href="">FAQ</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Online Learning Program</a></li>
            </ul>
          </div>
        </div>

        {/* Third Column */}

{/* Third Column */}
<div className="footer-column get-in-touch">
  <h3>GET IN TOUCH</h3>
  <div className="red-line"></div>
  <div className="contact-info">
    <p><span className="contact-icon">phone<i className="fa fa-phone"></i></span> <span className="contact-text">+91 9266665444</span></p>
    <p><span className="contact-icon   contact-icon22"><br></br><i className="fa fa-envelope"></i></span> <span className="contact-text     contact-text1">info@fsalonacademy.org</span></p>
  </div>
  <h3>FOLLOW US</h3>
  <div className="red-line"></div>

</div>








      </div>
</footer>
  );
};

export default Footer1;
