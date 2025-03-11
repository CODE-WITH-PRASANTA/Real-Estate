import React, { useState, useCallback } from 'react';
import axios from 'axios';
import './SubmitProperty.css';
import UploadMediaPage from '../../Components/UploadMediaPage/UploadMediaPage';
import AdditionalInformation from '../../Components/AdditionalInformation/AditionalInformation';
import FlourInformation from '../../Components/FlourInformtion/FlourInformation';
import OwnerInformation from '../../Components/OwnerInformation/OwnerInformation';
import AdminInformation from '../../Components/AdminInformation/AdminInformation';

const SubmitProperty = () => {
  const [propertyData, setPropertyData] = useState({
    media: [], // Ensure media is an array
    additionalInfo: {},
    flourInfo: [],
    ownerInfo: {},
    adminInfo: {},
  });

  const handleMediaChange = useCallback((files) => {
    setPropertyData((prevData) => ({
      ...prevData,
      media: Array.isArray(files.photos) ? files.photos : [], // Correct reference
    }));
  }, []);
  
  const handleAdditionalInfoChange = useCallback((data) => {
    setPropertyData((prevData) => ({ ...prevData, additionalInfo: data }));
  }, []);

  const handleFlourInfoChange = useCallback((data) => {
    setPropertyData((prevData) => ({ ...prevData, flourInfo: data }));
  }, []);

  const handleOwnerInfoChange = useCallback((data) => {
    setPropertyData((prevData) => ({ ...prevData, ownerInfo: data }));
  }, []);

  const handleAdminInfoChange = useCallback((data) => {
    setPropertyData((prevData) => ({ ...prevData, adminInfo: data }));
  }, []);

  const handleSubmit = async () => {
    try {
      // Validate if media contains files
      if (!propertyData.media || propertyData.media.length === 0) {
        alert('Please upload at least one image.');
        return;
      }
  
      const formData = new FormData();
  
      // Append only file objects to FormData
      propertyData.media.forEach((photo) => {
        if (photo.file instanceof File) {
          formData.append('media', photo.file);
        }
      });
  
      // Append additional information as JSON strings
      formData.append('additionalInfo', JSON.stringify(propertyData.additionalInfo));
      formData.append('floorInfo', JSON.stringify(propertyData.flourInfo));
      formData.append('ownerInfo', JSON.stringify(propertyData.ownerInfo));
      formData.append('adminInfo', JSON.stringify(propertyData.adminInfo));
  
      // Make API request
      const response = await axios.post('http://localhost:5000/api/properties', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
  
      console.log('Property submitted successfully:', response.data);
      alert('Property submitted successfully!');
    } catch (error) {
      console.error('Error submitting property:', error);
      alert('Failed to submit property. Please check your inputs and try again.');
    }
  };

  return (
    <div>
      <UploadMediaPage onChange={handleMediaChange} />
      <AdminInformation onChange={handleAdminInfoChange} />
      <AdditionalInformation onChange={handleAdditionalInfoChange} />
      <FlourInformation onChange={handleFlourInfoChange} />
      <OwnerInformation onChange={handleOwnerInfoChange} />
      <button className="Main-submit-button" onClick={handleSubmit}>
        Submit Property
      </button>
    </div>
  );
};

export default SubmitProperty;
