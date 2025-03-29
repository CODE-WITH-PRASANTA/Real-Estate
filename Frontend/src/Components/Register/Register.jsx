import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import Swal from "sweetalert2";
import { API_URL } from "../../Api";


const Register = () => {
  const [formData, setFormData] = useState({
    role: "",
    firstName: "",
    lastName: "",
    experience: "",
    position: "",
    businessArea: "",
    email: "",
    licenseNo: "",
    street: "",
    additionalInfo: "",
    zipCode: "",
    place: "",
    country: "",
    phoneCode: "",
    phoneNumber: "",
    acceptedTerms: false,
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/users/register`, formData);
      Swal.fire({
        title: "Success!",
        text: response.data.message,
        icon: "success",
        confirmButtonText: "OK",
      });
      setFormData({
        role: "",
        firstName: "",
        lastName: "",
        experience: "",
        position: "",
        businessArea: "",
        email: "",
        licenseNo: "",
        street: "",
        additionalInfo: "",
        zipCode: "",
        place: "",
        country: "",
        phoneCode: "",
        phoneNumber: "",
        acceptedTerms: false,
      });
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err.response?.data?.message || "Something went wrong",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <div className="register-sec-left">
          <h2 className="left-sec-title">General Information</h2>

          <select name="role" value={formData.role} onChange={handleChange} className="register-sec-input" required>
            <option value="">Choose One</option>
            <option value="Agent">Agent</option>
            <option value="SubAgent">SubAgent</option>
          </select>

          <div className="register-sec-input-group">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              className="register-sec-input"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className="register-sec-input"
              required
            />
          </div>

          <select name="experience" value={formData.experience} onChange={handleChange} className="register-sec-input" required>
            <option value="">Experience Year</option>
            <option value="1 Year">1 Year</option>
            <option value="2 Year">2 Year</option>
            <option value="3 Year">3 Year</option>
            <option value="More than Else">More than Else</option>
          </select>

          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Current Business or Position"
            className="register-sec-input"
            required
          />

          <input
            type="text"
            name="businessArea"
            value={formData.businessArea}
            onChange={handleChange}
            placeholder="Business Area: Your Area"
            className="register-sec-input"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="register-sec-input"
            required
          />

          <input
            type="text"
            name="licenseNo"
            value={formData.licenseNo}
            onChange={handleChange}
            placeholder="Licence No. (Optional)"
            className="register-sec-input"
          />
        </div>

        <div className="register-sec-right">
          <h2 className="register-sec-title">Contact Details</h2>

          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            placeholder="Street + Nr"
            className="register-sec-input"
            required
          />

          <input
            type="text"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Additional Information"
            className="register-sec-input"
          />

          <div className="register-sec-input-group">
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="Zip Code"
              className="register-sec-input"
              required
            />
            <input
              type="text"
              name="place"
              value={formData.place}
              onChange={handleChange}
              placeholder="Place"
              className="register-sec-input"
              required
            />
          </div>

          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
            className="register-sec-input"
            required
          />

          <div className="register-sec-input-group">
            <input
              type="text"
              name="phoneCode"
              value={formData.phoneCode}
              onChange={handleChange}
              placeholder="Code +"
              className="register-sec-input"
              required
            />
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="register-sec-input"
              required
            />
          </div>

          <div className="register-sec-terms-container">
            <input
              type="checkbox"
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              id="terms"
              className="register-sec-checkbox"
              required
            />
            <label htmlFor="terms">
              I do accept the <a href="#">Terms and Conditions</a> of your site.
            </label>
          </div>

          <button type="submit" className="register-sec-button">REGISTER</button>

          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Register;
