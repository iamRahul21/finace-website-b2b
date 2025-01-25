import React, { useState } from "react";
import ReactGA from "react-ga4";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./RequestDemo.scss";

const RequestDemo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "c47cf122-355e-4520-93e7-5f652f75b54d",
        subject: "New Demo Request on Finace Website",
        from_name: "Finace Demo Request",
        ...formData,
      }),
    });

    const result = await response.json();
    if (result.success) {
      setSuccessMessage("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setSuccessMessage("Failed to submit form.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      id="page8"
      className="page-container"
      aria-labelledby="demo-head"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h1
        id="demo-head"
        className="head"
        variants={itemVariants}
        aria-label="Request a demo heading"
      >
        Request a demo now!
      </motion.h1>
      <motion.h5
        className="subhead"
        variants={itemVariants}
        aria-label="Subheading for demo request form"
      >
        Don't wait any longer, let Finace be the first step towards creating a more prosperous future for your organization and employees.
      </motion.h5>

      {successMessage && (
        <motion.div
          className={`success-message ${
            successMessage.includes("successfully") ? "success" : "error"
          }`}
          variants={itemVariants}
        >
          {successMessage}
        </motion.div>
      )}

      <motion.form
        onSubmit={handleSubmit}
        className="form-container"
        variants={containerVariants}
      >
        <motion.div className="form-group" variants={itemVariants}>
          <label htmlFor="email">
            Business Email<span className="required">*</span>:
          </label>
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
        </motion.div>

        <div className="name-group">
          <motion.div className="form-group" variants={itemVariants}>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your first name"
            />
          </motion.div>

          <motion.div className="form-group" variants={itemVariants}>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your last name"
            />
          </motion.div>
        </div>

        <motion.div className="form-group" variants={itemVariants}>
          <label htmlFor="phone">Mobile Phone Number:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter your mobile number"
          />
        </motion.div>

        <motion.div className="form-group" variants={itemVariants}>
          <label htmlFor="message">Message:</label>
          <input
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter your message"
          />
        </motion.div>

        <motion.div className="form-group" variants={itemVariants}>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default RequestDemo;