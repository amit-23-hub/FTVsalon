import React from 'react';
import './ContactArea.css';

const ContactArea = () => {
  return (
    <div className="contact-area">
      <div className="image-container">
        <img src="https://i.ibb.co/1LYNrBw/img7.png" alt="Salon" />
      </div>
      <div className="form-container">
        <h2>Become a Franchise</h2>
        <form>
          <div className="form-row">
            <div className="form-group">
              <input type="text" placeholder="Name*" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email*" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input type="text" placeholder="Contact Number" required />
            </div>
            <div className="form-group">
              <select required>
                <option value="" disabled selected>Types of franchisee</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <select required>
                <option value="" disabled selected>Investment capacity</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Your location*" required />
            </div>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactArea;
