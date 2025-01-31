import React from 'react';
import './Ourlocation.css';

// Import location images
import location1 from '../../assets/location-1.jpg';
import location2 from '../../assets/location-2.jpg';
import location3 from '../../assets/location-3.jpg';
import location4 from '../../assets/location-4.jpg';
import location5 from '../../assets/location-5.jpg';
import location6 from '../../assets/location-6.jpg';

const locations = [
  { img: location1, name: 'Cape Town, South Africa', properties: '221 Property' },
  { img: location2, name: 'Seoul, South Korea', properties: '128 Property' },
  { img: location3, name: 'London, United Kingdom', properties: '321 Property' },
  { img: location4, name: 'Connecticut, New England', properties: '220 Property' },
  { img: location5, name: 'Sydney, Australia', properties: '231 Property' },
  { img: location6, name: 'New Jersey, New York', properties: '234 Property' },
  { img: location5, name: 'Sydney, Australia', properties: '231 Property' },
  { img: location6, name: 'New Jersey, New York', properties: '234 Property' },

];

const Ourlocation = () => {
  return (
    <div className="our-location-container">
      <h4 className="explore-title">EXPLORE CITIES</h4>
      <h2 className="main-title">Our Location For You</h2>
      <div className="location-grid">
        {locations.map((location, index) => (
          <div key={index} className="location-card">
            <img src={location.img} alt={location.name} className="location-image" />
            <h3 className="location-name">{location.name}</h3>
            <p className="location-properties">{location.properties}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourlocation;