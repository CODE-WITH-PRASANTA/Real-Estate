import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaBed, FaBath, FaWarehouse, FaDollarSign, FaHome } from "react-icons/fa";
import { MdDateRange, MdOutlineCategory, MdOutlineGarage } from "react-icons/md";
import { FiPlayCircle } from "react-icons/fi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import './PropertyDetailsMoreAbout.css';
import { API_URL } from '../../Api';

const PropertyDetailsMoreAbout = () => {
  const { id } = useParams(); // Get property ID from the route
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/properties/property/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProperty(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching property:", error);
        setLoading(false);
      });
}, [id]);

  if (loading) return <p>Loading...</p>;
  if (!property) return <p>Property not found.</p>;

  return (
    <div className="propertydetails-container">
      {/* Image Section */}
      <div className="propertydetails-image-section">
        <img src={property.galleryImages?.[0] || "default-image.jpg"} alt="Property" className="propertydetails-image" />
        {property.youtubeLink && (
          <div className="propertydetails-play-icon">
            <a href={property.youtubeLink} target="_blank" rel="noopener noreferrer">
              <FiPlayCircle />
            </a>
          </div>
        )}
      </div>

      {/* Property Details */}
      <div className="propertydetails-details">
        <h2>{property.title}</h2>
        <div className="propertydetails-grid">
          <p><FaHome /> <strong>ID:</strong> {property.propertyID}</p>
          <p><FaDollarSign /> <strong>Price:</strong> ₹ {property.price}</p>
          <p><FaWarehouse /> <strong>Size:</strong> {property.squareFeet} sqft</p>
          <p><FaBed /> <strong>Beds:</strong> {property.bedrooms}</p>
          <p><FaBath /> <strong>Baths:</strong> {property.bathrooms}</p>
          <p><MdDateRange /> <strong>Year Built:</strong> {property.yearBuilt}</p>
          <p><MdOutlineCategory /> <strong>Type:</strong> {property.propertyType}</p>
          <p><IoCheckmarkCircleOutline /> <strong>Status:</strong> {property.category}</p>
          <p><MdOutlineGarage /> <strong>Garage:</strong> {property.garages || "N/A"}</p>
        </div>
      </div>

      {/* Amenities */}
      <div className="propertydetails-amenities">
        <h2>Avalable Features</h2>
        <ul className="propertydetails-list">
          {property.amenities?.length > 0 ? property.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          )) : <li>No amenities listed.</li>}
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetailsMoreAbout;
