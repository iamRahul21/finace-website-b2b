import React from 'react'
import './Advantages.scss'

const Advantages = () => {
    return (
        <section className="finance-advantage">
            <h1>Experience the Finance Advantage</h1>

            <div className="benefit-container">
                {/* Employer Benefits */}
                <div className="benefit-box employer">
                    <h3>Employer Benefits</h3>
                    <ul>
                        <li><lord-icon
                            className="icon"
                            src="https://cdn.lordicon.com/ymgusxed.json"
                            trigger="loop"
                            state="loop-cycle"
                        // colors="primary:#9ccf60,secondary:#133453"
                        ></lord-icon> Increased employee productivity</li>
                        <li><lord-icon
                            src="https://cdn.lordicon.com/ymgusxed.json"
                            className="icon"
                            trigger="loop"
                            state="loop-cycle"
                        // colors="primary:#9ccf60,secondary:#133453"
                        ></lord-icon> Higher employee retention & savings on hiring</li>
                        <li><lord-icon
                            src="https://cdn.lordicon.com/ymgusxed.json"
                            className="icon"
                            trigger="loop"
                            state="loop-cycle"
                        // colors="primary:#9ccf60,secondary:#133453"
                        ></lord-icon> Zero cost and seamless integration</li>
                        <li><lord-icon
                            src="https://cdn.lordicon.com/ymgusxed.json"
                            className="icon"
                            trigger="loop"
                            state="loop-cycle"
                        // colors="primary:#9ccf60,secondary:#133453"
                        ></lord-icon> No risk and no liability</li>
                        <li><lord-icon
                            src="https://cdn.lordicon.com/ymgusxed.json"
                            className="icon"
                            trigger="loop"
                            state="loop-cycle"
                        // colors="primary:#9ccf60,secondary:#133453"
                        ></lord-icon> No impact on cash flow/working capital</li>
                    </ul>
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
                        // colors="primary:#9ccf60,secondary:#133453"
                        ></lord-icon> 0% interest</li>
                        <li><lord-icon
                            src="https://cdn.lordicon.com/ymgusxed.json"
                            className="icon"
                            trigger="loop"
                            state="loop-cycle"
                        // colors="primary:#9ccf60,secondary:#133453"
                        ></lord-icon> Real-time access to earned wages</li>
                        <li><lord-icon
                            src="https://cdn.lordicon.com/ymgusxed.json"
                            className="icon"
                            trigger="loop"
                            state="loop-cycle"
                        // colors="primary:#9ccf60,secondary:#133453"
                        ></lord-icon> Financial independence</li>
                        <li><lord-icon
                            src="https://cdn.lordicon.com/ymgusxed.json"
                            className="icon"
                            trigger="loop"
                            state="loop-cycle"
                        // colors="primary:#9ccf60,secondary:#133453"
                        ></lord-icon> Financial educational tools</li>
                        {/* <li><i className="icon-placeholder"></i> <span className="placeholder">More coming soon...</span></li> */}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Advantages