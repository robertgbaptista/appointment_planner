import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <div>
      <section>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Full Name"
              required
            />
          </label>
          <label>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
              placeholder="Phone Number (###-###-####)"
              required
            />
          </label>
          <label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email Address"
              required
            />
          </label>
          <input type="submit" value="Add Contact" />
        </form>
      </section>
    </div>
  );
};
