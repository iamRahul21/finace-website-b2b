import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Steps.scss';

const Steps = () => {
    const iframeRef = useRef(null);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

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
            root: null,
            threshold: 0.5,
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <motion.section
            id="timeline"
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
        >
            <motion.h1
                className="steps-head"
                variants={itemVariants}
                aria-label="Steps on how Finace works"
            >
                How Finace Works
            </motion.h1>
            <motion.p
                className="leader"
                variants={itemVariants}
                aria-label="Introduction to the steps in using Finace platform"
            >
                With Finace, managing your finances has never been easier. Our platform works seamlessly in four simple steps:
            </motion.p>

            <motion.ul
                className="demo-card-wrapper"
                role="list"
                aria-label="Steps to use Finace platform"
                variants={containerVariants}
            >
                {[
                    'Employee requests earned pay on Finace',
                    "Finace credits the earned salary instantly to the employee's account",
                    "Finace reconciles the earned salary with your company's payroll",
                    'Employers gain real-time insights into the financial analytics of the workforce, including earned wage access and employee turnover rates',
                ].map((step, index) => (
                    <motion.li
                        className="demo-card"
                        role="listitem"
                        variants={itemVariants}
                        key={index}
                    >
                        <div className="head">
                            <div
                                className="number-box"
                                aria-label={`Step ${index + 1}`}
                            >
                                {`0${index + 1}`}
                            </div>
                            <h2>{step}</h2>
                        </div>
                    </motion.li>
                ))}
            </motion.ul>

            {/* <motion.iframe
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
                variants={itemVariants}
            ></motion.iframe> */}
        </motion.section>
    );
};

export default Steps;
