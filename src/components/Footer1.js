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
            Launchpad of your truly International Career with flexible courses at your time and your pace in FTV Salon Academy.
          </p>
          <img src={flogo3} alt="  " className="footer22" />
        </div>

        {/* Second Column */}
        <div className="footer-column">
          <h3>QUICK LINKS</h3>
          <div className="red-line"></div>
          <ul>
            <li><a href="">Calibre With Courses</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Franchise Opportunity</a></li>
            <li><a href="">Download Certificate</a></li>

            <li><a href="">Why Us</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Online Learning Program</a></li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="footer-column">
          <h3>GET IN TOUCH</h3>
          <p>phone</p>
          <p>+91 9266665444</p>
          <p>info@fsalonacademy.org</p>
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            {/* Replace with social media icons */}
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
