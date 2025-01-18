import React from 'react';
import { motion } from 'framer-motion';
// import ReactGA from 'react-ga4';
import './Hero.scss';

const Hero = () => {
    // const trackBookDemo = () => {
    //     ReactGA.event({
    //         category: 'Button',
    //         action: 'Book a Demo Click',
    //         label: 'Hero Section',
    //     });
    // };

    // const trackGetStarted = () => {
    //     ReactGA.event({
    //         category: 'Button',
    //         action: 'Get Started Click',
    //         label: 'Hero Section',
    //     });
    // };

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

    // Determine the animation based on screen size
    const heroRightAnimation = {
        initial: window.innerWidth <= 768 ? { y: 50, opacity: 0 } : { x: 50, opacity: 0 },
        animate: { x: 0, y: 0, opacity: 1 },
        transition: { duration: 0.7 }
    };

    return (
        <motion.div 
            className="hero-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="hero-left">
                <motion.div 
                    className='hero-para-1'
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="line-one">Ace your Finances</span><br />
                    <span className="line-two">
                        with <span className="color">Finace</span>
                    </span>
                </motion.div>
                <motion.div 
                    className="hero-para-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Take control of your financial well-being! Start with Early Salary Access today as we bring you a complete suite of financial services tailored for your growth.
                </motion.div>
                <div className='button'>
                    <motion.div 
                        className="get-started"
                        onClick={() => {
                            trackGetStarted();
                            scrollToGetStarted();
                        }}
                        aria-label="Click to get started with Finace"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Get Started
                    </motion.div>
                    <motion.div 
                        className="book-a-demo"
                        onClick={() => {
                            trackBookDemo();
                            scrollToRequestDemo();
                        }}
                        aria-label="Click to book a demo for Finace"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Book a demo
                    </motion.div>
                </div>
                <motion.div 
                    className="hero-para-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Discover how you can access your earned salary before month-end
                </motion.div>
            </div>
            <motion.div 
                className="hero-right"
                {...heroRightAnimation}
            >
                <img
                    src="/yes.svg"
                    alt="Finace App displayed on a phone mockup"
                    className='phone-mockup'
                    style={{
                        height: "80vh", width: "auto"
                    }}
                    aria-label="Phone mockup displaying the Finace App"
                />
            </motion.div>
        </motion.div>
    );
};

export default Hero;