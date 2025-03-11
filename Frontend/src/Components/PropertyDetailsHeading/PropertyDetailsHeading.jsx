import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt,
  FaHeart, FaExchangeAlt, FaShareAlt, FaPrint
} from "react-icons/fa";
import './PropertyDetailsHeading.css';
import { API_URL } from '../../Api';


const PropertyDetailsHeading = () => {
  const { id } = useParams(); // Get ID from URL
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`${API_URL}/properties/property/${id}`);
        const data = await response.json();
        if (response.ok) {
          setProperty(data);
        } else {
          console.error("Error fetching property:", data.error);
        }
      } catch (error) {
        console.error("Error fetching property:", error);
      }
    };
  
    fetchProperty();
  }, [id]);

  if (!property) {
    return <p>Loading property details...</p>;
  }

  return (
    <div className="PropertyDetails-Heading-container">
      <div className="PropertyDetails-Heading-header">
        <h1 className="PropertyDetails-Heading-title">{property.title}</h1>
        <span className="PropertyDetails-Heading-price">₹ {property.price} <span className="price-unit">/month</span></span>
      </div>

      <hr className="PropertyDetails-Heading-divider" />

      <div className="PropertyDetails-Heading-info">
        <div className="PropertyDetails-Heading-features">
          <span><FaBed className="PropertyDetails-Heading-icon" /> Beds: <strong>{property.bedrooms}</strong></span>
          <span><FaBath className="PropertyDetails-Heading-icon" /> Baths: <strong>{property.bathrooms}</strong></span>
          <span><FaRulerCombined className="PropertyDetails-Heading-icon" /> Sqft: <strong>{property.squareFeet}  ft²</strong></span>
        </div>

        <div className="PropertyDetails-Heading-location">
          <span><FaMapMarkerAlt className="PropertyDetails-Heading-icon" /> {property.location}</span>
        </div>
      </div>

      <div className="PropertyDetails-Heading-actions">
        <button className="PropertyDetails-Heading-button"><FaHeart /></button>
        <button className="PropertyDetails-Heading-button"><FaExchangeAlt /></button>
        <button className="PropertyDetails-Heading-button"><FaShareAlt /></button>
        <button className="PropertyDetails-Heading-button"><FaPrint /></button>
      </div>
    </div>
  );
};

export default PropertyDetailsHeading;
