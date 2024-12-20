import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsNavActive(!isNavActive);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = document.querySelector('.header').offsetHeight;
      const offsetPosition = section.offsetTop - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToGetStarted = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection('page2');
      }, 500);
    } else {
      scrollToSection('page2');
    }
  };

  const scrollToRequestDemo = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection('page8');
      }, 500);
    } else {
      scrollToSection('page8');
    }
  };

  const scrollToAboutUs = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection('page9-about');
      }, 500);
    } else {
      scrollToSection('page9-about');
    }
  };

  return (
    <header className="header">
      <a href="/" className="logo" aria-label="Navigate to home">
        <img src="/Logo.png" alt="Finace logo" />
      </a>

      <a
        className={`burger-button ${isNavActive ? 'active' : ''}`}
        onClick={toggleNavbar}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </a>

      <nav className={`navbar ${isNavActive ? 'active' : ''}`}>
        <a href="/" aria-label="Navigate to home page">Home</a>
        <a onClick={scrollToGetStarted} aria-label="Learn more about services offered by Finace">Services</a>
        <Link to="/faq" aria-label="Navigate to Frequently Asked Questions page">FAQs</Link>
        <a onClick={scrollToAboutUs} aria-label="Learn more about Finace">About Us</a>
        <a id="new-demo-button" onClick={scrollToRequestDemo} aria-label="Book a demo with Finace">Book a Demo</a>
      </nav>
    </header>
  );
};

export default Navbar;