import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import './AgentLayout.css'

const AgentLayout = ({ children }) => {
  return (
    <div className="agent-dashboard-container">
      <Sidebar />
      <div className="agent-dashboard-content">
        {children}
      </div>
    </div>
  );
};

export default AgentLayout;
