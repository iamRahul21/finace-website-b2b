import React from 'react'
import './Steps.scss'

const Steps = () => {
    return (
        <div className="steps-section">
            <h1 className="steps-heading">How Finace Works</h1>
            <ul className="steps-list">
                <li className="steps">
                    <div className='texts'>
                        <h2>1. Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aut vel corrupti laborum ea debitis possimus quas aspernatur et nesciunt.</p>
                    </div>
                    <img src="/giphy1.webp" alt="Description of the image" style={{ width: "300px", height: "auto" }} />
                </li>
                <li className="steps">
                    <div className='texts'>
                        <h2>2. Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aut vel corrupti laborum ea debitis possimus quas aspernatur et nesciunt.</p>
                    </div>
                    <img src="/giphy2.webp" alt="Description of the image" style={{ width: "300px", height: "auto" }} />
                </li>
                <li className="steps">
                    <div className='texts'>
                        <h2>3. Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aut vel corrupti laborum ea debitis possimus quas aspernatur et nesciunt.</p>
                    </div>
                    <img src="/giphy3.webp" alt="Description of the image" style={{ width: "300px", height: "auto" }} />
                </li>
            </ul>
        </div>
    )
}

export default Steps