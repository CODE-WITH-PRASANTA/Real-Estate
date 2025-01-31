import React from "react";
import "./TopProperties.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Assets
import Property1 from "../../assets/house-sm-1.jpg";
import Property2 from "../../assets/house-sm-2.jpg";
import Property3 from "../../assets/house-sm-3.jpg";
import Property4 from "../../assets/house-sm-4.jpg";
import ProfilePic from "../../assets/profile-pic.png";

const properties = [
  {
    id: 1,
    img: Property1,
    title: "Casa Lomas De Machalí Machas",
    beds: 3,
    baths: 2,
    sqft: 1150,
    location: "145 Brooklyn Ave, California, New York",
    agent: "Arlene McCoy",
    price: "$7,250.00",
  },
  {
    id: 2,
    img: Property2,
    title: "Casa Lomas De Machalí Machas",
    beds: 3,
    baths: 2,
    sqft: 1150,
    location: "145 Brooklyn Ave, California, New York",
    agent: "Arlene McCoy",
    price: "$7,250.00",
  },
  {
    id: 3,
    img: Property3,
    title: "Casa Lomas De Machalí Machas",
    beds: 3,
    baths: 2,
    sqft: 1150,
    location: "145 Brooklyn Ave, California, New York",
    agent: "Arlene McCoy",
    price: "$7,250.00",
  },
  {
    id: 4,
    img: Property4,
    title: "Casa Lomas De Machalí Machas",
    beds: 3,
    baths: 2,
    sqft: 1150,
    location: "145 Brooklyn Ave, California, New York",
    agent: "Arlene McCoy",
    price: "$7,250.00",
  },
];

const TopProperties = () => {
  return (
    <div className="top-full-property">
    <div className="top-properties-section">
      <h3 className="top-properties-subtitle">TOP PROPERTIES</h3>
      <h2 className="top-properties-title">Best Property Value</h2>

      {/* Mobile View: Swiper */}
      <div className="top-properties-mobile">
        <Swiper
          spaceBetween={15}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {properties.map((property) => (
            <SwiperSlide key={property.id}>
              <div className="top-property-card">
                <div className="top-property-image">
                  <img src={property.img} alt={property.title} />
                  <div className="top-property-tags">
                    <span className="top-property-tag featured">Featured</span>
                    <span className="top-property-tag for-sale">For Sale</span>
                  </div>
                </div>
                <div className="top-property-details">
                  <h3 className="top-property-title">{property.title}</h3>
                  <div className="top-property-info">
                    <span>🏡 Beds: {property.beds}</span>
                    <span>🛁 Baths: {property.baths}</span>
                    <span>📏 Sqft: {property.sqft}</span>
                  </div>
                  <div className="top-property-location">📍 {property.location}</div>
                  <div className="top-property-footer">
                    <div className="top-agent-section">
                      <hr className="top-agent-border" />
                      <img src={ProfilePic} alt={property.agent} className="top-agent-pic" />
                      <span className="top-agent-name">{property.agent}</span>
                    </div>
                    <div className="top-property-price">{property.price}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop & Tablet View: Grid */}
      <div className="top-properties-grid">
        {properties.map((property) => (
          <div className="top-property-card" key={property.id}>
            <div className="top-property-image">
              <img src={property.img} alt={property.title} />
              <div className="top-property-tags">
                <span className="top-property-tag featured">Featured</span>
                <span className="top-property-tag for-sale">For Sale</span>
              </div>
            </div>
            <div className="top-property-details">
              <h3 className="top-property-title">{property.title}</h3>
              <div className="top-property-info">
                <span>🏡 Beds: {property.beds}</span>
                <span>🛁 Baths: {property.baths}</span>
                <span>📏 Sqft: {property.sqft}</span>
              </div>
              <div className="top-property-location">📍 {property.location}</div>
              <div className="top-property-footer">
                <div className="top-agent-section">
                  <hr className="top-agent-border" />
                  <img src={ProfilePic} alt={property.agent} className="top-agent-pic" />
                  <span className="top-agent-name">{property.agent}</span>
                </div>
                <div className="top-property-price">{property.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TopProperties;
