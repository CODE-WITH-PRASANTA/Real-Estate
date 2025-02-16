// React Component (OurWorkService.js)
import React from 'react';
import './OurWorkService.css';

import Home1 from '../../assets/home-1.png';
import Home2 from '../../assets/home-2.png';
import Home3 from '../../assets/home-3.png';

const OurWorkService = () => {
  return (
    <div className="our-work-service-container">
      <h3 className="our-work-service-section-title">Explore Cities</h3>
      <h2 className="our-work-service-main-heading">Our Location For You</h2>

      <div className="our-work-service-cards">
        <div className="our-work-service-card">
          <img src={Home1} alt="Buy A New Home" className="our-work-service-image" />
          <h3 className="our-work-service-title">Buy A New Home</h3>
          <p className="our-work-service-description">
            Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.
          </p>
          <button className="our-work-service-learn-more-btn">Learn More →</button>
        </div>

        <div className="our-work-service-card">
          <img src={Home2} alt="Sell A Home" className="our-work-service-image" />
          <h3 className="our-work-service-title">Sell A Home</h3>
          <p className="our-work-service-description">
            Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.
          </p>
          <button className="our-work-service-learn-more-btn">Learn More →</button>
        </div>

        <div className="our-work-service-card">
          <img src={Home3} alt="Rent A Home" className="our-work-service-image" />
          <h3 className="our-work-service-title">Rent A Home</h3>
          <p className="our-work-service-description">
            Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs.
          </p>
          <button className="our-work-service-learn-more-btn">Learn More →</button>
        </div>
      </div>
    </div>
  );
};

export default OurWorkService;
