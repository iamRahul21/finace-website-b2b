import React from 'react'
import './Benefits.scss'

const Benefits = () => {
    return (
        <div className='benefits-section'>
            <h1 className='benefits-heading'>The Finace Advantage: A Win-Win Solution for Employers and Employees</h1>
            {/* <div className="employers">
                <h3>Benefits for employers</h3>
                <img src="src\assets\employers.jpg" alt="employers" />
            </div>
            <div className="employees">
                <img src="src\assets\employees.jpg" alt="employees" />
                <h3>Benefits for employees</h3>
            </div> */}
            <div className="sec">
                <div className="div1">
                    <h3>Benefits for employers</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos, possimus illo, doloribus est, quidem maxime architecto dolor non impedit optio velit consequuntur odit.</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, minus!</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem tenetur deserunt libero!</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    </ul>
                </div>
                <div className="div2">
                    <h3>Benefits for employees</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quos natus tenetur dolore, inventore nostrum error sunt, perferendis eveniet, esse consectetur temporibus. Nulla dignissimos totam magnam!</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, minus!</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem tenetur deserunt libero!</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Benefits