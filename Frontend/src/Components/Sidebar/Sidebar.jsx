import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Sidebar.css";
import { FaBars, FaTimes, FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import { API_URL } from "../../Api"; // Ensure correct API import

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await axios.get(`${API_URL}/auth/verify-token`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUserRole(response.data.role);
      } catch (error) {
        console.error("Error fetching role:", error);
      }
    };

    fetchRole();
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  // Ensure Sidebar only loads for Agents
  if (userRole !== "Agent") {
    return null; // Hide Sidebar for non-agents
  }

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
        {/* Navigation Sections */}
        <nav className="sidebar-nav">
          <Link to="/agentdashboard" className={location.pathname === "/agentdashboard" ? "sidebar-active" : ""}>
            <FaClipboardList /> Dashboard
          </Link>
        </nav>

        {/* Logout Button */}
        <button className="sidebar-logout" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </>
  );
};

export default Sidebar;
