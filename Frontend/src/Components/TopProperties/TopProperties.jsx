import React, { useEffect, useState } from "react";
import "./TopProperties.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import axios from "axios";
import { API_URL } from "../../Api"; // Import the API URL


// Assets
import ProfilePic from "../../assets/profile-pic.png";

const TopProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/agreecultureproperties/filter-by-best-value?choosingBestValue=top`
        );
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

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
              <SwiperSlide key={property._id}>
                <div className="top-property-card">
                  <div className="top-property-image">
                    <img
                      src={property.galleryImages[0] || ProfilePic}
                      alt={property.title}
                    />
                    <div className="top-property-tags">
                      <span className="top-property-tag featured">Featured</span>
                      <span className="top-property-tag for-sale">For Sale</span>
                    </div>
                  </div>
                  <div className="top-property-details">
                    <h3 className="top-property-title">{property.title}</h3>
                    <div className="top-property-info">
                      <span>📏 Sqft: {property.squareFeet}</span>
                      <span>💰 Price: {property.price}</span>
                    </div>
                    <div className="top-property-location">
                      📍 {property.location}
                    </div>
                    <div className="top-property-footer">
                      <div className="top-agent-section">
                        <hr className="top-agent-border" />
                        <img
                          src={property.sellerPhoto || ProfilePic}
                          alt={property.sellerName}
                          className="top-agent-pic"
                        />
                        <span className="top-agent-name">
                          {property.sellerName}
                        </span>
                      </div>
                      <div className="top-property-price">
                        ₹{property.price}
                      </div>
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
            <div className="top-property-card" key={property._id}>
              <div className="top-property-image">
                <img
                  src={property.galleryImages[0] || ProfilePic}
                  alt={property.title}
                />
                <div className="top-property-tags">
                  <span className="top-property-tag featured">Featured</span>
                  <span className="top-property-tag for-sale">For Sale</span>
                </div>
              </div>
              <div className="top-property-details">
                <h3 className="top-property-title">{property.title}</h3>
                <div className="top-property-info">
                  <span>📏 Sqft: {property.squareFeet}</span>
                  <span>💰 Price: {property.price}</span>
                </div>
                <div className="top-property-location">
                  📍 {property.location}
                </div>
                <div className="top-property-footer">
                  <div className="top-agent-section">
                    <hr className="top-agent-border" />
                    <img
                      src={property.sellerPhoto || ProfilePic}
                      alt={property.sellerName}
                      className="top-agent-pic"
                    />
                    <span className="top-agent-name">{property.sellerName}</span>
                  </div>
                  <div className="top-property-price">₹{property.price}</div>
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
