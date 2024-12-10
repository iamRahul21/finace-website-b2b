import React from 'react'
import './Steps.scss'

const Steps = () => {
    return (
        <section id="timeline">
            <h1>How Finace Works</h1>
            <p className="leader">
                With Finace, managing your finances has never been easier. Our platform works seamlessly in four simple steps:
            </p>
            <div className="demo-card-wrapper">
                <div className="demo-card demo-card--step1">
                    <div className="head">
                        <div className="number-box">
                            <span>01</span>
                        </div>
                        <h2>Employee requests earned pay on Finace.</h2>
                    </div>
                    <div className="body">
                        <iframe
                            src="https://giphy.com/embed/3ov9jQX2Ow4bM5xxuM"
                            width="100%"
                            height="100%"
                            style={{ padding: 0, maxWidth: '100%' }}
                            frameBorder="0"
                            allowFullScreen
                            title="Giphy Embed"
                        ></iframe>
                    </div>

                </div>

                <div className="demo-card demo-card--step2">
                    <div className="head">
                        <div className="number-box">
                            <span>02</span>
                        </div>
                        <h2>Finace credits the earned salary instantly to the employee's account.</h2>
                    </div>
                    <div className="body">
                        <iframe
                            src="https://giphy.com/embed/3ov9jQX2Ow4bM5xxuM"
                            width="100%"
                            height="100%"
                            style={{ padding: 0, maxWidth: '100%' }}
                            frameBorder="0"
                            allowFullScreen
                            title="Giphy Embed"
                        ></iframe>
                    </div>
                </div>

                <div className="demo-card demo-card--step3">
                    <div className="head">
                        <div className="number-box">
                            <span>03</span>
                        </div>
                        <h2>Finace reconciles the earned salary with your company's payroll.</h2>
                    </div>
                    <div className="body">
                        <iframe
                            src="https://giphy.com/embed/3ov9jQX2Ow4bM5xxuM"
                            width="100%"
                            height="100%"
                            style={{ padding: 0, maxWidth: '100%' }}
                            frameBorder="0"
                            allowFullScreen
                            title="Giphy Embed"
                        ></iframe>
                    </div>
                </div>

                <div className="demo-card demo-card--step4">
                    <div className="head">
                        <div className="number-box">
                            <span>04</span>
                        </div>
                        <h2>
                            Employers gain real-time insights into the financial analytics of the workforce, including earned wage
                            access and employee turnover rates.
                        </h2>
                    </div>
                    <div className="body">
                        <iframe
                            src="https://giphy.com/embed/3ov9jQX2Ow4bM5xxuM"
                            width="100%"
                            height="100%"
                            style={{ padding: 0, maxWidth: '100%' }}
                            frameBorder="0"
                            allowFullScreen
                            title="Giphy Embed"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Steps