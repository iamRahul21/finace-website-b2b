import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Demo.scss';

const Demo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const scrollToRequestDemo = () => {
    const requestDemoSection = document.getElementById('page8');
    if (requestDemoSection) {
      const headerOffset = document.querySelector('.header').offsetHeight;
      const offsetPosition = requestDemoSection.offsetTop - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.div
      className="demo-section"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="content">
        <motion.div
          className="demo-left"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="demo-h2">Are you ready to experience the power of Finace?</h2>
          <p className="demo-p">
            Take action today and seize the opportunity to revolutionize your workforce's financial well-being by scheduling a demo slot with us. Our team of experts will guide you through a personalized demo, tailored to your specific business needs.
          </p>
        </motion.div>
        <motion.div
          className="demo-right"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={buttonVariants}
        >
          <button
            className="demo-btn"
            onClick={scrollToRequestDemo}
            aria-label="Click to book a demo"
          >
            Book a Demo
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Demo;