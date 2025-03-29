import React, { useState } from 'react';
import { FaHome, FaMoneyBillWave, FaMapMarkerAlt , FaRulerCombined, FaTag, FaBuilding , FaTree, FaList, FaUser, FaEnvelope, FaPhone, FaImage, FaVideo, FaCompass, FaRoad, FaBorderAll } from 'react-icons/fa';
import { BiUpload } from 'react-icons/bi';
import './AdminAgreeculture.css'
import { API_URL } from '../../Api'; // Import API_URL


const AdminAgreeculture = () => {
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
    squareFeet: '',
    propertyID: '',
    propertyType: '',
    pricePerSqFt: '',
    facingDirection: '',
    frontRoadWidth:'',
    boundaryWall: '',
    landSize: '',
    category: '',
    sellerName: '',
    sellerEmail: '',
    sellerPhone: '',
    youtubeLink: ''
  });
  const [galleryImages, setGalleryImages] = useState([]);
  const [sellerPhoto, setSellerPhoto] = useState(null);

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

  const handleGalleryImageChange = (e) => {
    setGalleryImages(e.target.files);
  };

  const handleSellerPhotoChange = (e) => {
    setSellerPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', propertyData.title);
    formData.append('description', propertyData.description);
    formData.append('price', propertyData.price);
    formData.append('location', propertyData.location);
    formData.append('squareFeet', propertyData.squareFeet);
    formData.append('propertyID', propertyData.propertyID);
    formData.append('propertyType', propertyData.propertyType);
    formData.append('pricePerSqFt', propertyData.pricePerSqFt);
    formData.append('facingDirection', propertyData.facingDirection);
    formData.append('frontRoadWidth', propertyData.frontRoadWidth);
    formData.append('boundaryWall', propertyData.boundaryWall);
    formData.append('landSize', propertyData.landSize);
    formData.append('category', propertyData.category);
    formData.append('sellerName', propertyData.sellerName);
    formData.append('sellerEmail', propertyData.sellerEmail);
    formData.append('sellerPhone', propertyData.sellerPhone);
    formData.append('youtubeLink', propertyData.youtubeLink);
    formData.append('amenities', JSON.stringify(amenities));
    formData.append('nearby', JSON.stringify(nearby));
  
    for (let i = 0; i < galleryImages.length; i++) {
      formData.append('galleryImages', galleryImages[i]);
    }
  
    formData.append('sellerPhoto', sellerPhoto);
  
    try {
      const response = await fetch(`${API_URL}/agreecultureproperties/post-agriculture`, {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="Post-Property-Container">
      <h2 className="Post-Property-Heading">Post Your Basic Property Information Agriculture</h2>

      <form className="Post-Property-Form" onSubmit={handleSubmit}>
        {/* ... (rest of the form fields) */}
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

          <div className="property-field property-type-field">
  <label><FaBuilding /> Property Type *</label>
  <select 
    required 
    name="propertyType" 
    value={propertyData.propertyType} 
    onChange={handleInputChange} 
    className="property-type-select"
  >
    <option value="">Select Property Type</option>
    <option value="Plot">Plot</option>
    <option value="Land">Land</option>
  </select>
</div>

<div className="property-field">
  <label><FaMoneyBillWave /> Price per sq. ft. *</label>
  <input 
    type="number" 
    placeholder="Price per sq. ft." 
    required 
    name="pricePerSqFt" 
    value={propertyData.pricePerSqFt} 
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
  <label><FaCompass /> Facing Direction *</label>
  <select 
    required 
    name="facingDirection" 
    value={propertyData.facingDirection} 
    onChange={handleInputChange} 
     className="property-type-select"
  >
    <option value="">Select Facing Direction</option>
    <option value="East">East</option>
    <option value="West">West</option>
    <option value="North">North</option>
    <option value="South">South</option>
  </select>
</div>

<div className="property-field">
  <label><FaRoad /> Front Road Width *</label>
  <input 
    type="text" 
    placeholder="Enter Front Road Width" 
    required 
    name="frontRoadWidth" 
    value={propertyData.frontRoadWidth} 
    onChange={handleInputChange} 
  />
</div>

<div className="property-field">
  <label><FaBorderAll /> Boundary Wall *</label>
  <select 
    required 
    name="boundaryWall" 
    value={propertyData.boundaryWall} 
    onChange={handleInputChange} 
    className='property-type-select'
  >
    <option value="">Select Option</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
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
          onChange={handleGalleryImageChange}
        />

     


        {/* Choose Category Section */}
        <h3><FaTag /> Choose Category *</h3>
        <div className="category-options">
            <label className="category-label">
                <input 
                type="radio" 
                name="category" 
                value="Already Verified" 
                required 
                onChange={handleInputChange} 
                /> Already Verified documents
            </label>
            <label className="category-label">
                <input 
                type="radio" 
                name="category" 
                value="To be Verified" 
                required 
                onChange={handleInputChange} 
                /> You Have to Verify
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
          onChange={handleSellerPhotoChange}
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

export default AdminAgreeculture