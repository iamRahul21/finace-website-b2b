import React, { useState } from "react";
import ReactGA from "react-ga4";
import './RequestDemo.scss';

const RequestDemo = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Google Analytics Event Tracking
    ReactGA.event({
      category: "Demo Request",
      action: "Form Submitted",
      label: "Request a Demo Form",
    });

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: 'c47cf122-355e-4520-93e7-5f652f75b54d',
        subject: 'New Demo Request on Finace Website',
        from_name: 'Finace Demo Request',
        ...formData,
      }),
    });

    const result = await response.json();
    if (result.success) {
      setSuccessMessage('Form submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    } else {
      setSuccessMessage('Failed to submit form.');
    }
  };

  return (
    <div id="page8" className="page-container" aria-labelledby="demo-head">
      <h1 id="demo-head" className="head">Request a demo now!</h1>
      <h5 className="subhead">
        Don't wait any longer, let Finace be the first step towards creating a more prosperous future for your organization and employees.
      </h5>

      {successMessage && (
        <div className={`success-message ${successMessage.includes('successfully') ? 'success' : 'error'}`}>
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="email">Business Email<span className="required">*</span>:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Enter your business email"
          />
        </div>

        <div className="name-group">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              // required
              className="form-input"
              placeholder="Enter your first name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              // required
              className="form-input"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Mobile Phone Number:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            // required
            className="form-input"
            placeholder="Enter your mobile number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <input
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            // required
            className="form-input"
            placeholder="Enter your message"
          />
        </div>

        <div className="form-group">
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>

    </div>
  );
};

export default RequestDemo;