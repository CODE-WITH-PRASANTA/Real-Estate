import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-sec-left">
        <h2 className="left-sec-title">General Information</h2>
        <select className="register-sec-input">
          <option>Choose One</option>
          <option>Agent</option>
          <option>SubAgent</option>
        </select>
        <div className="register-sec-input-group">
          <input type="text" placeholder="First name" className="register-sec-input" />
          <input type="text" placeholder="Last name" className="register-sec-input" />
        </div>
        <select className="register-sec-input">
          <option>Experience Year</option>
          <option>1 Year</option>
          <option>2 Year</option>
          <option>3 Year</option>
          <option>More than Else</option>
        </select>
        <input type="text" placeholder="Current Business or Position" className="register-sec-input" />
        <input type="text" placeholder="Business Area: Your Area" className="register-sec-input" />
        <input type="email" placeholder="Email" className="register-sec-input" />
        <input type="text" placeholder="Licence No. (Optional)" className="register-sec-input" />
      </div>

      <div className="register-sec-right">
        <h2 className="register-sec-title">Contact Details</h2>
        <input type="text" placeholder="Street + Nr" className="register-sec-input" />
        <input type="text" placeholder="Additional Information" className="register-sec-input" />
        <div className="register-sec-input-group">
          <input type="text" placeholder="Zip Code" className="register-sec-input" />
          <input type="text" placeholder="Place" className="register-sec-input" />
        </div>
        <input type="text" placeholder="Country" className="register-sec-input" />
        <div className="register-sec-input-group">
          <input type="text" placeholder="Code +" className="register-sec-input" />
          <input type="text" placeholder="Phone Number" className="register-sec-input" />
        </div>
        <input type="email" placeholder="Your Email" className="register-sec-input" />
        <div className="register-sec-terms-container">
          <input type="checkbox" id="terms" className="register-sec-checkbox" />
          <label htmlFor="terms">
            I do accept the <a href="#">Terms and Conditions</a> of your site.
          </label>
        </div>
        <button className="register-sec-button">REGISTER</button>
      </div>
    </div>
  );
};

export default Register;
