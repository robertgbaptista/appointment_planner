import React from "react";

import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts.map(contact => contact.name);
  }

  return (
    <div>
      <section>
        <form onSubmit={handleSubmit}>
          <label>
            <input 
              type="text"
              name="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Appointment Title"
              required
            />
          </label>
          <label>
            <ContactPicker 
              name="contact"
              value={contact}
              onChange={e => setContact(e.target.value)}
              contacts={getContactNames()}
              placeholder="Contact"
            />
          </label>
          <label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              min={getTodayString}
              required
            />
          </label>
          <label>
            <input
              type="time"
              name="time"
              value={time}
              onChange={e => setTime(e.target.value)}
              required
            />
          </label>
          <input type="submit" value="Add Appointment" />
        </form>
      </section>
    </div>
  );
};
