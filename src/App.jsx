import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Phone from './Components/PhoneMockUp/Phone'
import './app.css'
import Features from './Components/Features/Features'

const App = () => {
  return (
    <div>
      <div id="page1">
        <Navbar />
        <Hero />
        <Phone />
      </div>
      <div id="page2">
        <Features />
      </div>
    </div>
  )
}

export default App