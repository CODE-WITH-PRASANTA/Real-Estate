import React from 'react';
import './HomeBenifits.css';

import Leftmainimg from '../../assets/benifit-img.jpg';
import lefttopimg from '../../assets/benifit-img-1.jpg';
import leftdownimg from '../../assets/benifit-img-2.jpg';
import { FaHome, FaKey, FaDollarSign } from 'react-icons/fa';

const HomeBenefits = () => {
  return (
    <div className="home-benefits-container">
      <div className="benefits-left-section">
        <div className="benefits-image-wrapper">
          <img src={Leftmainimg} alt="Main" className="main-image" />
          <div className="benefits-overlay benefits-top-overlay animated-benefit">
            <img src={lefttopimg} alt="Proven Expertise" />
            <span className="benefit-tag benefits-bottom-top-overlay">✅ Proven Expertise</span>
          </div>
          <div className="benefits-overlay benefits-bottom-overlay animated-benefit">
            <img src={leftdownimg} alt="Local Area Knowledge" />
            <span className="benefit-tag benefit-top-down">✅ Local Area Knowledge</span>
          </div>
          <span className="benefit-tag benefit-middle animated-benefit">✅ Customized Solutions</span>
          <span className="benefit-tag benefit-right animated-benefit">✅ Transparent Partnerships</span>
        </div>
      </div>
      <div className="benefits-right-section">
        <h5>OUR BENEFITS</h5>
        <h2>Discover What Sets Our Real Estate Expertise Apart</h2>
        <p>Our seasoned professionals, armed with extensive market knowledge, walk alongside you through every phase of your property endeavor.</p>
        <div className="benefits-options">
          <div className="benefit-card">
            <FaHome className="benefit-icon" />
            <div>
              <h4>Buy A New Home</h4>
              <p>Explore diverse properties and expert guidance for a seamless buying experience.</p>
              <a href="#">Explore Now →</a>
            </div>
          </div>
          <div className="benefit-card">
            <FaKey className="benefit-icon" />
            <div>
              <h4>Rent a Home</h4>
              <p>Find the perfect rental home that suits your lifestyle and budget.</p>
              <a href="#">Explore Now →</a>
            </div>
          </div>
          <div className="benefit-card">
            <FaDollarSign className="benefit-icon" />
            <div>
              <h4>Sell a Home</h4>
              <p>Showcase your property’s best features for a successful sale.</p>
              <a href="#">Explore Now →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBenefits;