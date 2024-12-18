import React from 'react'
import './Advantages.scss'

const Advantages = () => {
    return (
        <section className="finance-advantage">
            <h1>Experience the Finace Advantage</h1>

            <div className="benefit-container">
                {/* Employer Benefits */}
                <div id='hidden-employer'>
                    <img src="/employer.svg" alt="Employer Icon" />
                </div>
                <div className="benefit-box employer">
                    <h3>Employer Benefits</h3>
                    <ul>
                        <li><lord-icon
                            className="icon"
                            src="https://cdn.lordicon.com/ymgusxed.json"
                            trigger="loop"
                            state="loop-cycle"
                        ></lord-icon> Increased employee productivity</li>
                        <li><lord-icon
                            src="https://cdn.lordicon.com/ymgusxed.json"
                            className="icon"
                            trigger="loop"
                            state="loop-cycle"
                        ></lord-icon> Higher employee retention & savings on hiring</li>
                        <li><lord-icon
                            src="https://cdn.lordicon.com/ymgusxed.json"
                            className="icon"
                            trigger="loop"
                            state="loop-cycle"
                        ></lord-icon> Zero cost and seamless integration</li>
                        <li><lord-icon
                            src="https://cdn.lordicon.com/ymgusxed.json"
                            className="icon"
                            trigger="loop"
                            state="loop-cycle"
                        ></lord-icon> No risk and no liability</li>
                        <li><lord-icon
                            src="https://cdn.lordicon.com/ymgusxed.json"
                            className="icon"
                            trigger="loop"
                            state="loop-cycle"
                        ></lord-icon> No impact on cash flow/working capital</li>
                    </ul>
                </div>
                <div>
                    <img id='hide-employer' src="/employer.svg" alt="Employer Icon" />
                </div>
            </div>
            <div className="benefit-container">
                <div>
                    <img src="/employee.svg" alt="Employee Icon" />
                </div>

                {/* Employee Benefits */}
                <div className="benefit-box employee">
                    <h3>Employee Benefits</h3>
                    <ul>
                        <li><lord-icon
                            src="https://cdn.lordicon.com/ymgusxed.json"
                            className="icon"
                            trigger="loop"
                            state="loop-cycle"
                        ></lord-icon> 0% interest</li>
                        <li><lord-icon
                            src="https://cdn.lordicon.com/ymgusxed.json"
                            className="icon"
                            trigger="loop"
                            state="loop-cycle"
                        ></lord-icon> Real-time access to earned wages</li>
                        <li><lord-icon
                            src="https://cdn.lordicon.com/ymgusxed.json"
                            className="icon"
                            trigger="loop"
                            state="loop-cycle"
                        ></lord-icon> Financial independence</li>
                        <li><lord-icon
                            src="https://cdn.lordicon.com/ymgusxed.json"
                            className="icon"
                            trigger="loop"
                            state="loop-cycle"
                        ></lord-icon> Financial educational tools</li>
                        {/* <li><i className="icon-placeholder"></i> <span className="placeholder">More coming soon...</span></li> */}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Advantages