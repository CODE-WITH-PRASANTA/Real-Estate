import React, { useState, useEffect } from 'react';
import './Discoverproperties.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import { API_URL } from '../../Api';

const Discoverproperties = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [properties, setProperties] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
          try {
            const response = await fetch(`${API_URL}/properties/properties`);
            const data = await response.json();
            setProperties(data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchProperties();
      }, []);
      
      useEffect(() => {
        const fetchCategories = async () => {
          try {
            const response = await fetch(`${API_URL}/properties/categories`);
            const data = await response.json();
            setCategories(['All', ...data]);
          } catch (error) {
            console.error(error);
          }
        };
        fetchCategories();
      }, []);
      

    // Filter properties based on selected category
    let filteredProperties = selectedCategory === 'All'
        ? properties.slice(0, 9) // Show only 9 when "All" is selected
        : properties.filter((property) => property.choosingCategory === selectedCategory);

    return (
        <div className="discover-properties">
            <h3 className="discover-section-title">Discover Homelengo’s Finest Properties For Your Dream Home</h3>
            <div className="category-buttons">
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        className={selectedCategory === category ? 'active' : ''}
                        onClick={() => setSelectedCategory(category)}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>

            {/* Smooth transition container */}
            <div className="properties-container">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory} // Ensure smooth animation per category change
                        className="discover-properties-grid"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                        {filteredProperties.map((property) => (
                            <Link to={`/property/${property._id}`} key={property._id} className="property-link">
                                <motion.div
                                    className="discover-property-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <div className="image-container">
                                        <img src={property.galleryImages[0]} alt="Property" className="discover-property-image" />
                                        <div className="tags-container">
                                            <span className="tag featured">Featured</span>
                                            <span className="tag for-sale">For Sale</span>
                                        </div>
                                    </div>
                                    <div className="discover-property-info">
                                        <p className="property-location">
                                            <FaMapMarkerAlt className="location-icon" /> {property.location}
                                        </p>
                                        <h4 className="property-title">{property.title}</h4>
                                        <p className="property-details">
                                            🏡 Beds: {property.bedrooms} &nbsp;
                                            🛁 Baths: {property.bathrooms} &nbsp;
                                            📏 Sqft: {property.squareFeet}
                                        </p>
                                        <div className="property-footer">
                                            <div className="seller-info">
                                                <img src={property.sellerPhoto} alt="Seller" className="seller-profile-pic" />
                                                <span className="seller-name">{property.sellerName}</span>
                                            </div>
                                            <span className="price">${property.price}.00</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* "View All Properties" button, visible only when more than 9 properties exist */}
            {selectedCategory === "All" && properties.length > 9 && (
                <Link to="/property">
                    <button className="view-all">View All Properties →</button>
                </Link>
            )}
        </div>
    );
};

export default Discoverproperties;
