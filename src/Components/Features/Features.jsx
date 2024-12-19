import React, { useState } from 'react';
import './Features.scss'

const Features = () => {
    return (
        <div class="main-container">
            <div class="container heading-container">
                <h1 id='offerings' class="heading">Our Offerings</h1>
                <p class="subheading">We are revolutionizing the world of wealth management with our fully-integrated platform.
                </p>
            </div>
            <div class="container card-container">
                <div class="card" id="card-1">
                    <div class="card__img">
                        <lord-icon src="https://cdn.lordicon.com/iuqyhlid.json" trigger="hover"
                            colors="primary:#9ccf60,secondary:#123453" style={{ width: "50px", height: "50px" }}>
                        </lord-icon>
                    </div>
                    <h3 class="card__heading">Employee Mobile App</h3>
                    <p class="card__description">Providing lightning-fast access to earned wages and comprehensive financial tools,
                        all with 24/7 support.</p>
                </div>
                <div class="card" id="card-2">
                    <div class="card__img">
                        <lord-icon src="https://cdn.lordicon.com/yaxbmvvh.json" trigger="hover" state="hover-unfold"
                            colors="primary:#9ccf60,secondary:#9ccf60,tertiary:#123453" style={{ width: "50px", height: "50px" }}>
                        </lord-icon>
                    </div>
                    <h3 class="card__heading">Employer Dashboard</h3>
                    <p class="card__description">Empowers employers to monitor financial indicators and insightful product
                        analytics.</p>
                </div>
                <div class="card" id="card-3">
                    <div class="card__img">
                        <lord-icon src="https://cdn.lordicon.com/drdlomqk.json" trigger="hover"
                            colors="primary:#123453,secondary:#123453,tertiary:#9ccf60" style={{ width: "50px", height: "50px" }}>
                        </lord-icon>
                    </div>
                    <h3 class="card__heading">Efficient Back-end</h3>
                    <p class="card__description">Enjoy hassle-free integration and easy access to data with Finace's efficient &
                        fast back-end.</p>
                </div>
            </div>
        </div>
    )
}

export default Features