import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaQuestionCircle } from 'react-icons/fa';
import "./FaqContactForm.css";

const FaqContactForm = () => {
  return (
    <div className="full-faq-contact-form">
    <div className="faq-contact-form-container">
      <div className="faq-contact-left-section">
        <h2 className="faq-contact-heading">Talk to us</h2>
        <h1 className="faq-contact-title">Any Question? Feel Free to faq-contact</h1>
        <p className="faq-contact-description">
          With a vast array of popular private planes to choose from, travelling by
          private jet charter is the most efficient
        </p>
        <div className="faq-contact-social-icons">
          <FaFacebookF className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaYoutube className="social-icon" />
          <FaInstagram className="social-icon" />
        </div>
      </div>
      <div className="faq-contact-right-section">
        <form className="faq-contact-form">
          <div className="form-group form-group-name">
            <input type="text" className="form-input" placeholder="Name" required />
            <span className="icon-placeholder">&#128100;</span>
          </div>
          <div className="form-group form-group-email">
            <input type="email" className="form-input" placeholder="Email" required />
            <span className="icon-placeholder">&#9993;</span>
          </div>
          <div className="form-group form-group-phone">
            <input type="text" className="form-input" placeholder="Phone" required />
            <span className="icon-placeholder">&#128222;</span>
          </div>
          <div className="form-group form-group-message">
            <textarea
              className="form-textarea"
              placeholder="Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            <FaQuestionCircle className="inquiry-icon" /> Enquiry Now
        </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default FaqContactForm;
