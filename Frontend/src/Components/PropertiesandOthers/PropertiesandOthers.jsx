import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./PropertiesandOthers.css";

// Assets
import firstPropertyImg from "../../assets/property-img-1.jpg";
import firstPropertySecondImg from "../../assets/property-img-2.jpg";
import firstPropertyThirdImg from "../../assets/property-img-3.jpg";

import secondPropertyImg from "../../assets/2ndproperty-img-2.jpg";
import secondPropertySecondImg from "../../assets/2ndproperty-img-3.jpg";
import secondPropertyThirdImg from "../../assets/2ndproperty-img.jpg";

import thirdPropertyImg from "../../assets/3rdproperty-img-2.jpg";
import thirdPropertySecondImg from "../../assets/3rdproperty-img-3.jpg";
import thirdPropertyThirdImg from "../../assets/3rdproperty=img.jpg";

import profilepic from "../../assets/profile-pic.png";

const PropertiesandOthers = () => {
  const properties = [
    {
      id: 1,
      title: "Mountain Cottage",
      description: "A beautiful and peaceful cottage in the mountains.",
      price: "$650,000",
      area: "240m²",
      beds: 4,
      baths: 3,
      location: "Condos - Queens",
      images: [firstPropertyImg, firstPropertySecondImg, firstPropertyThirdImg],
      author: "Steve Parker",
    },
    {
      id: 2,
      title: "Green House",
      description: "An eco-friendly house surrounded by nature.",
      price: "$2,200/month",
      area: "150m²",
      beds: 2,
      baths: 2,
      location: "Condos - The Bronx",
      images: [secondPropertyImg, secondPropertySecondImg, secondPropertyThirdImg],
      author: "Sophia Turner",
    },
    {
      id: 3,
      title: "White Studio Loft",
      description: "A modern and stylish loft in the city.",
      price: "$550,000",
      area: "250m²",
      beds: 4,
      baths: 3,
      location: "Apartments - Queens",
      images: [thirdPropertyImg, thirdPropertySecondImg, thirdPropertyThirdImg],
      author: "Liam Johnson",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 12;
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  return (
    <div className="all-properties-container">
      <h2 className="all-section-title">Featured Properties</h2>
      <div className="all-properties-grid">
        {currentProperties.map((property) => (
          <div className="all-property-card" key={property.id}>
            <div className="all-property-image-wrapper">
              <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
                {property.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img src={image} alt={`${property.title} - ${index + 1}`} className="all-property-image" />
                  </SwiperSlide>
                ))}
              </Swiper>
              <span className="all-property-badge">For Sale</span>
            </div>
            <div className="all-property-details">
              <div className="all-property-header">
                <img src={profilepic} alt={property.author} className="all-property-author-img" />
                <span className="all-property-author">{property.author}</span>
              </div>
              <span className="all-property-location">{property.location}</span>
              <h3 className="all-property-title">{property.title}</h3>
              <p className="all-property-description">{property.description}</p>
              <div className="all-property-footer">
                <span className="all-property-price">{property.price}</span>
                <div className="all-property-info">
                  <span>{property.area}</span>
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
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
    </div>
  );
};

export default PropertiesandOthers;