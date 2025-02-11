import React from 'react';
import './FaqPage.css';
import FaqQuestion from '../../Components/FaqQuestion/FaqQuestion';

const Faqpage = () => {
  return (
    <>
    <div className="faq-container">
      <div className="faq-overlay"></div>
      <div className="faq-content">
        <p className="breadcrumb">Home / Pages / Faq</p>
        <h1 className="faq-title">Frequently Asked Questions</h1>
      </div>
    </div>
    <FaqQuestion />
    </>
  );
};

export default Faqpage;
