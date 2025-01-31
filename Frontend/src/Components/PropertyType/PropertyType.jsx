import React from 'react';
import './PropertyType.css';

// Assets
import Appartmentlogo from '../../assets/Appartment-logo.png';
import VillaLogo from '../../assets/villa-logo.png';
import StudioLogo from '../../assets/Studio-logo.png';
import Officelogo from '../../assets/office-logo.png';
import Propertylogo from '../../assets/property-logo.png';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Corrected import

const PropertyType = () => {
  const propertyTypes = [
    { name: 'Apartment', count: '234 Properties', logo: Appartmentlogo },
    { name: 'Studio', count: '120 Properties', logo: StudioLogo },
    { name: 'Office', count: '95 Properties', logo: Officelogo },
    { name: 'Property', count: '180 Properties', logo: VillaLogo },
    { name: 'Commercial', count: '75 Properties', logo: Propertylogo },
  ];

  return (
    <section className="property-type-section">
      <div className="full-property-section">
      <h4 className="property-type-title">Property Type</h4>
      <h2 className="property-type-heading">Find Your Desired Property</h2>

      {/* Swiper for mobile view */}
      <Swiper
        spaceBetween={15}
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 5,  // For tablet and desktop
          },
          480: {
            slidesPerView: 2,  // For mobile
          },
        }}
        className="property-type-swiper"
      >
        {propertyTypes.map((type, index) => (
          <SwiperSlide key={index}>
            <div className="property-card">
              <div className="property-icon-wrapper">
                <img src={type.logo} alt={type.name} className="property-logo" />
              </div>
              <h3 className="property-name">{type.name}</h3>
              <p className="property-count">{type.count}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
};

export default PropertyType;
