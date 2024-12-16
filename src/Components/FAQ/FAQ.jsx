import React from 'react';
import './FAQ.scss'; 
import Navbar from '../Navbar/Navbar';
import UsefulLinks from '../UsefulLinks/UsefulLinks';
import Footer from '../Footer/Footer';

const FAQ = () => {
  return (
    <section>
        <Navbar />

        <UsefulLinks />
        <Footer />
    </section>
  );
};

export default FAQ;