import React, { useState } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiInfo,
  FiHeart,
  FiLayers,
  FiUsers,
  FiBookOpen,
  FiHelpCircle,
  FiPhone,
  FiUpload,
} from "react-icons/fi";
import "./Navbar.css";
import CompanyLogo from "../../assets/SunLoc-Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo">
          <img src={CompanyLogo} alt="Company Logo" />
        </div>

        {/* Desktop Navigation */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#">
              <FiHome className="nav-icon" /> Home
            </a>
          </li>
          <li>
            <a href="#">
              <FiInfo className="nav-icon" /> About Us
            </a>
          </li>
          <li>
            <a href="#">
              <FiHeart className="nav-icon" /> Properties
            </a>
          </li>
          <li>
            <a href="#">
              <FiLayers className="nav-icon" /> Our Services
            </a>
          </li>
          <li>
            <a href="#">
              <FiUsers className="nav-icon" /> Agent Subscription
            </a>
          </li>
          <li>
            <a href="#">
              <FiBookOpen className="nav-icon" /> Blog
            </a>
          </li>
          <li>
            <a href="#">
              <FiHelpCircle className="nav-icon" /> FAQ
            </a>
          </li>
          <li>
            <a href="#">
              <FiPhone className="nav-icon" /> Contact Us
            </a>
          </li>
        </ul>

        {/* Right Section */}
        <div className="nav-buttons">
          <button className="sign-in">
            <FiUsers className="button-icon" /> Agent Login
          </button>
          <button className="submit-property">
            <FiUpload className="button-icon" /> Submit Property
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <ul>
          <li>
            <a href="#">
              <FiHome className="nav-icon" /> Home
            </a>
          </li>
          <li>
            <a href="#">
              <FiInfo className="nav-icon" /> About Us
            </a>
          </li>
          <li>
            <a href="#">
              <FiHeart className="nav-icon" /> Properties
            </a>
          </li>
          <li>
            <a href="#">
              <FiLayers className="nav-icon" /> Our Services
            </a>
          </li>
          <li>
            <a href="#">
              <FiUsers className="nav-icon" /> Agent Subscription
            </a>
          </li>
          <li>
            <a href="#">
              <FiBookOpen className="nav-icon" /> Blog
            </a>
          </li>
          <li>
            <a href="#">
              <FiHelpCircle className="nav-icon" /> FAQ
            </a>
          </li>
          <li>
            <a href="#">
              <FiPhone className="nav-icon" /> Contact Us
            </a>
          </li>
          <li>
            <button className="sign-in">
              <FiUsers className="button-icon" /> Sign In
            </button>
          </li>
          <li>
            <button className="submit-property">
              <FiUpload className="button-icon" /> Submit Property
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
