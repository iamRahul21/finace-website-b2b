import React, { useEffect, useRef } from 'react';
import './Steps.scss';

const Steps = () => {
    const iframeRef = useRef(null);

    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (iframeRef.current) {
                    const iframe = iframeRef.current;
                    const autoplayUrl = "https://www.youtube.com/embed/BBJa32lCaaY?autoplay=1&mute=1&si=D6o0BmYxTPVhlIwa";
                    const pauseUrl = "https://www.youtube.com/embed/BBJa32lCaaY?autoplay=0&mute=1&si=D6o0BmYxTPVhlIwa";

                    // If the video is in the viewport, play it; otherwise, stop it
                    iframe.src = entry.isIntersecting ? autoplayUrl : pauseUrl;
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            root: null, // Use the viewport as the root
            threshold: 0.5, // Trigger when 50% of the video is visible
        });

        if (iframeRef.current) {
            observer.observe(iframeRef.current);
        }

        return () => {
            if (iframeRef.current) {
                observer.unobserve(iframeRef.current);
            }
        };
    }, []);

    return (
        <section id="timeline">
            <h1 className="steps-head" aria-label="Steps on how Finace works">How Finace Works</h1>
            <p className="leader" aria-label="Introduction to the steps in using Finace platform">
                With Finace, managing your finances has never been easier. Our platform works seamlessly in four simple steps:
            </p>

            <ul className="demo-card-wrapper" role="list" aria-label="Steps to use Finace platform">
                <li className="demo-card" role="listitem">
                    <div className="head">
                        <div className="number-box" aria-label="Step 1">
                            01
                        </div>
                        <h2>Employee requests earned pay on Finace</h2>
                    </div>
                </li>

                <li className="demo-card" role="listitem">
                    <div className="head">
                        <div className="number-box" aria-label="Step 2">
                            02
                        </div>
                        <h2>Finace credits the earned salary instantly to the employee's account</h2>
                    </div>
                </li>

                <li className="demo-card" role="listitem">
                    <div className="head">
                        <div className="number-box" aria-label="Step 3">
                            03
                        </div>
                        <h2>Finace reconciles the earned salary with your company's payroll</h2>
                    </div>
                </li>

                <li className="demo-card" role="listitem">
                    <div className="head">
                        <div className="number-box" aria-label="Step 4">
                            04
                        </div>
                        <h2>Employers gain real-time insights into the financial analytics of the workforce, including earned wage access and employee turnover rates</h2>
                    </div>
                </li>
            </ul>
            {/* 
            <iframe
                ref={iframeRef}
                width="760"
                height="415"
                src="https://www.youtube.com/embed/BBJa32lCaaY?si=D6o0BmYxTPVhlIwa"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                aria-label="Video explaining how Finace works"
            >
            </iframe> 
            */}
        </section>
    );
};

export default Steps;