import React from 'react';
import './ContactPartner.css';
import HouseImg from '../../assets/Home-banner.png';

const ContactPartner = () => {
  return (
    <div className="contact-partner">
      <div className="contact-box">
        {/* Content Section */}
        <div className="contact-content">
          <span className="contact-tagline">BECOME PARTNERS</span>
          <h2 className="partner-contact-title">List your Properties on Homelengo, join Us Now!</h2>
          <p className="contact-description">
            Reach more potential tenants and increase your bookings by partnering with Homelengo. 
            Get started today and maximize your property's visibility!
          </p>
          <button className="contact-cta-button">
            Lets be a Partnership <span>→</span>
          </button>
        </div>

        {/* Image Section */}
        <div className="contact-image-container">
          <img src={HouseImg} alt="House" className="contact-image" />
        </div>
      </div>
    </div>
  );
};

export default ContactPartner;
