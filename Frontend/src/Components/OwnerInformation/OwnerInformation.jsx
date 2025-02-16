import React from 'react';
import './OwnerInformation.css';

const OwnerInformation = () => {
  return (
    <div className="owner-info-container">
      <h2 className="owner-info-title">Owner Information</h2>

      <div className="owner-info-section">
        <div className="owner-info-grid">
          <div className="owner-info-group">
            <label>Owner Name:</label>
            <input type="text" placeholder="Enter owner name" />
          </div>
          <div className="owner-info-group">
            <label>Phone No.:</label>
            <input type="tel" placeholder="Enter phone number" />
          </div>
          <div className="owner-info-group">
            <label>Second Phone No.:</label>
            <input type="tel" placeholder="Enter second phone number" />
          </div>
          <div className="owner-info-group">
            <label>Email ID:</label>
            <input type="email" placeholder="Enter email ID" />
          </div>
          <div className="owner-info-group">
            <label>Address:</label>
            <textarea
              className="owner-info-address"
              placeholder="Enter address"
            ></textarea>
          </div>
          <div className="owner-info-group">
            <label>State:</label>
            <input type="text" placeholder="Enter state" />
          </div>
          <div className="owner-info-group">
            <label>Pin:</label>
            <input type="number" placeholder="Enter pin code" />
          </div>
          <div className="owner-info-group">
            <label>Any Other Landmark Near:</label>
            <input type="text" placeholder="Enter landmark details" />
          </div>
          <div className="owner-info-group">
            <label>More Contact Details:</label>
            <textarea
              className="owner-info-contact"
              placeholder="Enter additional contact details"
            ></textarea>
          </div>
          <div className="owner-info-group">
            <label>Talking Time:</label>
            <input type="text" placeholder="Enter preferred talking time" />
          </div>
        </div>

        {/* Save and Post Buttons */}
        <div className="owner-info-buttons">
          <button className="btn-save">Save</button>
          <button className="btn-post">Post</button>
        </div>
      </div>
    </div>
  );
};

export default OwnerInformation;
