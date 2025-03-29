import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./PropertiesandOthers.css";
import { API_URL } from '../../Api';

const fetchProperties = async () => {
  try {
    const response = await axios.get(`${API_URL}/properties/properties`); // Use API_URL
    return response.data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
};

const truncateText = (text, wordLimit) => {
  if (!text) return "";
  const words = text.split(" ");
  return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
};

const PropertiesandOthers = ({ filteredProperties }) => {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 12;

  useEffect(() => {
    if (filteredProperties) {
      setProperties(filteredProperties); // Update state with filtered results
    } else {
      const fetchPropertiesData = async () => {
        const data = await fetchProperties();
        setProperties(data || []);
      };
      fetchPropertiesData();
    }
  }, [filteredProperties]); // Refetch when filteredProperties changes

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  return (
    <div className="all-properties-container">
      <h2 className="all-section-title">Featured Properties</h2>
      <div className="all-properties-grid">
        {currentProperties.length > 0 ? (
          currentProperties.map((property) => (
            <div className="all-property-card" key={property._id}>
              <Link to={`/property/${property._id}`} className="all-property-link">
                <div className="all-property-image-wrapper">
                  <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
                    {property.galleryImages.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img src={image} alt={`${property.title} - ${index + 1}`} className="all-property-image" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <span className="all-property-badge">{property.category}</span>
                </div>
                <div className="all-property-details">
                  <div className="all-property-header">
                    <img src={property.sellerPhoto} alt={property.sellerName} className="all-property-author-img" />
                    <span className="all-property-author">{property.sellerName}</span>
                  </div>
                  <span className="all-property-location">{property.location}</span>
                  <h3 className="all-property-title">{property.title}</h3>
                  <p className="all-property-description">
                    {truncateText(property.description, 10)}
                  </p>
                  <div className="all-property-footer">
                    <span className="all-property-price">₹ {property.price}</span>
                    <div className="all-property-info">
                      <span>{property.squareFeet} ft²</span>
                      <span>{property.bedrooms} Beds</span>
                      <span>{property.bathrooms} Baths</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No properties found.</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="all-pagination">
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={currentPage === index + 1 ? "active" : ""}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertiesandOthers;
