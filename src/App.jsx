import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Phone from './Components/PhoneMockUp/Phone'
import Features from './Components/Features/Features'
import Advantages from './Components/Advantages/Advantages'
import Steps from './Components/Steps/Steps'
import Demo from './Components/Demo/Demo'
import Benefits from './Components/Benefits/Benefits'

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
      <div id="page3">
        <Advantages />
      </div>
      <div id="page4">
        <Steps />
      </div>
      <div id="page5">
        <Demo />
      </div>
      <div id="page6">
        <Benefits />
      </div>
    </div>
  )
}

export default App