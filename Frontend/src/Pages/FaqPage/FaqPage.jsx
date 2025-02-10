import React from 'react';
import './Faqpage.css';
import FaqQuestion from '../../Components/FaqQuestion/FaqQuestion';

const Faqpage = () => {
  return (
    <>
    <div className="contact-container">
      <div className="contact-overlay"></div>
      <div className="contact-content">
        <p className="breadcrumb">Home / Pages / Faq</p>
        <h1 className="contact-title">Frequently Asked Questions</h1>
      </div>
    </div>
    <FaqQuestion />
    </>
  );
};

export default Faqpage;
