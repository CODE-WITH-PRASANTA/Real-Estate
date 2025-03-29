import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To get property ID from URL
import { API_URL } from "../../Api"; // Import your API base URL
import "./AgreeculturePropertyDetailsDescription.css";
import Profileimg from '../../assets/profile-pic.png';

const AgreeculturePropertyDetailsDescription = () => {
  const { id } = useParams(); // Get property ID from URL
  const [property, setProperty] = useState(null); // State for property details
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await fetch(`${API_URL}/agreecultureproperties/agriculture-property/${id}`);
        if (!response.ok) throw new Error("Failed to fetch property details");
        
        const data = await response.json();
        setProperty(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyDetails();
  }, [id]);

  if (loading) return <p>Loading property details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!property) return <p>Property not found!</p>;

  return (
    <div className="Propertydetails-desc-container">
      {/* Left Section */}
      <section className="Propertydetails-desc-details">
        <div className="Propertydetails-desc-description">
          <h2>Description</h2>
          <p>{property.description}</p>
          <a href="#" className="Propertydetails-desc-view-more">Contact Us</a>
        </div>

        {/* Overview Section */}
        <div className="Propertydetails-desc-overview">
          <h3>Overview</h3>
          <div className="Propertydetails-desc-overview-grid">
            <div className="Propertydetails-desc-overview-item">
              <span className="Propertydetails-desc-icon">🏠</span>
              <p>ID: <strong>{property.propertyID}</strong></p>
            </div>
            <div className="Propertydetails-desc-overview-item">
              <span className="Propertydetails-desc-icon">📏</span>
              <p>Type: <strong>{property.propertyType}</strong></p>
            </div>
            <div className="Propertydetails-desc-overview-item">
              <span className="Propertydetails-desc-icon">🚗</span>
              <p>Front Road Width : <strong>{property.frontRoadWidth || "N/A"} ft²</strong></p>
            </div>
            <div className="Propertydetails-desc-overview-item">
              <span className="Propertydetails-desc-icon">║║</span>
              <p>Boundary Wall: <strong>{property.boundaryWall}</strong></p>
            </div>
            <div className="Propertydetails-desc-overview-item">
              <span className="Propertydetails-desc-icon">↗️</span>
              <p>Facing Direction : <strong>{property.facingDirection}</strong></p>
            </div>
            <div className="Propertydetails-desc-overview-item">
              <span className="Propertydetails-desc-icon">📐</span>
              <p>Land Size: <strong>{property.landSize}  ft²</strong></p>
            </div>
            <div className="Propertydetails-desc-overview-item">
              <span className="Propertydetails-desc-icon">🏗️</span>
              <p>Property Type : <strong>{property.propertyType}</strong></p>
            </div>
            <div className="Propertydetails-desc-overview-item">
              <span className="Propertydetails-desc-icon">📦</span>
              <p>Size: <strong>{property.squareFeet}  ft²</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* Right Section - Contact Sellers */}
      <aside className="Propertydetails-desc-contact-sellers">
        <h3>Contact Seller</h3>
        <div className="Propertydetails-desc-seller-info">
          <img
            src={property.sellerPhoto || Profileimg}
            alt="Seller"
            className="Propertydetails-desc-seller-img"
          />
          <div>
            <h4>{property.sellerName}</h4>
            <p>📞 {property.sellerPhone}</p>
            <p>📧 {property.sellerEmail}</p>
          </div>
        </div>

        <form className="Propertydetails-desc-contact-form">
          <input type="text" placeholder="Your Name" className="Propertydetails-desc-input" />
          <input type="text" placeholder="Phone Number" className="Propertydetails-desc-input" />
          <input type="email" placeholder="Email" className="Propertydetails-desc-input" />
          <textarea placeholder="Message" className="Propertydetails-desc-textarea"></textarea>
          <button type="submit" className="Propertydetails-desc-button">
            Find Properties →
          </button>
        </form>
      </aside>
    </div>
  );
};

export default AgreeculturePropertyDetailsDescription;
