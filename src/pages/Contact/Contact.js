import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    budget: "",
    message: "",
    newsletter: false, // Add newsletter field
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="contact-page">
      <h2>Let's connect</h2>
      <p>Use the form below, or send us an email</p>
      <div className="contact-container">
        <div className="contact-text">
          <p>Contact Us</p>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <div className="input-container">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-container">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Enter Company Name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="input-container">
              <label htmlFor="budget">Budget Range</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
              >
                <option value="">Select Budget Range</option>
                <option value="0-5000">$0 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="10000-25000">$10,000 - $25,000</option>
                <option value="25000+">$25,000+</option>
              </select>
            </div>
          </div>

          <div className="input-container">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="bottom-line-input"
              placeholder="Tell us about your project, What problems can we help you solve?"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
            />
          </div>

          <div className="form-actions">
            <div className="newsletter-checkbox">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
              />
              <label htmlFor="newsletter">Subscribe to our newsletter</label>
            </div>
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
