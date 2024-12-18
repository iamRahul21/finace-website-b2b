import React from 'react';
import './PrivacyPolicy.scss'
import Navbar from '../Navbar/Navbar';
import UsefulLinks from '../UsefulLinks/UsefulLinks';
import Footer from '../Footer/Footer';
import RequestDemo from '../RequestDemo/RequestDemo'

const PrivacyPolicy = () => {
  // Function to scroll to specific sections
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id='privacy'>
      <Navbar />
      <div className="privacy-container">
        <div className="table-of-contents">
          <h3>Table of Contents</h3>
          <ul>
            <li>
              <a onClick={() => scrollToSection('section1')}>Introduction</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('section2')}>
                Collection, processing, disclosure, and sharing of Information.
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection('section3')}>Information Usage</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('section4')}>
                Mechanism for Grievance Redressal
              </a>
            </li>
          </ul>
        </div>


        <div className="main-content">
          <h1>Privacy Policy</h1>
          <p style={{ textAlign: 'center' }}>
            {/* <strong>Last Updated May 23rd, 2022</strong> */}
          </p>

          <div className="table-of-contents1">
            <h3>Table of Contents</h3>
            <ul>
              <li>
                <a onClick={() => scrollToSection('section1')}>Introduction</a>
              </li>
              <li>
                <a onClick={() => scrollToSection('section2')}>
                  Collection, processing, disclosure, and sharing of Information.
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection('section3')}>Information Usage</a>
              </li>
              <li>
                <a onClick={() => scrollToSection('section4')}>
                  Mechanism for Grievance Redressal
                </a>
              </li>
            </ul>
          </div>
          <hr />
          <h2 id="section1">Introduction</h2>
          <p>
            Befinace Technologies Private Limited (hereinafter referred to as “the Company”), through its Mobile
            Application called “Finace” runs an employee financial wellness platform that allows the employee users
            to access their earned salary at any point of time at an agreed transaction fees which credit is
            extended by Non-Banking Financial Companies with whom Finace has arrangements. The terms used in the
            Privacy Policy (“Policy”) have the meaning as defined in the Terms of Use. The present policy lays down
            how Finace collects, uses, discloses, shares and transfers Information of User Employees including You.
            By using or accessing the Finace platform or opening an Account on the Finace platform, you agree to
            accept the present Policy and you hereby consent to Finace collecting, processing, using, disclosing,
            sharing, and transferring your Information and personal data including but not limited to sensitive
            Personal Information. This Policy is an electronic record in the form of an electronic contract formed
            under the Information Technology Act, 2000 and the rules made thereunder. In case You do not want to
            share Information as contained herein below for use by Finace as stated, you are free to opt out or not
            use the Finace platform by deleting the Account and in such a case, are not required to give consent as
            per the present Privacy Policy. In case in future You intend that Your Information as collected should
            not be used or should be deleted, you can withdraw your consent as provided in the present Policy, by
            writing to Finace platform revoking the said consent or deleting the Account, as the case may be. Finace
            reserves with itself the right to modify, change or update this Policy at any time. Continued accessing
            of the Finace platform or use of the Products and Services shall be deemed to be your acceptance of this
            Policy or amendments thereof.
          </p>

          <h2>Collection, processing, disclosure, and sharing of Information.</h2>
          <p>
            <ul>
              <li>
                Finace collects, uses, discloses, shares, and transfers Information, other content, communications,
                information etc. provided by User Employees, when the Users use the Finace platform or the Products
                and Services.
              </li>
              <li>
                For the purpose of these Terms, the term “Personal Information” shall mean any information you or
                the Employer provides to Finace and shall include, without limitation your name, gender, date of
                birth, age, phone number, photograph, your financial information such as bank account or credit card
                or debit card or other payment details, your email ID and password, your employee identification
                number with the Employer, official email ID, your employment history with the Employer, attendance
                details, KYC details (PAN, Aadhaar Card, account details and bank statements, the Salary Slip,
                etc.). For the purpose of this Policy, the term “Non-Personal Information” shall mean information
                that does not specifically identify an individual but includes information from you such as the type
                of internet browser You use, mobile device or computer you use, your mobile device’s unique device
                ID, your Internet Service Provider (ISP) and your Internet Protocol (IP) address.
              </li>
              <li>
                Personal and Non-Personal Information together is referred to as “Information”. Finace may collect
                Information from you when you open an Account or fill the Application Form, when you use the
                features or the Products and Services, when you participate in surveys conducted, when you interact
                with the customer care team, when you carry out transactions on the Finace platform etc. You
                specifically undertake and warrant the accuracy and truthfulness of the information you share and
                agree that you shall be solely responsible for the same.
              </li>
              <li>
                Finace may use cookies to monitor and manage your usage of the Finace platform including, without
                limitation, for simplifying your experience when you return to Finace platform, like remembering
                your login ID and certain Personal Information, delivering relevant content based on your
                preferences, usage patterns and location, tracking, etc.
              </li>
              <li>
                Finace may collect details about your use of the Finace platform and/or Products and Services, such
                as the features used, any activity carried out and the frequency/duration/time thereof, the actions
                taken, etc.
              </li>
              <li>
                Finace may be required to collect and combine details from and about the mobile phones, computers,
                tablets, other devices etc. you may use to access the Finace platform. Details that may be obtained
                from these devices could include:
                <ol>
                  <li>Operating system, hardware and software versions, storage space signal quality, battery
                    level, browser type, plugins, name of mobile operator or ISP, language, time zone, IP
                    address, connection speed etc.
                  </li>
                  <li>Network, camera or photos, beacons and mobile phone masts, data from cookies stored on
                    devices etc.
                  </li>
                  <li>Location-related details including your current location through precise device location, IP
                    addresses, GPS location etc. to provide improved usage and for tracking as provided in the
                    Terms of Use.</li>
                </ol>
              </li>
            </ul>
          </p>

          <h2 id="section3">Information Usage</h2>
          <p>
            Finace may use your Information for:
            <ol>
              <li>Manage Your Account.</li>
              <li>Providing access to the Finace platform and/or use of the Products and Services.</li>
              <li>Send SMS for authenticating operations via One Time Password (OTP) etc.</li>
              <li>Conduct a survey or analysis of your Account etc.</li>
              <li>Develop, test, and improve the Finace platform, testing and troubleshooting, rectifying glitches,
                improving navigation, and the facilitation of Products and Services.
              </li>
            </ol>
          </p>

          <h2 id="section4">Mechanism for Grievance Redressal</h2>
          <p>
            In accordance with the Information Technology Act, 2000 and Rules made thereunder, the contact details
            for raising grievances, if any are provided below:
            <br />
            <br />
            Address: 305 B Block, Parasmani Regency, 2nd Block Jayanagar, Bangalore, India, 560011
          </p>
          <div className="back-to-top">
            <a href="#top">Back to top ↑</a>
          </div>
        </div>


      </div>
      <RequestDemo />
      <UsefulLinks />
      <Footer />
    </section>
  );
};

export default PrivacyPolicy;
