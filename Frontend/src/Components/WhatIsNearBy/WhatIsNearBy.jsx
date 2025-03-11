import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // If using React Router
import "./WhatIsNearBy.css";
import { API_URL } from '../../Api';

const WhatIsNearBy = () => {
  const { id } = useParams(); // Get property ID from URL
  const [nearby, setNearby] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`${API_URL}/properties/property/${id}`);
        setNearby(response.data.nearby);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    if (id) fetchProperty();
  }, [id]);

  return (
    <div className="whatisnearby-container">
      <h2 className="whatisnearby-title">What’s Nearby?</h2>
      <p className="whatisnearby-description">
        Explore nearby amenities to precisely locate your property and identify
        surrounding conveniences, providing a comprehensive overview of the
        living environment and the property's convenience.
      </p>

      {nearby ? (
        <div className="whatisnearby-grid">
          {Object.entries(nearby).map(([key, value]) => (
            <div key={key} className="whatisnearby-item">
              <span>{key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}:</span>{" "}
              <strong>{value ? value : "N/A"}</strong>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading nearby places...</p>
      )}
    </div>
  );
};

export default WhatIsNearBy;
