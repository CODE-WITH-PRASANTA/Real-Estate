import React from 'react';
import './ContactUs.css';
import ContactFrom from '../../Components/ContactForm/ContactFrom';
import ContactFaq from '../../Components/ContactFaq/ContactFaq';
import MapSection from '../../Components/MapSection/MapSection';
import ContactPartner from '../../Components/ContactPartnership/ContactPartner';

const ContactUs = () => {
  return (
    <>
    <div className="Full-contact-container">
      <div className="contact-overlay"></div>
      <div className="contact-content">
        <p className="breadcrumb">Home / Pages / Contact</p>
        <h1 className="contact-title">Contact Us</h1>
      </div>
    </div>
    <ContactFrom />
    <MapSection />
    <ContactFaq />
    <ContactPartner />
    </>
  );
};

export default ContactUs;
