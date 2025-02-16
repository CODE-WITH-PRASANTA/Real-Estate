import React from 'react';
import './AditionalInformation.css';

const AdditionalInformation = () => {
  return (
    <div className="additional-information-container">
        <div className="full-additional-information-container">
      <div className="additional-information-price">
        <h2 className="additional-information-title">Price</h2>
        <div className="additional-information-form-grid">
          <div className="additional-information-form-group">
            <label>Price:* </label>
            <input type="text" placeholder="Example value: 12345.67" />
          </div>
          <div className="additional-information-form-group">
            <label>Unit Price:* </label>
            <select>
              <option value="none">None</option>
            </select>
          </div>
          <div className="additional-information-form-group">
            <label>Before Price Label:* </label>
            <input type="text" />
          </div>
          <div className="additional-information-form-group">
            <label>After Price Label:* </label>
            <input type="text" />
          </div>
        </div>
      </div>

      <div className="additional-information-details">
        <h2 className="additional-information-title">Additional Information</h2>
        <div className="additional-information-form-grid">
          <div className="additional-information-form-group">
            <label>Property Type:* </label>
            <select>
              <option value="">Choose</option>
            </select>
          </div>
          <div className="additional-information-form-group">
            <label>Property Status:* </label>
            <select>
              <option value="">Choose</option>
            </select>
          </div>
          <div className="additional-information-form-group">
            <label>Property Label:* </label>
            <select>
              <option value="">Choose</option>
            </select>
          </div>
          <div className="additional-information-form-group">
            <label>Property ID:* </label>
            <input type="text" />
          </div>
          <div className="additional-information-form-group">
            <label>Size (SqFt):* </label>
            <input type="text" />
          </div>
          <div className="additional-information-form-group">
            <label>Land Area (SqFt):* </label>
            <input type="text" />
          </div>
          <div className="additional-information-form-group">
            <label>Rooms:* </label>
            <input type="number" />
          </div>
          <div className="additional-information-form-group">
            <label>Bedrooms:* </label>
            <input type="number" />
          </div>
          <div className="additional-information-form-group">
            <label>Bathrooms:* </label>
            <input type="number" />
          </div>
          <div className="additional-information-form-group">
            <label>Garages:* </label>
            <input type="number" />
          </div>
          <div className="additional-information-form-group">
            <label>Garage Size (SqFt):* </label>
            <input type="text" />
          </div>
          <div className="additional-information-form-group">
            <label>Year Built:* </label>
            <input type="text" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AdditionalInformation;
