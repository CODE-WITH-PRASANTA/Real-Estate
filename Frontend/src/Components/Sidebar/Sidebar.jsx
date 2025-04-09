import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Sidebar.css";
import {
  FaBars,
  FaTimes,
  FaClipboardList,
  FaSignOutAlt,
  FaUser,
  FaHome,
  FaPlusCircle,
  FaBuilding,
  FaUsers,
} from "react-icons/fa";
import { API_URL } from "../../Api";

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (userRole !== "Agent") return null;

  return (
    <>
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside className={`sidebar-container ${isOpen ? "open" : ""}`}>
        <h3 className="sidebar-heading">Agent Dashboard</h3>

        <nav className="sidebar-nav">
          <Link
            to="/agent-dashboard"
            className={location.pathname === "/agent-dashboard" ? "sidebar-active" : ""}
          >
            <FaHome /> Dashboard
          </Link>

          <Link
            to="/agent-dashboard/profile"
            className={location.pathname === "/agent-dashboard/profile" ? "sidebar-active" : ""}
          >
            <FaUser /> My Profile
          </Link>

          <Link
            to="/agent-dashboard/properties"
            className={location.pathname === "/agent-dashboard/properties" ? "sidebar-active" : ""}
          >
            <FaBuilding /> My Properties
          </Link>

          <Link
            to="/agent-dashboard/add-property"
            className={location.pathname === "/agent-dashboard/add-property" ? "sidebar-active" : ""}
          >
            <FaPlusCircle /> Add Property
          </Link>

          <Link
            to="/agent-dashboard/subagents"
            className={location.pathname === "/agent-dashboard/subagents" ? "sidebar-active" : ""}
          >
            <FaUsers /> Subagents
          </Link>
        </nav>

        <button className="sidebar-logout" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
