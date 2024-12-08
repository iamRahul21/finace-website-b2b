import React from 'react'
import './Hero.scss'

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="hero-left">
                <div className='hero-para-1'>
                    <span class="line-one">Ace your Finances</span><br />
                    <span class="line-two">
                        with <span class="color">Finace</span>
                    </span>
                </div>
                <div className="hero-para-2">Take control of your financial well-being! Start with Early Salary Access today as we bring you a complete suite of financial services tailored for your growth.</div>
                <div className='button'>
                    <div className="get-started">Get Started</div>
                    <div className="book-a-demo">Book a demo</div>
                </div>
                <div className="hero-para-3">Discover how you can access your earned salary before month-end</div>
            </div>
            <div className="hero-right">
                <img
                    src="/yes.svg"
                    alt="Finace App"
                    className='phone-mockup'
                    style={{
                        height: "80vh", width: "auto"
                    }}
                />
            </div>
        </div>
    )
}

export default Hero