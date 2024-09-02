import React from 'react';
import Header from '../components/header';
import './Contact.css';

const Contact = () => {
  const locations = [
    {
      name: "Registered Office – Mumbai",
      mapSrc: "https://www.google.com/maps/embed?pb=...1" 
    },
    {
      name: "Nagpur Academy",
      mapSrc: "https://www.google.com/maps/embed?pb=...2" 
    },
    {
      name: "Gurugram Academy",
      mapSrc: "https://www.google.com/maps/embed?pb=...3" 
    },
    {
      name: "Bhopal",
      mapSrc: "https://www.google.com/maps/embed?pb=...4" 
    },
    {
      name: "Office- Vaishali",
      mapSrc: "https://www.google.com/maps/embed?pb=...5" 
    },
    {
      name: "Dehradun Academy",
      mapSrc: "https://www.google.com/maps/embed?pb=...6" 
    },
    {
      name: "Zirakpur Academy",
      mapSrc: "https://www.google.com/maps/embed?pb=...7" 
    },
    {
      name: "Dharwad",
      mapSrc: "https://www.google.com/maps/embed?pb=...8" 
    },
    {
      name: "Academy – Guwahati",
      mapSrc: "https://www.google.com/maps/embed?pb=...9" 
    },
    {
      name: "Ranchi Academy",
      mapSrc: "https://www.google.com/maps/embed?pb=...10" 
    },
    {
      name: "Hyderabad",
      mapSrc: "https://www.google.com/maps/embed?pb=...11" 
    },
    {
      name: "Amritsar, Punjab",
      mapSrc: "https://www.google.com/maps/embed?pb=...12" 
    },
  ];

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’re always eager to hear from you!</p>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <h2>Office (Delhi-NCR)</h2>
          <p>1st Floor, Sec-1, Above Indian Bank Vaishali Ghaziabad-201010</p>
          <p>Phone: 0120 - 4333318/9312609990</p>
          <p>Email: vaishali@ftvsalonacademy.in</p>
          <p>Website: www.ftvsalonacademy.in</p>
        </div>

        <div className="contact-item">
          <h2>Get in Touch</h2>
          <form>
            <input type="text" placeholder="Name*" required />
            <input type="tel" placeholder="Phone No*" required />
            <input type="email" placeholder="Email Address*" required />
            <textarea placeholder="Message*" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="locations">
        <h2>Our Locations</h2>
        <div className="row">
          {locations.map((location, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="location-card">
                <h3>{location.name}</h3>
                <iframe
                  src={location.mapSrc}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h2>GET TO KNOW THE RIGHT COURSE FOR YOU?</h2>
            <p>Enquiry Now</p>
            <p>Contact Us</p>
            <p>FTV Salon Academy</p>
            <p>Launchpad of your truly International Career with flexible courses at your time and your pace in FTV Salon Academy.</p>
          </div>
          <div className="footer-section footer-logo">
            <img src="https://www.ftvsalonacademy.org/wp-content/uploads/2017/07/ftvmain-logo-wh.png" alt="FTV Salon Academy Logo" />
          </div>
          <div className="footer-section">
            <h2>Quick Links</h2>
            <a href="#">Calibre With Courses</a>
            <a href="#">Why Us</a>
            <a href="#">About Us</a>
            <a href="#">FAQ</a>
            <a href="#">Contact Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Franchise Opportunity</a>
            <a href="#">Online Learning Program</a>
            <a href="#">Download Certificate</a>
          </div>
          <div className="footer-section">
            <h2>GET IN TOUCH</h2>
            <p>phone</p>
            <p>+91 9266665444</p>
            <p>info@fsalonacademy.org</p>
          </div>
          <div className="footer-section footer-socials">
            <p>FOLLOW US</p>
            <p>Call Now</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Contact;
