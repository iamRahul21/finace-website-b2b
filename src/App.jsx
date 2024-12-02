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
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import DemoPage from './Components/DemoPage/DemoPage'
import AnimatedSVG from './Components/AnimatedSVG/AnimatedSVG'
import Page8 from './Components/Page8/Page8'

const App = () => {
  return (
    <div>
      <div id="page1">
        <Navbar />
        <Hero />
        {/* <Phone /> */}
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
      <div id="page7">
        <About />
      </div>
      <div id="page8">
        <Page8 />
      </div>
      <div id="page9">
      </div>
      <div id="page10">
        <Footer />
      </div>
    </div>
  )
}

export default App