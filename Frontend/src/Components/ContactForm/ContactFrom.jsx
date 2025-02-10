import React from 'react';
import './ContactFrom.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaPinterest, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactFrom = () => {
  return (
    <div className="contact-section">
      <div className="contact-form-container">
        <div className="contact-form">
          <h2 className="form-title">Drop Us A Line</h2>
          <p className="form-subtitle">
            Feel free to connect with us through our online channels for updates, news, and more.
          </p>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" className="form-input" />
              <input type="email" placeholder="Email" className="form-input" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Phone Number" className="form-input" />
              <input type="text" placeholder="Subject" className="form-input" />
            </div>
            <textarea placeholder="Your Message" className="form-textarea"></textarea>
            <button type="submit" className="send-message-btn">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <h2 className="info-title">Contact Us</h2>
          <p className="info-detail">
            <FaMapMarkerAlt className="info-icon" /> 101 E 129th St, East Chicago, IN 46312, United States
          </p>
          <p className="info-detail">
            <FaPhoneAlt className="info-icon" /> 1-333-345-6868
          </p>
          <p className="info-detail">
            <FaEnvelope className="info-icon" /> hi.themesflat@gmail.com
          </p>
          <p className="info-detail">
            <strong>Opening Hours:</strong> <br />
            Monday - Friday: 08:00 - 20:00 <br />
            Tuesday - Sunday: 10:00 - 18:00 <br />
            Wednesday - Sunday: 10:00 - 18:00 <br />
            Thusday - Sunday: 10:00 - 18:00 <br />
            Friday - Sunday: 10:00 - 18:00 <br />
            Saturday - Sunday: 10:00 - 18:00 <br />
            Sunday - Sunday: 10:00 - 18:00 <br />
          </p>
          <div className="social-icons">
            <FaFacebookF className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaYoutube className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaPinterest className="social-icon" />
            <FaLinkedin className="social-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFrom;
