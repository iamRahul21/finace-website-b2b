import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='Footer-section'>
            <div className="Footer-item">
                <p>Follow us on:</p>
                <div className="social-icons">
                    {/* <lord-icon
                        src="https://cdn.lordicon.com/fmwsotep.json"
                        trigger="hover"
                        stroke="bold"
                        style={{ width: "50px", height: "50px" }}
                    ></lord-icon>
                    <lord-icon
                        src="https://cdn.lordicon.com/tzdtywkz.json"
                        trigger="hover"
                        style={{ width: "50px", height: "50px" }}
                    ></lord-icon> */}
                    <a href="https://www.linkedin.com/company/befinace" target="_blank" rel="noopener noreferrer">
                        <lord-icon
                            src="https://cdn.lordicon.com/awxxhkom.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#ebe6ef,tertiary:#0a66c2"
                            style={{ width: "50px", height: "50px" }}>
                        </lord-icon>
                    </a>

                </div>
            </div>
            <div className="Footer-item">
                <p>Download the mobile app now</p>
                <div className='appstore'>
                    <a href="https://play.google.com/store/apps/details?id=com.befinace.app&hl=en" target="_blank" rel="noopener noreferrer">
                        <img src="/GetItOnGooglePlay_Badge_Web_color_English.png" alt="Get it on Google Play" />
                    </a>
                    {/* <img src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Download on the app store" /> */}
                </div>
            </div>
            <div className="Footer-item">© Copyright Finace.<br/>All Rights Reserved</div>
        </div>
    )
}

export default Footer