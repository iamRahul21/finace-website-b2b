import React from 'react';
import './Features.scss';

const Features = () => {
    return (
        <div className="main-container">
            <div className="container heading-container">
                <h1 id='offerings' className="heading">Our Offerings</h1>
                <p className="subheading">We are revolutionizing the world of wealth management with our fully-integrated platform.</p>
            </div>
            <div className="container card-container">
                <div className="card" id="card-1">
                    <div className="card__img">
                        <lord-icon
                            src="https://cdn.lordicon.com/iuqyhlid.json"
                            trigger="hover"
                            colors="primary:#9ccf60,secondary:#123453"
                            style={{ width: "50px", height: "50px" }}
                            aria-label="Icon representing Employee Mobile App"
                        ></lord-icon>
                    </div>
                    <h3 className="card__heading">Employee Mobile App</h3>
                    <p className="card__description">Providing lightning-fast access to earned wages and comprehensive financial tools, all with 24/7 support.</p>
                </div>
                <div className="card" id="card-2">
                    <div className="card__img">
                        <lord-icon
                            src="https://cdn.lordicon.com/yaxbmvvh.json"
                            trigger="hover"
                            state="hover-unfold"
                            colors="primary:#9ccf60,secondary:#9ccf60,tertiary:#123453"
                            style={{ width: "50px", height: "50px" }}
                            aria-label="Icon representing Employer Dashboard"
                        ></lord-icon>
                    </div>
                    <h3 className="card__heading">Employer Dashboard</h3>
                    <p className="card__description">Empowers employers to monitor financial indicators and insightful product analytics.</p>
                </div>
                <div className="card" id="card-3">
                    <div className="card__img">
                        <lord-icon
                            // src="https://cdn.lordicon.com/drdlomqk.json"
                            // trigger="hover"
                            // colors="primary:#123453,secondary:#123453,tertiary:#123453"
                            src="https://cdn.lordicon.com/nvrrlies.json"
                            trigger="hover"
                            colors="primary:#123453,secondary:#123453,tertiary:#9ccf60,quaternary:#123453,quinary:#e8e230,senary:#f24c00"
                            style={{ width: "50px", height: "50px" }}
                            aria-label="Icon representing Efficient Back-end"
                        ></lord-icon>
                    </div>
                    <h3 className="card__heading">Efficient Back-end</h3>
                    <p className="card__description">Enjoy hassle-free integration and easy access to data with Finace's efficient & fast back-end.</p>
                </div>
            </div>
        </div>
    )
}

export default Features;