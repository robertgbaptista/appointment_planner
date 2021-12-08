import React from "react";

export const ContactPicker = ({ name, contacts, onChange }) => {
  return (
    <div>
      <select name={name} onChange={onChange}>
        <option value={""} key={-1} selected="selected">
          Contact Not Selected
        </option>
        {
          contacts.map(contact => (
            <option value={contact} key={contact}>
              {contact}
            </option>
          ))
        }
      </select>
    </div>
  );
};
