import React, { useState, useEffect } from 'react';
import './FAQ.scss';
import Navbar from '../Navbar/Navbar';
import UsefulLinks from '../UsefulLinks/UsefulLinks';
import Footer from '../Footer/Footer';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('employer');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    setActiveTab('employer');
  }, []);
  return (
    <section>
      <Navbar />

      <header className="faq-header">
        <div className="faq-hover">
          <lord-icon
            src="https://cdn.lordicon.com/abhwievu.json"
            trigger="hover"
            state="hover-conversation-alt"
            colors="primary:#9ccf60,secondary:#123453,tertiary:#ebe6ef,quaternary:#ebe6ef"
            style={{ width: '150px', height: '150px' }}
          ></lord-icon>
        </div>
        <div className="faq-header-text"><h1>Frequently Asked Questions</h1>
          <p>Learn how to start using our product. Understand the key features</p></div>
      </header>

      <div className="faq-containers">
        {activeTab === 'employer' && (
          <aside className="sidebar" id="employerToC">
            <div className="toggle-buttons">
              <button
                id="employerBtn"
                className={activeTab === 'employer' ? 'active' : ''}
                onClick={() => setActiveTab('employer')}
              >
                EMPLOYER
              </button>
              <button
                id="employeeBtn"
                className={activeTab === 'employee' ? 'active' : ''}
                onClick={() => setActiveTab('employee')}
              >
                EMPLOYEE
              </button>
            </div>
            <h3>Employer Support</h3>
            <ul>
              <li><a href="#about">About Finace</a></li>
              <li><a href="#EWA">About Earned Wage Access</a></li>
            </ul>
            <div className="support-box">
              <strong>Still need support?</strong>
              <p>Contact our support team.</p>
              <p>Email: <a href="mailto:finace.ops@gmail.com">finace.ops@gmail.com</a></p>
            </div>
          </aside>
        )}

        {activeTab === 'employee' && (
          <aside className="sidebar" id="employeeToC">
            <div className="toggle-buttons">
              <button
                id="employerBtn"
                className={activeTab === 'employer' ? 'active' : ''}
                onClick={() => setActiveTab('employer')}
              >
                EMPLOYER
              </button>
              <button
                id="employeeBtn"
                className={activeTab === 'employee' ? 'active' : ''}
                onClick={() => setActiveTab('employee')}
              >
                EMPLOYEE
              </button>
            </div>
            <h3>Employee Support</h3>
            <ul>
              <li><a href="#aboutEE">About Finace</a></li>
              <li><a href="#EWAEE">About Earned Wage Access</a></li>
            </ul>
            <div className="support-box">
              <strong>Still need support?</strong>
              <p>Contact our support team.</p>
              <p>Email: <a href="mailto:finace.ops@gmail.com">finace.ops@gmail.com</a></p>
            </div>
          </aside>
        )}

        <main className="faq-content">
          {activeTab === 'employer' && (
            <section id="employerFaq">
              <div className="faq-section">
                <h2 id="about">About Finace</h2>
                <div
                  className={`faq-item ${openFaq === 0 ? 'open' : ''}`}
                  onClick={() => toggleFaq(0)}
                >
                  <div className="faq-que">
                    <h3>What is Finace?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>
                    Finace is a digital platform that provides Earned Wage Access and a range of financial
                    management tools to help employers tackle the financial volatility of their workforce. Our
                    comprehensive solution comes at zero cost, with zero impact on cash flow and zero liability
                    for employers. We're dedicated to relieving the financial stress that can distract
                    employees, reduce productivity, and lead to attrition. Choose Finace for a stress-free,
                    efficient financial management solution.
                  </p>
                </div>

                <div
                  className={`faq-item ${openFaq === 1 ? 'open' : ''}`}
                  onClick={() => toggleFaq(1)}
                >
                  <div className="faq-que">
                    <h3>Who can use Finace?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>Finace's services are available to all types of organizations, including private companies,
                    NGOs, and government entities. Our platform is designed to support both on-roll and off-roll
                    employees, providing comprehensive financial management solutions to meet the needs of your
                    entire workforce.
                  </p>
                </div>
                <div
                  className={`faq-item ${openFaq === 2 ? 'open' : ''}`}
                  onClick={() => toggleFaq(2)}
                >
                  <div className="faq-que">
                    <h3>What makes Finace different from credit cards?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>While credit cards are only accessible to a small percentage of Indians and often come with
                    high interest rates, ranging from 24% p.a. to 52.86% p.a., Finace offers interest-free
                    liquidity access to the underserved masses with zero or limited credit history. At Finace,
                    we believe in providing financial solutions that are accessible and affordable for everyone,
                    regardless of their credit history or financial background.
                  </p>
                </div>
                <div
                  className={`faq-item ${openFaq === 3 ? 'open' : ''}`}
                  onClick={() => toggleFaq(3)}
                >
                  <div className="faq-que">
                    <h3>How is Finace different from the other lenders in the market?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>Our platform provides employees with complete financial flexibility along with access to
                    educational resources to encourage better financial practices. You no longer have to deal
                    with predatory loans, complicated KYC procedures, and loan rejections.</p>
                </div>
                <div
                  className={`faq-item ${openFaq === 4 ? 'open' : ''}`}
                  onClick={() => toggleFaq(4)}
                >
                  <div className="faq-que">
                    <h3>How can an employee access Finace?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>Currently, employees can access Finace through our Android app. To get started, simply log in
                    using your registered email or phone number on the Finace app.
                  </p>
                </div>
                <div
                  className={`faq-item ${openFaq === 5 ? 'open' : ''}`}
                  onClick={() => toggleFaq(5)}
                >
                  <div className="faq-que">
                    <h3>How can my company offer Finace’s services to employees?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>Your organization will need to partner with Finace. Once the partnership is established, your
                    employees can begin using our platform to manage their finances and access a range of
                    financial tools. To ensure a smooth integration and launch process, you'll have access to an
                    Account Manager who will provide support and guidance every step of the way.
                  </p>
                </div>
                <div
                  className={`faq-item ${openFaq === 6 ? 'open' : ''}`}
                  onClick={() => toggleFaq(6)}
                >
                  <div className="faq-que">
                    <h3>How long does it take to set up Finace for our employees?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>The process typically takes between 1 to 4 weeks for a company to start offering Finace's
                    services to its employees.</p>
                </div>
                <div
                  className={`faq-item ${openFaq === 7 ? 'open' : ''}`}
                  onClick={() => toggleFaq(7)}
                >
                  <div className="faq-que">
                    <h3>How can my company integrate the attendance and payroll data with Finace?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>You can share attendance and payroll data with Finace either manually or through integration.
                    Our platform seamlessly integrates with HRMS, Payroll, or Attendance systems, eliminating
                    the workload on your HR team.</p>
                </div>

                <div
                  className={`faq-item ${openFaq === 8 ? 'open' : ''}`}
                  onClick={() => toggleFaq(8)}
                >
                  <div className="faq-que">
                    <h3>Will my company be liable?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>With Finace, companies face zero liability or risk. This means that your company won't be
                    responsible for any funds that your employees withdraw through our platform.</p>
                </div>

                <div
                  className={`faq-item ${openFaq === 9 ? 'open' : ''}`}
                  onClick={() => toggleFaq(9)}
                >
                  <div className="faq-que">
                    <h3>Is there any cost for employers to partner with Finace and offer its services to their
                      employees?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>Partnering with Finace is completely free for employers, and you can provide our services to
                    your employees at zero cost or risk to your company. Since the funds are provided by Finace,
                    there is no impact on your working capital. Employees will only be charged a small
                    transaction fee when they access funds, with no hidden charges or interest fees.</p>
                </div>

                <div
                  className={`faq-item ${openFaq === 10 ? 'open' : ''}`}
                  onClick={() => toggleFaq(10)}
                >
                  <div className="faq-que">
                    <h3>Why should my employees be charged?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>Finace partners with banks, technology providers, and payroll systems to provide the
                    platform, which involves integration and collaboration. The processing fee enables Finace to
                    provide their financial wellness platform and access to funds at zero interest and no hidden
                    charges.</p>
                </div>

                <div
                  className={`faq-item ${openFaq === 11 ? 'open' : ''}`}
                  onClick={() => toggleFaq(11)}
                >
                  <div className="faq-que">
                    <h3>Can employees access Finace’s solution after they have quit the company?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>Once an employee leaves the company, they will no longer have access to Finace.</p>
                </div>

                <div
                  className={`faq-item ${openFaq === 12 ? 'open' : ''}`}
                  onClick={() => toggleFaq(12)}
                >
                  <div className="faq-que">
                    <h3>What happens if an employee absconds?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>Finace bears all the liability, so there is no risk to your company. After processing the
                    full-and-final settlement, your company can settle the amount with Finace.</p>
                </div>

                <div
                  className={`faq-item ${openFaq === 13 ? 'open' : ''}`}
                  onClick={() => toggleFaq(13)}
                >
                  <div className="faq-que">
                    <h3>What about data security and compliance?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>Finace ensures the security of sensitive data by storing it behind a firewall, accessible
                    only to authorized parties. Finace does not share your employees’ data with any third party
                    for commercial purposes. Furthermore, Finace aims to be compliant with ISO 27001 and VAPT
                    certification, as well as RBI, labor laws, and GDPR guidelines.</p>
                </div>

                <div
                  className={`faq-item ${openFaq === 14 ? 'open' : ''}`}
                  onClick={() => toggleFaq(14)}
                >
                  <div className="faq-que">
                    <h3>How do I contact Finace's customer support?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>You can reach Finace's customer support via our website and email. Email -
                    finace.ops@gmail.com</p>
                </div>

                <h2 id="EWA">About Earned Wage Access</h2>
                <div
                  className={`faq-item ${openFaq === 15 ? 'open' : ''}`}
                  onClick={() => toggleFaq(15)}
                >
                  <div className="faq-que">
                    <h3>What is Earned Wage Access?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>
                    Earned Wage Access is a service that enables your company to offer employees access to a
                    portion of your earned but unpaid salary, any time before payday. To offer this service to
                    your employees, your company can partner with Finace at no cost and without any risk or
                    liability. Since Finace provides the funds, it doesn't impact your company's working
                    capital.
                  </p>
                </div>



                <div
                  className={`faq-item ${openFaq === 16 ? 'open' : ''}`}
                  onClick={() => toggleFaq(16)}
                >
                  <div className="faq-que">
                    <h3>How does Earned Wage Access work?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>After partnering with Finace, both on-roll and off-roll employees of your company will be
                    able to access Earned Wage Access. Employees can withdraw a portion of their earned salary
                    by paying a transaction fee. At the end of the month, Finace reconciles the amount with the
                    payroll.</p>
                </div>

                <div
                  className={`faq-item ${openFaq === 17 ? 'open' : ''}`}
                  onClick={() => toggleFaq(17)}
                >
                  <div className="faq-que">
                    <h3>How much can an employee withdraw?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>Earned Wage Access allows your employees to withdraw a portion of their earned salary before
                    payday, based on their attendance. The employer has the flexibility to customize the
                    percentage of earned salary that can be withdrawn, giving employees more control over their
                    finances.</p>
                </div>

                <div
                  className={`faq-item ${openFaq === 18 ? 'open' : ''}`}
                  onClick={() => toggleFaq(18)}
                >
                  <div className="faq-que">
                    <h3>Can an employee withdraw more than their monthly earned salary?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>No, Earned Wage Access allows employees to withdraw a portion of their earned salary, which
                    is always less than their monthly salary.</p>
                </div>

                <div
                  className={`faq-item ${openFaq === 19 ? 'open' : ''}`}
                  onClick={() => toggleFaq(19)}
                >
                  <div className="faq-que">
                    <h3>Will there be an impact on an employee's credit score?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>Earned Wage Access is not a loan and hence there will be no impact on your employee’s credit
                    score.</p>
                </div>

                <div
                  className={`faq-item ${openFaq === 20 ? 'open' : ''}`}
                  onClick={() => toggleFaq(20)}
                >
                  <div className="faq-que">
                    <h3>How long does it take for an employee to access the funds?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>Earned Wage Access is credited to employees' bank account within 60 seconds.</p>
                </div>

                <div
                  className={`faq-item ${openFaq === 21 ? 'open' : ''}`}
                  onClick={() => toggleFaq(21)}
                >
                  <div className="faq-que">
                    <h3>Can an employee make multiple withdrawals?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>Yes, employees can make multiple withdrawals in a month.</p>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'employee' && (
            <section id="employeeFaq">
              <div className="faq-section">
                <h2>About Finace</h2>
                <div
                  className={`faq-item ${openFaq === 22 ? 'open' : ''}`}
                  onClick={() => toggleFaq(22)}
                >
                  <div className="faq-que">
                    <h3>Am I eligible to use Finace?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>
                    To access Finace's services, your company needs to partner with us. You can contact your HR
                    team to find out if Finace’s services are available to you. If your company has not yet
                    partnered with Finace, you can initiate the conversation by visiting our website below and
                    looping in your HR team: www.befinace.com
                  </p>
                </div>

                <div
                  className={`faq-item ${openFaq === 23 ? 'open' : ''}`}
                  onClick={() => toggleFaq(23)}
                >
                  <div className="faq-que">
                    <h3>How can I access Finace?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>You can access Finace via the Android app. You can log in via your registered email or phone
                    number on the app.</p>
                </div>

                <div
                  className={`faq-item ${openFaq === 24 ? 'open' : ''}`}
                  onClick={() => toggleFaq(24)}
                >
                  <div className="faq-que">
                    <h3>How is Finace different compared to credit cards and other forms of loans?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>While credit cards are only accessible to a small percentage of Indians and often come with
                    high interest rates, ranging from 24% p.a. to 52.86% p.a., Finace offers interest-free
                    liquidity access to the underserved masses with zero or limited credit history. At Finace,
                    we believe in providing financial solutions that are accessible and affordable for everyone,
                    regardless of their credit history or financial background.</p>
                </div>

                <div
                  className={`faq-item ${openFaq === 25 ? 'open' : ''}`}
                  onClick={() => toggleFaq(25)}
                >
                  <div className="faq-que">
                    <h3>How much does Finace charge?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>Finace does not levy interest, convenience, or documentation charges, unlike other financial
                    products. Only a transaction fee is charged for availing our services.</p>
                </div>

                <div
                  className={`faq-item ${openFaq === 26 ? 'open' : ''}`}
                  onClick={() => toggleFaq(26)}
                >
                  <div className="faq-que">
                    <h3>Why should I be charged?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>Finace partners with banks, technology providers, and payroll systems to provide the
                    platform, which involves integration and collaboration. The processing fee enables Finace to
                    provide their financial wellness platform and access to funds at zero interest and no hidden
                    charges.</p>
                </div>

                <div
                  className={`faq-item ${openFaq === 27 ? 'open' : ''}`}
                  onClick={() => toggleFaq(27)}
                >
                  <div className="faq-que">
                    <h3>How much interest do I need to pay?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>Finace does not charge any interest. You are only required to pay a transaction fee when you
                    withdraw funds.</p>
                </div>

                <div
                  className={`faq-item ${openFaq === 28 ? 'open' : ''}`}
                  onClick={() => toggleFaq(28)}
                >
                  <div className="faq-que">
                    <h3>How do I log into the Finace app?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>To start using the Finace app, your HR team needs to activate your account first. After
                    activation, you can download the Finace app and sign up using your registered email or
                    mobile number. Please keep in mind that you will log in via a one-time password (OTP) that
                    will be sent to your registered email or phone number.</p>
                </div>

                <div
                  className={`faq-item ${openFaq === 29 ? 'open' : ''}`}
                  onClick={() => toggleFaq(29)}
                >
                  <div className="faq-que">
                    <h3>How do I contact Finace customer support?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>You can reach Finace's customer support via email. Email: finace.ops@gmail.com</p>
                </div>

                <h2>About Earned Wage Access</h2>
                <div
                  className={`faq-item ${openFaq === 30 ? 'open' : ''}`}
                  onClick={() => toggleFaq(30)}
                >
                  <div className="faq-que">
                    <h3>What is Earned Wage Access?</h3>
                    <span className="icon">&#9654;</span>
                  </div>
                  <p>
                    Earned Wage Access is a service that enables you to access a part of your earned but unpaid
                    salary before payday. The remaining balance of your salary will be credited on payday. This
                    service is not a loan and can be accessed at zero interest.
                  </p>
                </div>

                <div
                  className={`faq-item ${openFaq === 31 ? 'open' : ''}`}
                  onClick={() => toggleFaq(31)}
                >
                  <div className="faq-que">
                    <h3>How does Earned Wage Access work?</h3>
                    <span class="icon">&#9654;</span>
                  </div>
                  <p>Once your company partners with Finace, you can access Earned Wage Access to withdraw a
                    portion of your earned salary based on attendance and limits set by your company. Finace
                    reconciles with your payroll at the end of the month and the remaining salary balance will
                    be credited to your account on payday.</p>
                </div>

                <div
                  className={`faq-item ${openFaq === 32 ? 'open' : ''}`}
                  onClick={() => toggleFaq(32)}
                >
                  <div className="faq-que">
                    <h3>How much funds can I withdraw?</h3>
                    <span class="icon">&#9654;</span>
                  </div>
                  <p>With Earned Wage Access, you can access a portion of your earned salary based on your
                    company's policy. The percentage of earned salary that can be withdrawn is decided by your
                    company.</p>
                </div>

                <div
                  className={`faq-item ${openFaq === 33 ? 'open' : ''}`}
                  onClick={() => toggleFaq(33)}
                >
                  <div className="faq-que">
                    <h3>Will there be an impact on my credit score?</h3>
                    <span class="icon">&#9654;</span>
                  </div>
                  <p>Earned Wage Access is not a loan, hence there will be no impact on your credit score.</p>
                </div>

                <div
                  className={`faq-item ${openFaq === 34 ? 'open' : ''}`}
                  onClick={() => toggleFaq(34)}
                >
                  <div className="faq-que">
                    <h3>How long does it take to get the funds?</h3>
                    <span class="icon">&#9654;</span>
                  </div>
                  <p>With Earned Wage Access, funds are credited to your bank account within 60 seconds.</p>
                </div>

                <div
                  className={`faq-item ${openFaq === 35 ? 'open' : ''}`}
                  onClick={() => toggleFaq(35)}
                >
                  <div className="faq-que">
                    <h3>Can I make multiple withdrawals?</h3>
                    <span class="icon">&#9654;</span>
                  </div>
                  <p>Yes, you can make multiple withdrawals in a month.</p>
                </div>

              </div>
            </section>
          )}
        </main>
      </div>
      <UsefulLinks />
      <Footer />
    </section>
  );
};

export default FAQ;