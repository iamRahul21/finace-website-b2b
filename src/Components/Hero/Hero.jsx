import React from 'react'
import './Hero.scss'

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="hero-left">
                <div className='hero-para-1'>Ace your Finances with <div className="underline">Early Salary Access!</div></div>
                {/* <div className="hero-para-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam itaque quam iusto quasi quas, quo adipisci pariatur in doloribus incidunt!</div> */}
                <div className='button'>
                    <div className="get-started">Get Started</div>
                    <div className="book-a-demo">Book a demo</div>
                </div>

            </div>
            <div className="hero-right">
                <img
                    src="/yes.svg"
                    alt="Finace App"
                    className='phone-mockup'
                    style={{
                        height: "70vh", width: "auto"
                    }}
                />
            </div>
        </div>
    )
}

export default Hero