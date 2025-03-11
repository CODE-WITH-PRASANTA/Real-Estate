import React, { useState, useEffect } from 'react';
import './OwnerInformation.css';

const OwnerInformation = ({ onChange }) => {
  const [ownerInfo, setOwnerInfo] = useState({
    name: '',
    phoneNo: '',
    secondPhoneNo: '',
    email: '',
    address: '',
    state: '',
    pin: '',
    landmark: '',
    moreContactDetails: '',
    talkingTime: '',
  });

  // Handle changes in the form and update the state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOwnerInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  // Use effect to send updated ownerInfo to the parent whenever it changes
  useEffect(() => {
    onChange(ownerInfo);
  }, [ownerInfo, onChange]);

  return (
    <div className="owner-info-container">
      <h2 className="owner-info-title">Owner Information</h2>

      <div className="owner-info-section">
        <div className="owner-info-grid">
          <div className="owner-info-group">
            <label>Owner Name:</label>
            <input
              type="text"
              name="name"
              value={ownerInfo.name}
              onChange={handleInputChange}
              placeholder="Enter owner name"
            />
          </div>
          <div className="owner-info-group">
            <label>Phone No.:</label>
            <input
              type="tel"
              name="phoneNo"
              value={ownerInfo.phoneNo}
              onChange={handleInputChange}
              placeholder="Enter phone number"
            />
          </div>
          <div className="owner-info-group">
            <label>Second Phone No.:</label>
            <input
              type="tel"
              name="secondPhoneNo"
              value={ownerInfo.secondPhoneNo}
              onChange={handleInputChange}
              placeholder="Enter second phone number"
            />
          </div>
          <div className="owner-info-group">
            <label>Email ID:</label>
            <input
              type="email"
              name="email"
              value={ownerInfo.email}
              onChange={handleInputChange}
              placeholder="Enter email ID"
            />
          </div>
          <div className="owner-info-group">
            <label>Address:</label>
            <textarea
              className="owner-info-address"
              name="address"
              value={ownerInfo.address}
              onChange={handleInputChange}
              placeholder="Enter address"
            ></textarea>
          </div>
          <div className="owner-info-group">
            <label>State:</label>
            <input
              type="text"
              name="state"
              value={ownerInfo.state}
              onChange={handleInputChange}
              placeholder="Enter state"
            />
          </div>
          <div className="owner-info-group">
            <label>Pin:</label>
            <input
              type="number"
              name="pin"
              value={ownerInfo.pin}
              onChange={handleInputChange}
              placeholder="Enter pin code"
            />
          </div>
          <div className="owner-info-group">
            <label>Any Other Landmark Near:</label>
            <input
              type="text"
              name="landmark"
              value={ownerInfo.landmark}
              onChange={handleInputChange}
              placeholder="Enter landmark details"
            />
          </div>
          <div className="owner-info-group">
            <label>More Contact Details:</label>
            <textarea
              className="owner-info-contact"
              name="moreContactDetails"
              value={ownerInfo.moreContactDetails}
              onChange={handleInputChange}
              placeholder="Enter additional contact details"
            ></textarea>
          </div>
          <div className="owner-info-group">
            <label>Talking Time:</label>
            <input
              type="text"
              name="talkingTime"
              value={ownerInfo.talkingTime}
              onChange={handleInputChange}
              placeholder="Enter preferred talking time"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="owner-info-buttons">
          <button className="btn-save" onClick={() => console.log(ownerInfo)}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default OwnerInformation;
