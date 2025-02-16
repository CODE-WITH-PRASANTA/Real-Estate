// JSX File (DashboardSection.jsx)
import React from "react";
import { FaListAlt, FaClock, FaStar, FaComment } from "react-icons/fa";
import "./DashboardSection.css";

const DashboardSection = () => {
  const stats = [
    {
      icon: <FaListAlt className="icon" />,
      label: "Your listing",
      value: "32",
      extra: "/50 remaining",
    },
    {
      icon: <FaClock className="icon" />,
      label: "Pending",
      value: "02",
    },
    {
      icon: <FaStar className="icon" />,
      label: "Favorites",
      value: "06",
    },
    {
      icon: <FaComment className="icon" />,
      label: "Reviews",
      value: "1.483",
    },
  ];

  return (
    <div className="dashboard-section">
      {stats.map((stat, index) => (
        <div className="dashboard-card" key={index}>
          <div className="icon-container">{stat.icon}</div>
          <div className="text-container">
            <p className="label">{stat.label}</p>
            <p className="value">
              {stat.value} <span className="extra">{stat.extra}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardSection;

