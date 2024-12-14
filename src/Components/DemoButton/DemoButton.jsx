import React from 'react'
import './DemoButton.scss'

const DemoButton = () => {
  const scrollToRequestDemo = () => {
    const requestDemoSection = document.getElementById('page8');
    if (requestDemoSection) {
      requestDemoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='demo-button' onClick={scrollToRequestDemo}>Book a Demo</div>
  )
}

export default DemoButton