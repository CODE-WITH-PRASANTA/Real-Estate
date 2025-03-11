import React, { useState } from 'react';
import './Discoverproperties.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Assets
import Property1 from '../../assets/Property-1.jpg';
import Property2 from '../../assets/Property-2.jpg';
import Property3 from '../../assets/Property-3.jpg';
import Property4 from '../../assets/Property-4.jpg';
import Property5 from '../../assets/Property-5.jpg';
import Property6 from '../../assets/Property-6.jpg';
import ProfilePic from '../../assets/profile-pic.png';

const properties = [
  { id: 1, img: Property1, category: 'Agricultural land' },
  { id: 2, img: Property2, category: 'Villa' },
  { id: 3, img: Property3, category: 'Studio' },
  { id: 4, img: Property4, category: 'Non Agricultural land' },
  { id: 5, img: Property5, category: 'Residental Plot' },
  { id: 6, img: Property6, category: 'Agricultural land' },
];

const categories = ['All', 'Agricultural land', 'Non Agricultural land', 'Residental Plot', 'Commercial Plot', 'Industrial Plot' , 'Shop / Office' , 'Weakend Villa' , 'Wearhouse' , 'Hotel Rent' , 'Resturant' , 'House Rent'];

const Discoverproperties = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProperties =
    selectedCategory === 'All'
      ? properties
      : properties.filter((property) => property.category === selectedCategory);

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
            key={selectedCategory} // This ensures smooth animation per category change
            className="discover-properties-grid"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {filteredProperties.map((property) => (
              <motion.div
                className="discover-property-card"
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <div className="image-container">
                  <img src={property.img} alt="Property" className="discover-property-image" />
                  <div className="tags-container">
                    <span className="tag featured">Featured</span>
                    <span className="tag for-sale">For Sale</span>
                  </div>
                </div>
                <div className="discover-property-info">
                  <p className="property-location">
                    <FaMapMarkerAlt className="location-icon" /> 145 Brooklyn Ave, California, New York
                  </p>
                  <h4 className="property-title">Casa Lomas De Machali Machas</h4>
                  <p className="property-details">🏡 Beds: 3 &nbsp; 🛁 Baths: 2 &nbsp; 📏 Sqft: 1150</p>
                  <div className="property-footer">
                    <div className="seller-info">
                      <img src={ProfilePic} alt="Seller" className="seller-profile-pic" />
                      <span className="seller-name">Arlene McCoy</span>
                    </div>
                    <span className="price">$7250.00</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <button className="view-all">View All Properties →</button>
    </div>
  );
};

export default Discoverproperties;
