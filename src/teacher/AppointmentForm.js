import React, { useState } from 'react';
import { rb } from '../Firebase';
import {  ref, push } from "firebase/database";

const AppointmentForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    push(ref(rb, 'appointments/'), {
      date: date,
      time: time,
      reason: reason,
      status: 'Pending',
    });
      setDate('');
      setTime('');
      setReason('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label style={{paddingRight: 10}}>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>
      <label style={{paddingRight: 10}}>
        Time:
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </label>
      <label style={{paddingRight: 10}}>
        Reason for appointment:
        <textarea style={{marginLeft: 10, marginTop: 10, borderRadius: 5}} value={reason} onChange={(e) => setReason(e.target.value)} required />
      </label>
      <button type="submit">Schedule Appointment</button>
    </form>
  );
};

export default AppointmentForm;
