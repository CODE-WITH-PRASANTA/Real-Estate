
import React, { useState } from 'react';
import { FaHome, FaMoneyBillWave, FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaTag, FaBuilding, FaCar, FaCalendarAlt, FaTree, FaList, FaUser, FaEnvelope, FaPhone, FaImage, FaVideo } from 'react-icons/fa';
import { BiUpload } from 'react-icons/bi';
import './PostProperty.css';
import { API_URL } from '../../Api';

const PostProperty = () => {
  const [amenities, setAmenities] = useState([]);

  const [nearby, setNearby] = useState({
    school: '',
    hospital: '',
    university: '',
    trainStation: '',
    groceryCenter: '',
    gymWellness: '',
    market: '',
    river: ''
  });
  const [propertyData, setPropertyData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    bedrooms: '',
    bathrooms: '',
    squareFeet: '',
    propertyID: '',
    propertyType: '',
    garages: '',
    yearBuilt: '',
    landSize: '',
    category: '',
    sellerName: '',
    sellerEmail: '',
    sellerPhone: '',
    youtubeLink: ''
  });

  const handleAddAmenity = () => {
    if (amenities.length < 10) {
      setAmenities([...amenities, '']);
    }
  };

  const handleAmenityChange = (index, value) => {
    const updatedAmenities = [...amenities];
    updatedAmenities[index] = value;
    setAmenities(updatedAmenities);
  };

  const handleInputChange = (e) => {
    setPropertyData({ ...propertyData, [e.target.name]: e.target.value });
  };

  const handleNearbyChange = (e) => {
    setNearby({ ...nearby, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', propertyData.title);
    formData.append('description', propertyData.description);
    formData.append('price', propertyData.price);
    formData.append('location', propertyData.location);
    formData.append('bedrooms', propertyData.bedrooms);
    formData.append('bathrooms', propertyData.bathrooms);
    formData.append('squareFeet', propertyData.squareFeet);
    formData.append('propertyID', propertyData.propertyID);
    formData.append('propertyType', propertyData.propertyType);
    formData.append('garages', propertyData.garages);
    formData.append('yearBuilt', propertyData.yearBuilt);
    formData.append('landSize', propertyData.landSize);
    formData.append('category', propertyData.category);
    formData.append('sellerName', propertyData.sellerName);
    formData.append('sellerEmail', propertyData.sellerEmail);
    formData.append('sellerPhone', propertyData.sellerPhone);
    formData.append('youtubeLink', propertyData.youtubeLink);
    amenities.forEach((amenity, index) => {
      formData.append(`amenities[${index}]`, amenity);
    });
    Object.keys(nearby).forEach((key) => {
      formData.append(`nearby[${key}]`, nearby[key]);
    });
    for (let file of document.querySelector('#galleryImages').files) {
      formData.append('galleryImages', file);
    }
    for (let file of document.querySelector('#sellerPhoto').files) {
      formData.append('sellerPhoto', file);
    }
    fetch(`${API_URL}/properties/post-property`, {
      method: 'POST',
      body: formData
    })
    
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Property posted successfully!");
      })
      .catch((error) => {
        console.error(error);
        alert("Error posting property: " + error.message);
      });
  };

  return (
    <div className="Post-Property-Container">

      <h2 className="Post-Property-Heading">Post Your Property</h2>

      <form className="Post-Property-Form" onSubmit={handleSubmit}>
        
      <div className="property-form-container">
        <div className="property-field">
            <label><FaHome /> Property Title *</label>
            <input 
              type="text" 
              placeholder="Enter Property Title" 
              required 
              name="title" 
              value={propertyData.title} 
              onChange={handleInputChange} 
            />
        </div>

        <div className="property-field">
            <label><FaList /> Property Details *</label>
            <textarea 
              placeholder="Enter Description" 
              required 
              name="description" 
              value={propertyData.description} 
              onChange={handleInputChange} 
            ></textarea>
        </div>

        <div className="property-field">
            <label><FaMoneyBillWave /> Price *</label>
            <input 
              type="text" 
              placeholder="Enter Price" 
              required 
              name="price" 
              value={propertyData.price} 
              onChange={handleInputChange} 
            />
        </div>

        <div className="property-field">
            <label><FaMapMarkerAlt /> Location *</label>
            <input 
              type="text" 
              placeholder="Enter Location" 
              required 
              name="location" 
              value={propertyData.location} 
              onChange={handleInputChange} 
            />
        </div>

        <div className="property-field">
            <label><FaBed /> Bedrooms *</label>
            <input 
              type="number" 
              placeholder="Number of Bedrooms" 
              required 
              name="bedrooms" 
              value={propertyData.bedrooms} 
              onChange={handleInputChange} 
            />
        </div>

        <div className="property-field">
            <label><FaBath /> Bathrooms *</label>
            <input 
              type="number" 
              placeholder="Number of Bathrooms" 
              required 
              name="bathrooms" 
              value={propertyData.bathrooms} 
              onChange={handleInputChange} 
            />
        </div>

        <div className="property-field">
            <label><FaRulerCombined /> Square Feet *</label>
            <input 
              type="text" 
              placeholder="Enter Square Feet" 
              required 
              name="squareFeet" 
              value={propertyData.squareFeet} 
              onChange={handleInputChange} 
            />
        </div>

        <div className="property-field">
            <label><FaTag /> Property ID *</label>
            <input 
              type="text" 
              placeholder="Enter Property ID" 
              required 
              name="propertyID" 
              value={propertyData.propertyID} 
              onChange={handleInputChange} 
            />
        </div>

        <div className="property-field">
            <label><FaBuilding /> Property Type *</label>
            <input 
              type="text" 
              placeholder="Enter Property Type" 
              required 
              name="propertyType" 
              value={propertyData.propertyType} 
              onChange={handleInputChange} 
            />
        </div>

        <div className="property-field">
            <label><FaCar /> Garages (Optional)</label>
            <input 
              type="text" 
              placeholder="Number of Garages" 
              name="garages" 
              value={propertyData.garages} 
              onChange={handleInputChange} 
            />
        </div>

        <div className="property-field">
            <label><FaCalendarAlt /> Year Built *</label>
            <input 
              type="text" 
              placeholder="Enter Year Built" 
              required 
              name="yearBuilt" 
              value={propertyData.yearBuilt} 
              onChange={handleInputChange} 
            />
        </div>

        <div className="property-field">
            <label><FaTree /> Land Size *</label>
            <input 
              type="text" 
              placeholder="Enter Land Size" 
              required 
              name="landSize" 
              value={propertyData.landSize} 
              onChange={handleInputChange} 
            />
        </div>
        </div>

        <div className="property-sidebars">
        {/* Amenities & Features */}
        <aside className="property-sidebar amenities-section">
            <h3><FaList /> Amenities & Features</h3>
            {amenities.map((amenity, index) => (
            <input 
                key={index} 
                type="text" 
                className="amenity-input"
                placeholder="Enter Amenity" 
                value={amenity} 
                onChange={(e) => handleAmenityChange(index, e.target.value)} 
            />
            ))}
            {amenities.length < 10 && <button type="button" className="add-amenity-btn" onClick={handleAddAmenity}>Add Amenity</button>}
        </aside>

        {/* What’s Nearby? */}
        <aside className="property-sidebar nearby-section">
            <h3>What’s Nearby?</h3>
            <div className="nearby-grid">
            {Object.keys(nearby).map((key) => (
                <div key={key} className="nearby-item">
                <label className="nearby-label">{key.charAt(0).toUpperCase() + key.slice(1)} *</label>
                <input 
                    type="text" 
                    className="nearby-input"
                    placeholder={`Enter ${key}`} 
                    value={nearby[key]} 
                    onChange={(e) => handleNearbyChange(e)} 
                    name={key}
                    required
                />

                </div>
            ))}
            </div>
        </aside>

        {/* Seller & Media Uploads */}
        <aside className="property-sidebar media-upload-section">
        <h3><BiUpload /> Upload Photos</h3>

        <label className="seller-label"><FaImage /> Gallery Img *</label>
        <input 
          type="file" 
          className="file-upload" 
          multiple 
          accept="image/*" 
          required 
          id="galleryImages"
        />

        {/* Choose Category Section */}
        <h3><FaTag /> Choose Category *</h3>
        <div className="category-options">
            <label className="category-label">
            <input 
              type="radio" 
              name="category" 
              value="For Sale" 
              required 
              onChange={handleInputChange} 
            /> For Sale
            </label>
            <label className="category-label">
            <input 
              type="radio" 
              name="category" 
              value="For Rent" 
              required 
              onChange={handleInputChange} 
            /> For Rent
            </label>
        </div>

        <label className="seller-label"><FaUser /> Seller Name *</label>
        <input 
          type="text" 
          className="seller-input" 
          placeholder="Enter Seller Name" 
          required 
          name="sellerName" 
          value={propertyData.sellerName} 
          onChange={handleInputChange} 
        />

        <label className="seller-label"><FaEnvelope /> Seller Email *</label>
        <input 
          type="email" 
          className="seller-input" 
          placeholder="Enter Seller Email" 
          required 
          name="sellerEmail" 
          value={propertyData.sellerEmail} 
          onChange={handleInputChange} 
        />

        <label className="seller-label"><FaPhone /> Seller Phone Number *</label>
        <input 
          type="text" 
          className="seller-input" 
          placeholder="Enter Seller Phone Number" 
          required 
          name="sellerPhone" 
          value={propertyData.sellerPhone} 
          onChange={handleInputChange} 
        />

        <label className="seller-label"><FaImage /> Seller Photo *</label>
        <input 
          type="file" 
          className="file-upload" 
          accept="image/*" 
          required 
          id="sellerPhoto"
        />

        <h3><FaVideo /> YouTube Link (Optional)</h3>
        <input 
        type="text" 
        className="file-upload" 
        placeholder="Enter YouTube video link" 
        name="youtubeLink" 
        value={propertyData.youtubeLink} 
        onChange={handleInputChange} 
        />


        </aside>

        </div>

        <button type="submit" className="Post-Property-Submit">Submit</button>
      </form>
    </div>
  );
};

export default PostProperty;