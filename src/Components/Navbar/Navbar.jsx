import React, { useState } from 'react';
import './Navbar.scss';
import DemoButton from '../DemoButton/DemoButton';

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNavbar = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <header className="header">
      <a href="/" className="logo">
        <img src="src/assets/images/logo.png" alt="Finance" style={{ height: "50px", width: "auto" }} />
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
        <a href="/">Services</a>
        <a href="/">Blog</a>
        <a href="/">About Us</a>
        {/* <a href="/">Team</a>
        <a href="/">Mobile App</a>
        <a href="/">FAQs</a> */}
        <DemoButton />
      </nav>
    </header>
  );
};

export default Navbar;