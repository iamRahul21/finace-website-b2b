import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'lord-icon-element';
import './UsefulLinks.scss'

const UsefulLinks = () => {
    const scrollToHome = () => {
        const requestDemoSection = document.getElementById('page1');
        if (requestDemoSection) {
            requestDemoSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToServices = () => {
        const requestDemoSection = document.getElementById('page2');
        if (requestDemoSection) {
            requestDemoSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToContactUs = () => {
        const requestDemoSection = document.getElementById('page8');
        if (requestDemoSection) {
            requestDemoSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="section">
            <div className='contact-section'>
                <div className="contact">
                    <lord-icon
                        src="https://cdn.lordicon.com/tdtlrbly.json"
                        trigger="hover"
                        stroke="bold"
                        colors="primary:#121331,secondary:#7dac3e"
                        style={{ width: '50px', height: '50px' }}
                    ></lord-icon>
                    <div className="text">
                        <h4>Find Us</h4>
                        Bangalore, India
                    </div>
                </div>
                {/* <div className="contact">
                    <lord-icon
                        src="https://cdn.lordicon.com/fmasbomy.json"
                        trigger="hover"
                        stroke="bold"
                        colors="primary:#121331,secondary:#7dac3e,tertiary:#ffffff"
                        style={{ width: '50px', height: '50px' }}>
                    </lord-icon>
                    <div className="text">
                        <h4>Call Us</h4>
                        <span>1234567890</span>
                    </div>
                </div> */}
                <div className="contact">
                    <lord-icon
                        src="https://cdn.lordicon.com/tdhnvcoq.json"
                        trigger="hover"
                        stroke="bold"
                        colors="primary:#133453,secondary:#7dac3e"
                        style={{ width: '50px', height: '50px' }}
                    ></lord-icon>
                    <div className="text">
                        <h4>Mail Us</h4>
                        finace.ops@gmail.com
                    </div>
                </div>
            </div>
            {/* <hr /> */}
            <div className="useful-links">
                <div className="Finace"><h1>Finace</h1> is a revolutionary platform that empowers employees to access their earned wages in real-time and take control of their finances. Employers can benefit from heightened employee engagement, productivity, and an analytical dashboard providing real-time data. Join Finace for financial wellness like never before.</div>
                <div className='right'>
                    <h4>Useful links</h4>
                    <hr style={{ borderWidth: '2px' }} />
                    <div className="lists">
                        <ul className='links-list'>
                            <li><a onClick={scrollToHome} className="list-item">Home</a></li>
                            <li><a onClick={scrollToServices} className="list-item">services</a></li>
                            <li><a onClick={scrollToContactUs} className="list-item">Contact us</a></li>
                            <li><a className="list-item">Privacy policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsefulLinks