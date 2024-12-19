import React from 'react';
import './Demo.scss';

const Demo = () => {
  const scrollToRequestDemo = () => {
    const requestDemoSection = document.getElementById('page8');
    if (requestDemoSection) {
      const headerOffset = document.querySelector('.header').offsetHeight;
      const offsetPosition = requestDemoSection.offsetTop - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="demo-section">
      {/* <div className="demo-txt">
        <h2>Request Demo</h2>
        <h2>Request Demo</h2>
      </div> */}
      <div className="content">
        <div className="demo-left">
          <h2 className="demo-h2">Are you ready to experience the power of Finace?</h2>
          <p className="demo-p">
            Take action today and seize the opportunity to revolutionize your workforce's financial well-being by scheduling a demo slot with us. Our team of experts will guide you through a personalized demo, tailored to your specific business needs.
          </p>
        </div>
        <div className="demo-right">
          <a className="demo-btn" onClick={scrollToRequestDemo}>Book a Demo</a>
        </div>
      </div>
    </div>
  );
};

export default Demo;