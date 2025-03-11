import React, { useEffect, useState } from "react";
import "./AditionalInformation.css";

const AdditionalInformation = ({ onChange }) => {
  const [formData, setFormData] = useState({
    price: "",
    negotiation: "none",
    beforePriceLabel: "",
    afterPriceLabel: "",
    propertyType: "",
    propertyStatus: "",
    propertyLabel: "",
    propertyId: "",
    size: "",
    landArea: "",
    rooms: "",
    bedrooms: "",
    bathrooms: "",
    garages: "",
    garageSize: "",
    yearBuilt: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    if (onChange) {
      onChange(formData); // Send updated formData to the parent component
    }
  }, [formData, onChange]);

  return (
    <div className="additional-information-container">
      <div className="full-additional-information-container">
        {/* Price Section */}
        <div className="additional-information-price">
          <h2 className="additional-information-title">Price</h2>
          <div className="additional-information-form-grid">
            <div className="additional-information-form-group">
              <label>Price:* </label>
              <input
                type="text"
                placeholder="Example value: 12345.67"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="additional-information-form-group">
              <label>Negotiation:* </label>
              <select
                name="negotiation"
                value={formData.negotiation}
                onChange={handleChange}
              >
                <option value="none">Yes</option>
                <option value="none">No</option>
              </select>
            </div>
            <div className="additional-information-form-group">
              <label>Before Price Label:* </label>
              <input
                type="text"
                name="beforePriceLabel"
                placeholder="Enter before rent or purchase value?"
                value={formData.beforePriceLabel}
                onChange={handleChange}
              />
            </div>
            <div className="additional-information-form-group">
              <label>Profit Price Label:* </label>
              <input
                type="text"
                name="afterPriceLabel"
                placeholder="Enter current profit?"
                value={formData.afterPriceLabel}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="additional-information-details">
          <h2 className="additional-information-title">
            Additional Information
          </h2>
          <div className="additional-information-form-grid">
            <div className="additional-information-form-group">
              <label>Property Type:* </label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
              >
                <option value="">Choose</option>
                <option value="Rent">Rent</option>
                <option value="Sell">Sell</option>
              </select>
            </div>
            <div className="additional-information-form-group">
              <label>Status:* </label>
              <select
                name="propertyStatus"
                value={formData.propertyStatus}
                onChange={handleChange}
              >
                <option value="">Choose</option>
                <option value="Some Is Living">Some Is Living</option>
                <option value="No One Is Living">No One Is Living</option>
              </select>
            </div>
            <div className="additional-information-form-group">
              <label>Time To Sell Or Rent:* </label>
              <select
                name="propertyLabel"
                value={formData.propertyLabel}
                onChange={handleChange}
              >
                <option value="">Choose</option>
                <option value="1 Month">1 Month</option>
                <option value="2 Month">2 Month</option>
                <option value="More than 2 Month">
                  More than 2 Month
                </option>
              </select>
            </div>
            <div className="additional-information-form-group">
              <label>Property ID:* </label>
              <input
                type="text"
                name="propertyId"
                value={formData.propertyId}
                onChange={handleChange}
              />
            </div>
            <div className="additional-information-form-group">
              <label>Size (SqFt): </label>
              <input
                type="text"
                name="size"
                value={formData.size}
                onChange={handleChange}
              />
            </div>
            <div className="additional-information-form-group">
              <label>Land Area (SqFt):* </label>
              <input
                type="text"
                name="landArea"
                value={formData.landArea}
                onChange={handleChange}
              />
            </div>
            <div className="additional-information-form-group">
              <label>Rooms:* </label>
              <input
                type="number"
                name="rooms"
                value={formData.rooms}
                onChange={handleChange}
              />
            </div>
            <div className="additional-information-form-group">
              <label>Bedrooms:* </label>
              <input
                type="number"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
              />
            </div>
            <div className="additional-information-form-group">
              <label>Bathrooms:* </label>
              <input
                type="number"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
              />
            </div>
            <div className="additional-information-form-group">
              <label>Garages:* </label>
              <input
                type="number"
                name="garages"
                value={formData.garages}
                onChange={handleChange}
              />
            </div>
            <div className="additional-information-form-group">
              <label>Garage Size (SqFt):* </label>
              <input
                type="text"
                name="garageSize"
                value={formData.garageSize}
                onChange={handleChange}
              />
            </div>
            <div className="additional-information-form-group">
              <label>Year Built:* </label>
              <input
                type="text"
                name="yearBuilt"
                value={formData.yearBuilt}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInformation;
