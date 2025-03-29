import React, { useState, useEffect } from 'react';
import { API_URL } from '../../Api'; // Adjust the path if necessary
import './Ourlocation.css';

const Ourlocation = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(`${API_URL}/company-address/all`);
        const data = await response.json();
        setLocations(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchLocations();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="our-location-container">
      <h4 className="explore-title">EXPLORE CITIES</h4>
      <h2 className="main-title">Our Location For You</h2>
      <div className="location-grid">
        {locations.map((location, index) => (
          <div key={index} className="location-card">
            <img src={location.photoUrl} alt={location.address} className="location-image" />
            <h3 className="location-name">{location.address}</h3>
            <p className="location-properties">{location.properties} Properties</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourlocation;
