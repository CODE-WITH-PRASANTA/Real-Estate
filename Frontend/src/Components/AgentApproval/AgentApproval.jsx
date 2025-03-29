import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AgentApproval.css";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaLocationArrow,
  FaImage,
  FaTrashAlt,
  FaSignInAlt,
  FaUserTag,
} from "react-icons/fa";
import { API_URL } from "../../Api"; // Import the API_URL constant




const AgentApproval = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    location: "",
    role: "Agent",
    password: "",
    confirmPassword: "",
    profilePic: null,
  });

  // Fetch agents from backend
  useEffect(() => {
    axios
      .get(`${API_URL}/auth/all`)
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching agents:", error));
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await axios.post(
        `${API_URL}/auth/register`,
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("Agent registered successfully!");
      setUsers([...users, response.data.newAgent]); // Update frontend list
    } catch (error) {
      console.error("Error registering agent:", error);
      alert(error.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="Agent-Approval-container">
      <h2 className="Agent-Approval-header">Agent Approval</h2>

      <form className="Agent-Approval-form" onSubmit={handleSubmit}>
        <div className="Agent-Approval-form-group">
          <label>
            <FaUser style={{ marginRight: "10px" }} /> Enter Name:
          </label>
          <input type="text" name="name" onChange={handleChange} required />
        </div>

        <div className="Agent-Approval-form-group">
          <label>
            <FaEnvelope style={{ marginRight: "10px" }} /> Enter Email:
          </label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>

        <div className="Agent-Approval-form-group">
          <label>
            <FaPhoneAlt style={{ marginRight: "10px" }} /> Enter Mobile Number:
          </label>
          <input type="text" name="mobile" onChange={handleChange} required />
        </div>

        <div className="Agent-Approval-form-group">
          <label>
            <FaLocationArrow style={{ marginRight: "10px" }} /> Enter Location:
          </label>
          <input type="text" name="location" onChange={handleChange} required />
        </div>

        <div className="Agent-Approval-form-group">
          <label>
            <FaUserTag style={{ marginRight: "10px" }} /> Select Role:
          </label>
          <select name="role" onChange={handleChange} required className="Agent-Approval-select">
            <option value="Agent">Agent</option>
            <option value="Subagent">Subagent</option>
          </select>
        </div>

        <div className="Agent-Approval-form-group">
          <label>
            <FaImage style={{ marginRight: "10px" }} /> Upload Profile Picture:
          </label>
          <input type="file" name="profilePic" accept="image/*" onChange={handleChange} required />
        </div>

        <div className="Agent-Approval-form-group">
          <label>
            <FaSignInAlt style={{ marginRight: "10px" }} /> Enter Password:
          </label>
          <input type="password" name="password" onChange={handleChange} required />
        </div>

        <div className="Agent-Approval-form-group">
          <label>
            <FaSignInAlt style={{ marginRight: "10px" }} /> Re-enter Password:
          </label>
          <input type="password" name="confirmPassword" onChange={handleChange} required />
        </div>

        <button type="submit" className="Agent-Approval-submit-button">
          <FaSignInAlt style={{ marginRight: "10px" }} />
          Create User
        </button>
      </form>

      <h3 className="Agent-Approval-users-header">Created Users</h3>
      <table className="Agent-Approval-user-table">
        <thead>
          <tr>
            <th>Profile Picture</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Location</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <img src={user.profilePic} alt={user.name} className="Agent-Approval-profile-pic" />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.location}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgentApproval;
