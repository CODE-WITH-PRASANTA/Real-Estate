import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ViewRequest.css";

import { API_URL } from "../../Api"; // Import API_URL

const ViewRequest = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get(`${API_URL}/users`);
        setRequests(response.data);
      } catch (error) {
        console.error("Error fetching user requests:", error);
      }
    };
    fetchRequests();
  }, []);

  // Approve user request
  const handleApprove = async (id) => {
    try {
      await axios.patch(`${API_URL}/users/${id}/approve`);
      setRequests(requests.map(user => 
        user._id === id ? { ...user, approved: true } : user
      ));
      alert("User approved successfully!");
    } catch (error) {
      console.error("Error approving user:", error);
    }
  };

  // Delete user request (only if not approved)
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/users/${id}`);
      setRequests(requests.filter(user => user._id !== id));
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="view-req-container">
      <h2 className="view-req-heading">Admin Requests</h2>
      
      <div className="view-req-table-container">
        <table className="view-req-table">
          <thead>
            <tr className="view-req-table-header">
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Experience</th>
              <th>Previous Position</th>
              <th>Business Area</th>
              <th>License No.</th>
              <th>Address</th>
              <th>Pincode</th>
              <th>Role</th>
              <th>Status</th>
              <th>Additional Info</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="view-req-table-body">
            {requests.map((user) => (
              <tr key={user._id} className="view-req-table-row">
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.phoneCode} {user.phoneNumber}</td>
                <td>{user.email}</td>
                <td>{user.experience} years</td>
                <td>{user.position}</td>
                <td>{user.businessArea}</td>
                <td>{user.licenseNo}</td>
                <td>{user.street}, {user.place}, {user.country}</td>
                <td>{user.zipCode}</td>
                <td>{user.role}</td>
                <td className={`status-${user.approved ? "approved" : "pending"}`}>
                  {user.approved ? "Approved" : "Pending"}
                </td>
                <td>{user.additionalInfo || "N/A"}</td>
                <td className="view-req-action-buttons">
                  {!user.approved && (
                    <button onClick={() => handleApprove(user._id)} className="view-req-approve-btn">
                      Approve
                    </button>
                  )}
                  {!user.approved && (
                    <button onClick={() => handleDelete(user._id)} className="view-req-delete-btn">
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewRequest;