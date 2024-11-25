import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header">
      <a href="/" className='logo'>
        <img src="src\assets\images\logo.png" alt="Finace" style={{ height: "50px", width: "auto" }} />
      </a>

      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/">Blog</a>
        <a href="/">About Us</a>
        <a href="/">Team</a>
        <a href="/">Mobile App</a>
        <a href="/">FAQs</a>
        <a href="/">Book a demo</a> {/* need to add button style to this */}
      </nav>
    </header>
  )
}

export default Navbar