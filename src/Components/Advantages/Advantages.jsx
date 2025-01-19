import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Advantages.scss';

const Advantages = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Animates only once
        threshold: 0.2,    // Triggers when 20% of the component is in view
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.section 
            className="finance-advantage"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            transition={{ duration: 0.6, ease: "linear" }}
        >
            <h1>Experience the Finace Advantage</h1>

            <div className="benefit-container">
                {/* Employer Benefits */}
                <motion.div
                    id="hidden-employer"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                    transition={{ duration: 0.6, ease: "linear" }}
                >
                    <img src="/employer.svg" alt="Illustration of an employer" />
                </motion.div>
                <motion.div
                    className="benefit-box employer"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                    transition={{ duration: 0.6, ease: "linear" }}
                >
                    <h3>Employer Benefits</h3>
                    <div id="inside-employer">
                        <img src="/employer.svg" alt="Employer Icon" />
                    </div>
                    <ul>
                        <li>
                            <lord-icon
                                className="icon"
                                src="https://cdn.lordicon.com/ymgusxed.json"
                                trigger="loop"
                                state="loop-cycle"
                                style={{ width: '30px', height: '30px' }}
                                aria-hidden="true"
                            ></lord-icon>
                            Increased employee productivity
                        </li>
                        <li>
                            <lord-icon
                                src="https://cdn.lordicon.com/ymgusxed.json"
                                className="icon"
                                trigger="loop"
                                state="loop-cycle"
                                style={{ width: '40px', height: '30px' }}
                                aria-hidden="true"
                            ></lord-icon>
                            Higher employee retention & savings on hiring
                        </li>
                        <li>
                            <lord-icon
                                src="https://cdn.lordicon.com/ymgusxed.json"
                                className="icon"
                                trigger="loop"
                                state="loop-cycle"
                                style={{ width: '30px', height: '30px' }}
                                aria-hidden="true"
                            ></lord-icon>
                            Zero cost and seamless integration
                        </li>
                        <li>
                            <lord-icon
                                src="https://cdn.lordicon.com/ymgusxed.json"
                                className="icon"
                                trigger="loop"
                                state="loop-cycle"
                                style={{ width: '30px', height: '30px' }}
                                aria-hidden="true"
                            ></lord-icon>
                            No risk and no liability
                        </li>
                        <li>
                            <lord-icon
                                src="https://cdn.lordicon.com/ymgusxed.json"
                                className="icon"
                                trigger="loop"
                                state="loop-cycle"
                                style={{ width: '30px', height: '30px' }}
                                aria-hidden="true"
                            ></lord-icon>
                            No impact on cash flow/working capital
                        </li>
                    </ul>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                    transition={{ duration: 0.6, ease: "linear" }}
                >
                    <img id="hide-employer" src="/employer.svg" alt="Illustration of an employer" />
                </motion.div>
            </div>
            <div className="benefit-container">
                <motion.div
                    id="employee-img"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                    transition={{ duration: 0.6, ease: "linear" }}
                >
                    <img src="/employee.svg" alt="Illustration of an employee" />
                </motion.div>

                {/* Employee Benefits */}
                <motion.div
                    className="benefit-box employee"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                    transition={{ duration: 0.6, ease: "linear" }}
                >
                    <h3>Employee Benefits</h3>
                    <div id="inside-employee">
                        <img src="/employee.svg" alt="Employee Icon" />
                    </div>
                    <ul>
                        <li>
                            <lord-icon
                                src="https://cdn.lordicon.com/ymgusxed.json"
                                className="icon"
                                trigger="loop"
                                state="loop-cycle"
                                aria-hidden="true"
                            ></lord-icon>
                            0% interest
                        </li>
                        <li>
                            <lord-icon
                                src="https://cdn.lordicon.com/ymgusxed.json"
                                className="icon"
                                trigger="loop"
                                state="loop-cycle"
                                aria-hidden="true"
                            ></lord-icon>
                            Real-time access to earned wages
                        </li>
                        <li>
                            <lord-icon
                                src="https://cdn.lordicon.com/ymgusxed.json"
                                className="icon"
                                trigger="loop"
                                state="loop-cycle"
                                aria-hidden="true"
                            ></lord-icon>
                            Financial independence
                        </li>
                        <li>
                            <lord-icon
                                src="https://cdn.lordicon.com/ymgusxed.json"
                                className="icon"
                                trigger="loop"
                                state="loop-cycle"
                                aria-hidden="true"
                            ></lord-icon>
                            Financial educational tools
                        </li>
                    </ul>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Advantages;