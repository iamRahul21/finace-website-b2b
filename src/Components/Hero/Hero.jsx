import React from 'react';
import './Hero.scss';

const Hero = () => {
    const scrollToRequestDemo = () => {
        const requestDemoSection = document.getElementById('page8');
        if (requestDemoSection) {
            requestDemoSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/');
            setTimeout(() => {
                const requestDemoSection = document.getElementById('page8');
                if (requestDemoSection) {
                    requestDemoSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500);
        }
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

    return (
        <div className="hero-section">
            <div className="hero-left">
                <div className='hero-para-1'>
                    <span className="line-one">Ace your Finances</span><br />
                    <span className="line-two">
                        with <span className="color">Finace</span>
                    </span>
                </div>
                <div className="hero-para-2">Take control of your financial well-being! Start with Early Salary Access today as we bring you a complete suite of financial services tailored for your growth.</div>
                <div className='button'>
                    <div 
                        className="get-started" 
                        onClick={scrollToGetStarted} 
                        aria-label="Click to get started with Finace"
                    >
                        Get Started
                    </div>
                    <div 
                        className="book-a-demo" 
                        onClick={scrollToRequestDemo} 
                        aria-label="Click to book a demo for Finace"
                    >
                        Book a demo
                    </div>
                </div>
                <div className="hero-para-3">Discover how you can access your earned salary before month-end</div>
            </div>
            <div className="hero-right">
                <img
                    src="/yes.svg"
                    alt="Finace App displayed on a phone mockup"
                    className='phone-mockup'
                    style={{
                        height: "80vh", width: "auto"
                    }}
                    aria-label="Phone mockup displaying the Finace App"
                />
            </div>
        </div>
    );
};

export default Hero;