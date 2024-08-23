import React, { useState, useEffect } from 'react';
import Calendar from './Calendar';
import Appointment from './Appointment';

function AppointmentForm() {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    // Load appointments from API or local storage
    const appointmentsFromStorage = localStorage.getItem('appointments');
    if (appointmentsFromStorage) {
      setAppointments(JSON.parse(appointmentsFromStorage));
    }
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAppointmentAdd = (appointment) => {
    setAppointments([...appointments, appointment]);
    localStorage.setItem('appointments', JSON.stringify(appointments));
  };

  return (
    <div className="App">
      <Calendar selectedDate={selectedDate} onDateChange={handleDateChange} appointments={appointments} />
      <Appointment onAppointmentAdd={handleAppointmentAdd} />
    </div>
  );
}

export default AppointmentForm;