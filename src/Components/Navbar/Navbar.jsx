import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import DemoButton from '../DemoButton/DemoButton';

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsNavActive(!isNavActive);
  };

  const scrollToGetStarted = () => {
    const requestDemoSection = document.getElementById('page2');
    if (requestDemoSection) {
      requestDemoSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const requestDemoSection = document.getElementById('page2');
        if (requestDemoSection) {
          requestDemoSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };

  const scrollToAboutUs = () => {
    const requestDemoSection = document.getElementById('page9-about');
    if (requestDemoSection) {
      requestDemoSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const requestDemoSection = document.getElementById('page9-about');
        if (requestDemoSection) {
          requestDemoSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };

  return (
    <header className="header">
      <a href="/" className="logo">
        <img src="\Logo.png" alt="Fiance logo" style={{ height: "50px", width: "auto" }} />
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
        {/* <a href="/">Blog</a> */}
        <a onClick={scrollToAboutUs}>About Us</a>
        {/* <a href="/">Team</a>
        <a href="/">Mobile App</a>
        <a href="/">FAQs</a> */}
        <DemoButton />
      </nav>
    </header>
  );
};

export default Navbar;