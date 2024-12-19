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
        behavior: 'smooth'
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
      <a href="/" className="logo">
        <img src="\Logo.png" alt="Finace logo"  />
      </a>

      <div
        className={`burger-button ${isNavActive ? 'active' : ''}`}
        onClick={toggleNavbar}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`navbar ${isNavActive ? 'active' : ''}`}>
        <a href="/">Home</a>
        <a onClick={scrollToGetStarted}>Services</a>
        <Link to="/faq">FAQs</Link>
        <a onClick={scrollToAboutUs}>About Us</a>
        <a id='new-demo-button' onClick={scrollToRequestDemo}>Book a Demo</a>
        {/* <DemoButton /> */}
      </nav>
    </header>
  );
};

export default Navbar;