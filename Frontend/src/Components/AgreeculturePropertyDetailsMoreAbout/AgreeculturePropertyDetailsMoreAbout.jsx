import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaBed, FaBath, FaWarehouse, FaDollarSign, FaHome } from "react-icons/fa";
import { MdDateRange, MdOutlineCategory, MdOutlineGarage } from "react-icons/md";
import { FiPlayCircle } from "react-icons/fi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import './AgreeculturePropertyDetailsMoreAbout.css';
import { API_URL } from '../../Api';

const AgreeculturePropertyDetailsMoreAbout = () => {
  const { id } = useParams(); // Get property ID from the route
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/agreecultureproperties/agriculture-property/${id}`)
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
          <p><FaWarehouse /> <strong>Size:</strong> {property.landSize} sqft</p>
          <p><FaBed /> <strong>Property Type :</strong> {property.propertyType}</p>
          <p><FaBath /> <strong>Facing Direction :</strong> {property.facingDirection}</p>
          <p><MdDateRange /> <strong>Boundary Wall :</strong> {property.boundaryWall}</p>
          <p><MdOutlineCategory /> <strong>Front Road Width :</strong> {property.frontRoadWidth}</p>
          <p><IoCheckmarkCircleOutline /> <strong>Documents :</strong> {property.category}</p>
          <p><MdOutlineGarage /> <strong>Price per sq. ft. :</strong> {property.pricePerSqFt || "N/A"}</p>
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

export default AgreeculturePropertyDetailsMoreAbout;
