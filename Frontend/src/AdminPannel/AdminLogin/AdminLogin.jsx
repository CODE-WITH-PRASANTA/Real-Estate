import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

// Assets
import FlyingImg from '../../assets/Flying-catoon-img.png';
import DotImg from '../../assets/left-side-dot-img.png';
import CompanyLogo from '../../assets/SunLoc-Logo.png';

// Import DashboardLayoutBasic
import DashboardLayoutBasic from '../AdminNavbar/AdminNavbar';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ emailOrPhone: '', password: '' });
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login state

  // Predefined login credentials
  const validCredentials = {
    email: 'uday111168@gmail.com',
    phone: '9773454668',
    password: 'Udayadmin@123',
  };

  // Handle input change
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError('');
  };

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    const { emailOrPhone, password } = credentials;

    if (
      (emailOrPhone === validCredentials.email || emailOrPhone === validCredentials.phone) &&
      password === validCredentials.password
    ) {
      setIsAuthenticated(true); // Set authentication to true
    } else {
      setError('Invalid email/phone or password');
    }
  };

  // If authenticated, show DashboardLayoutBasic instead of login page
  if (isAuthenticated) {
    return <DashboardLayoutBasic />;
  }

  return (
    <div className="admin-login">
      <div className="login-container">
        {/* Left Section */}
        <div className="login-left">
          <img src={DotImg} alt="Decorative Dots" className="dot-image" />
          <img src={CompanyLogo} alt="Company Logo" className="company-logo" />
          <h1 className="login-title">Admin Panel Login</h1>
        </div>

        {/* Right Section */}
        <div className="login-right">
          <img src={FlyingImg} alt="Illustration" className="login-illustration" />
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="text"
              name="emailOrPhone"
              placeholder="Enter Email or Mobile Number"
              className="input-field"
              value={credentials.emailOrPhone}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="*********"
              className="input-field"
              value={credentials.password}
              onChange={handleChange}
              required
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="login-button">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
