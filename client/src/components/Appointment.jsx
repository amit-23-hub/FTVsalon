import React, { useState } from 'react';

const Appointment = ({ onAppointmentAdd }) => {
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const appointment = {
      title,
      startTime,
      endTime,
    };
    onAppointmentAdd(appointment);
    setTitle('');
    setStartTime('');
    setEndTime('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <br />
      <label>
        Start Time:
        <input type="time" value={startTime} onChange={(event) => setStartTime(event.target.value)} />
      </label>
      <br />
      <label>
        End Time:
        <input type="time" value={endTime} onChange={(event) => setEndTime(event.target.value)} />
      </label>
      <br />
      <button type="submit">Add Appointment</button>
    </form>
  );
};

export default Appointment;