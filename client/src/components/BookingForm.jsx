import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingForm.css'

function BookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');

  const services = [
    { id: 1, name: 'Service 1' },
    { id: 2, name: 'Service 2' },
    { id: 3, name: 'Service 3' },
  ];

  const handleServiceChange = (e) => {
    setService(e.target.value);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your booking logic here
    console.log('Booking details:', { name, email, phone, service, date, time });
  };

  return (
    <div className="booking-form">
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
        </label>
        <br />
        <label>
          Service:
          <select value={service} onChange={handleServiceChange}>
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Date:
          <DatePicker
            selected={date}
            onChange={handleDateChange}
            minDate={new Date()}
            placeholderText="Select a date"
          />
        </label>
        <br />
        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={handleTimeChange}
            placeholder="Select a time"
          />
        </label>
        <br />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default BookingForm;