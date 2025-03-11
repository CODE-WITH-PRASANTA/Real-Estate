import React, { useState, useEffect } from "react";
import "./UploadMediaPage.css";

const UploadMediaPage = ({ onChange }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Trigger when 'photos' changes to send data to parent
    onChange({ photos });
  }, [photos, onChange]);

  const handlePhotoUpload = (event) => {
    const files = Array.from(event.target.files);
    const newPhotos = files.slice(0, Math.max(10 - photos.length, 0)).map((file) => ({
      file,
      url: URL.createObjectURL(file), // Generate a preview URL for each file
    }));

    if (newPhotos.length === 0) {
      alert("You can upload up to 10 photos only.");
      return;
    }

    setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]); // Store file objects with preview URLs
  };

  const handleDeletePhoto = (index) => {
    setPhotos((prevPhotos) => {
      // Revoke the object URL to release memory
      URL.revokeObjectURL(prevPhotos[index].url);
      return prevPhotos.filter((_, i) => i !== index);
    });
  };

  return (
    <div className="upload-media-page">
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
                src={photo.url}
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
    </div>
  );
};

export default UploadMediaPage;
