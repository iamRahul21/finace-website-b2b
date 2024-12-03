import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'lord-icon-element';
import './UsefulLinks.scss'

const UsefulLinks = () => {
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
                        <span>Bangalore, India</span>
                    </div>
                </div>
                <div className="contact">
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
                </div>
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
                        <span>finace.ops@gmail.com</span>
                    </div>
                </div>
            </div>
            {/* <hr /> */}
            <div className="useful-links">
                <div className="Finace"><h1>Finace</h1> <span>is a revolutionary platform that empowers employees to access their earned wages in real-time and take control of their finances. Employers can benefit from heightened employee engagement, productivity, and an analytical dashboard providing real-time data. Join Finace for financial wellness like never before.</span></div>
                <div className='right'>
                    <h4>Useful links</h4>
                    <hr style={{borderWidth: '2px' }} />
                    <div className="lists">
                        <ul className='links-list1'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">about</a></li>
                            <li><a href="#">services</a></li>
                            <li><a href="#">portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <ul className='links-list2'>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Expert Team</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Latest News</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsefulLinks