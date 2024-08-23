import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = ({ selectedDate, onDateChange, appointments }) => {
  const handleDateClick = (date) => {
    onDateChange(date);
  };

  const handleEventClick = (event) => {
    console.log(event);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      selectable={true}
      events={appointments}
      dateClick={handleDateClick}
      eventClick={handleEventClick}
    />
  );
};

export default Calendar;