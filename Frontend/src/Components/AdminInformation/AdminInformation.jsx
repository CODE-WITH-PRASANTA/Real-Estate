import React, { useState } from 'react';

const AdminInformation = ({ onChange }) => {
  const [formData, setFormData] = useState({
    title: '', // Fixed: Added this property for "Type of Property"
    description: '',
    address: '',
    zipCode: '',
    country: 'India',
    province: '', // Fixed: Added this property for "State"
    location: '', // Fixed: Added this property for "Nearby Location"
    neighborhood: '', // Fixed: Added this property for "Who are you?"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);

    // Notify parent component about the data change
    if (onChange) {
      onChange(updatedData);
    }
  };

  return (
    <div className="upload-media-page">
      <div className="info-section">
        <h2 className="info-title">Information</h2>
        <form className="info-form">
          <div className="info-form-group info-title-group">
            <label className="info-label">Type Of Property*</label>
            <input
              className="info-input"
              type="text"
              name="title"
              value={formData.title} // Fixed: Controlled input
              placeholder="Ex - Rent Or Property ?"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="info-form-group info-description-group">
            <label className="info-label">Write Something About That</label>
            <textarea
              className="info-textarea"
              name="description"
              value={formData.description}
              placeholder="Enter description"
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="info-form-row">
            <div className="info-form-group info-address-group">
              <label className="info-label">Address*</label>
              <input
                className="info-input"
                type="text"
                name="address"
                value={formData.address}
                placeholder="Enter full address"
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="info-form-group info-zipcode-group">
              <label className="info-label">Zip Code*</label>
              <input
                className="info-input"
                type="text"
                name="zipCode"
                value={formData.zipCode}
                placeholder="Enter zip code"
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="info-form-group info-country-group">
              <label className="info-label">Country*</label>
              <input
                className="info-input"
                type="text"
                value="India"
                readOnly
              />
            </div>
          </div>

          <div className="info-form-row">
            <div className="info-form-group info-state-group">
              <label className="info-label">Province/State*</label>
              <select
                className="info-select"
                name="province"
                value={formData.province} // Fixed: Controlled input
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="Bihar">Bihar</option>
                <option value="Maharastra">Maharastra</option>
                <option value="Odisha">Odisha</option>
                <option value="Karnataka">Karnataka</option>
              </select>
            </div>
            <div className="info-form-group info-location-group">
              <label className="info-label">Nearby Location*</label>
              <select
                className="info-select"
                name="location"
                value={formData.location} // Fixed: Controlled input
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="Bhubaneswar">Bhubaneswar</option>
                <option value="Cuttack">Cuttack</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangladesh">Bangladesh</option>
              </select>
            </div>
            <div className="info-form-group info-neighborhood-group">
              <label className="info-label">Who are You?*</label>
              <select
                className="info-select"
                name="neighborhood"
                value={formData.neighborhood} // Fixed: Controlled input
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="Owner">Owner</option>
                <option value="Broker">Broker</option>
                <option value="Partner">Partner</option>
                <option value="Friend">Friend</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminInformation;
