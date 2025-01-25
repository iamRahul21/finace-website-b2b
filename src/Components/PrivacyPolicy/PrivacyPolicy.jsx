import React, { useEffect } from 'react';
import './PrivacyPolicy.scss';
import Navbar from '../Navbar/Navbar';
import UsefulLinks from '../UsefulLinks/UsefulLinks';
import Footer from '../Footer/Footer';
import RequestDemo from '../RequestDemo/RequestDemo';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PrivacyPolicy = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    const updateScrollPadding = () => {
      const navbar = document.querySelector('.header');
      const tableOfContents = document.querySelector('.table-of-contents');

      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const tocHeight = tableOfContents ? tableOfContents.offsetHeight : 0;

      const combinedHeight = navbarHeight + tocHeight + 50;

      document.documentElement.style.scrollPaddingTop = `${combinedHeight}px`;
    };

    updateScrollPadding();
    window.addEventListener('resize', updateScrollPadding);

    return () => window.removeEventListener('resize', updateScrollPadding);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 80, damping: 10 },
    },
  };

  return (
    <section id="privacy">
      <Navbar />
      <motion.div
        ref={ref}
        className="privacy-container"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.div
          className="table-of-contents"
          aria-labelledby="contents-heading"
          variants={itemVariants}
        >
          <h3 id="contents-heading">Contents</h3>
          <ul>
            <li>
              <a onClick={() => scrollToSection('section1')} aria-label="Navigate to Introduction section">
                Introduction
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection('section2')}
                aria-label="Navigate to Collection, processing, disclosure, and sharing of Information section"
              >
                Collection, processing, disclosure, and sharing of Information.
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection('section3')} aria-label="Navigate to Information Usage section">
                Information Usage
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection('section4')}
                aria-label="Navigate to Mechanism for Grievance Redressal section"
              >
                Mechanism for Grievance Redressal
              </a>
            </li>
          </ul>
        </motion.div>

        <div className="main-content">
          <h1>Privacy Policy</h1>
          <p style={{ textAlign: 'center' }}>
            {/* <strong>Last Updated May 23rd, 2022</strong> */}
          </p>

          <motion.div
            className="table-of-contents1"
            variants={itemVariants}
          >
            <h3>Contents</h3>
            <ul>
              <li>
                <a onClick={() => scrollToSection('section1')} aria-label="Navigate to Introduction section">
                  Introduction
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection('section2')}
                  aria-label="Navigate to Collection, processing, disclosure, and sharing of Information section"
                >
                  Collection, processing, disclosure, and sharing of Information.
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection('section3')} aria-label="Navigate to Information Usage section">
                  Information Usage
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection('section4')}
                  aria-label="Navigate to Mechanism for Grievance Redressal section"
                >
                  Mechanism for Grievance Redressal
                </a>
              </li>
            </ul>
          </motion.div>

          <hr />
          <motion.div
            id="section1"
            aria-label="Introduction section"
            className="section-content"
            variants={itemVariants}
          >
            <h2>Introduction</h2>
            <p>
              Befinace Technologies Private Limited (hereinafter referred to as “the Company”), through its Mobile
              Application called “Finace” runs an employee financial wellness platform that allows the employee users
              to access their earned salary at any point of time at an agreed transaction fees which credit is extended
              by Non-Banking Financial Companies with whom Finace has arrangements...
            </p>
          </motion.div>

          <motion.div
            id="section2"
            aria-label="Collection, processing, disclosure, and sharing of Information section"
            className="section-content"
            variants={itemVariants}
          >
            <h2>Collection, processing, disclosure, and sharing of Information.</h2>
            <p>
              <ul>
                <li>
                  Finace collects, uses, discloses, shares, and transfers Information, other content, communications...
                </li>
                <li>
                  For the purpose of these Terms, the term “Personal Information” shall mean any information...
                </li>
                <li>
                  Personal and Non-Personal Information together is referred to as “Information”. Finace may collect...
                </li>
                <li>
                  Finace may use cookies to monitor and manage your usage of the Finace platform...
                </li>
                <li>
                  Finace may collect details about your use of the Finace platform...
                </li>
              </ul>
            </p>
          </motion.div>

          <motion.div
            id="section3"
            aria-label="Information Usage section"
            className="section-content"
            variants={itemVariants}
          >
            <h2>Information Usage</h2>
            <p>
              Finace may use your Information for:
              <ol>
                <li>Manage Your Account.</li>
                <li>Providing access to the Finace platform...</li>
                <li>Send SMS for authenticating operations...</li>
                <li>Conduct a survey or analysis...</li>
                <li>Develop, test, and improve the Finace platform...</li>
              </ol>
            </p>
          </motion.div>

          <motion.div
            id="section4"
            aria-label="Mechanism for Grievance Redressal section"
            className="section-content"
            variants={itemVariants}
          >
            <h2>Mechanism for Grievance Redressal</h2>
            <p>
              In accordance with the Information Technology Act, 2000 and Rules made thereunder, the contact details
              for raising grievances, if any are provided below:
              <br />
              <br />
              Address: 305 B Block, Parasmani Regency, 2nd Block Jayanagar, Bangalore, India, 560011
            </p>
          </motion.div>

          <div className="back-to-top">
            <a href="#top" aria-label="Back to top">Back to top ↑</a>
          </div>
        </div>
      </motion.div>
      <RequestDemo />
      <UsefulLinks />
      <Footer />
    </section>
  );
};

export default PrivacyPolicy;