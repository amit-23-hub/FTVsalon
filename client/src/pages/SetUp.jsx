import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';

function ServicePage() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [bookingData, setBookingData] = useState({});

  useEffect(() => {
    axios.get('/api/services')
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/bookings', bookingData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <BrowserRouter>
      <div>
        <h1>Service Page</h1>
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <Link to={`/services/${service.id}`}>
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
        <Route path="/services/:serviceId">
          {({ match }) => (
            <div>
              <h2>{selectedService.name}</h2>
              <p>{selectedService.description}</p>
              <form onSubmit={handleBookingSubmit}>
                <label>
                  Date:
                  <input type="date" value={bookingData.date} onChange={(event) => setBookingData({ ...bookingData, date: event.target.value })} />
                </label>
                <label>
                  Time:
                  <input type="time" value={bookingData.time} onChange={(event) => setBookingData({ ...bookingData, time: event.target.value })} />
                </label>
                <button type="submit">Book Now</button>
              </form>
            </div>
          )}
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default setup;

