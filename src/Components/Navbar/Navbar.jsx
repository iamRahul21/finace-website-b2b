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
        <a href="/">About</a>
        <a href="/">Portfolio</a>
        <a href="/">Services</a>
        <a href="/">Contact</a>
      </nav>
    </header>
  )
}

export default Navbar