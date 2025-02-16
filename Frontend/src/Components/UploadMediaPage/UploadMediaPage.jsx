import React, { useState } from "react";
import "./UploadMediaPage.css";

const UploadMediaPage = () => {
  const [photos, setPhotos] = useState([]);

  const handlePhotoUpload = (event) => {
    const files = Array.from(event.target.files);
    const newPhotos = files.slice(0, 10 - photos.length); // Limit to 10 photos
    const photoUrls = newPhotos.map((file) => URL.createObjectURL(file));
    setPhotos((prevPhotos) => [...prevPhotos, ...photoUrls]);
  };

  const handleDeletePhoto = (index) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
  };

  return (
    <div className="upload-media-page">
      {/* Upload Section */}
      <div className="upload-section">
        <h2>Upload Media</h2>
        <div className="upload-box">
          <input
            id="file-input"
            type="file"
            multiple
            accept="image/*"
            onChange={handlePhotoUpload}
            className="file-input"
          />
          <label htmlFor="file-input" className="select-photos-button">
            Select Photos
          </label>
          <p>Drag and drop photos here or select (Up to 10 photos)</p>
        </div>
        <div className="uploaded-photos">
          {photos.map((photo, index) => (
            <div key={index} className="photo-container">
              <img
                src={photo}
                alt={`Uploaded ${index}`}
                className="uploaded-photo"
              />
              <button
                className="delete-photo-button"
                onClick={() => handleDeletePhoto(index)}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Information Section */}
      <div className="info-section">
        <h2 className="info-title">Information</h2>
        <form className="info-form">
          {/* Title */}
          <div className="info-form-group info-title-group">
            <label className="info-label">Title*</label>
            <input
              className="info-input"
              type="text"
              placeholder="Enter title"
              required
            />
          </div>

          {/* Description */}
          <div className="info-form-group info-description-group">
            <label className="info-label">Description</label>
            <textarea
              className="info-textarea"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Address Section */}
          <div className="info-form-row">
            <div className="info-form-group info-address-group">
              <label className="info-label">Full Address*</label>
              <input
                className="info-input"
                type="text"
                placeholder="Enter full address"
                required
              />
            </div>
            <div className="info-form-group info-zipcode-group">
              <label className="info-label">Zip Code*</label>
              <input
                className="info-input"
                type="text"
                placeholder="Enter zip code"
                required
              />
            </div>
            <div className="info-form-group info-country-group">
              <label className="info-label">Country*</label>
              <input
                className="info-input"
                type="text"
                value="United States"
                readOnly
              />
            </div>
          </div>

          {/* State, Location, and Neighborhood */}
          <div className="info-form-row">
            <div className="info-form-group info-state-group">
              <label className="info-label">Province/State*</label>
              <select className="info-select">
                <option value="">Select</option>
                <option value="California">California</option>
                <option value="Texas">Texas</option>
              </select>
            </div>
            <div className="info-form-group info-location-group">
              <label className="info-label">Location*</label>
              <select className="info-select">
                <option value="">Select</option>
              </select>
            </div>
            <div className="info-form-group info-neighborhood-group">
              <label className="info-label">Neighborhood*</label>
              <select className="info-select">
                <option value="">Select</option>
              </select>
            </div>
          </div>
        </form>
      </div>

    </div>
  );
};

export default UploadMediaPage;
