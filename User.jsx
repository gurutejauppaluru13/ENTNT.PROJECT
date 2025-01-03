import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const User = () => {
  const [date, setDate] = useState(new Date());
  const [communications, setCommunications] = useState([
    { date: '2025-01-01', method: 'LinkedIn Post', notes: 'Followed up on project' },
  ]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <Calendar onChange={handleDateChange} value={date} />
      <h2>Scheduled Communications</h2>
      <ul>
        {communications.map((comm, index) => (
          <li key={index}>
            {comm.date} - {comm.method} - {comm.notes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;