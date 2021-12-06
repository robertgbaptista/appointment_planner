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
        <form onSubmit={handleSubmit} >
          <input 
            type="text"
            name="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            name="phone" 
            placeholder="Phone Number (###-###-####)"
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}
            pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input type="submit" value="Add Contact" />
        </form>
      </section>
    </div>
  );
};
