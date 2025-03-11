import React, { useState } from 'react';
import './AgentApproval.css';
import { FaUser, FaEnvelope, FaPhoneAlt, FaLocationArrow, FaImage, FaTrashAlt, FaSignInAlt } from 'react-icons/fa';

const AgentApproval = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      mobile: '9876543210',
      location: 'New York',
      profilePic: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      mobile: '8765432109',
      location: 'Los Angeles',
      profilePic: 'https://via.placeholder.com/50',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      mobile: '7654321098',
      location: 'Chicago',
      profilePic: 'https://via.placeholder.com/50',
    },
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="Agent-Approval-container">
      <h2 className="Agent-Approval-header">
        Agent Approval
      </h2>

      <form className="Agent-Approval-form" onSubmit={handleSubmit}>
        <div className="Agent-Approval-form-group">
          <label><FaPhoneAlt style={{ marginRight: '10px' }} /> Enter Mobile Number:</label>
          <input type="text" placeholder="Mobile Number" required />
        </div>

        <div className="Agent-Approval-form-group">
          <label><FaEnvelope style={{ marginRight: '10px' }} /> Enter Email:</label>
          <input type="email" placeholder="Email" required />
        </div>

        <div className="Agent-Approval-form-group">
          <label><FaSignInAlt style={{ marginRight: '10px' }} /> Enter Password:</label>
          <input type="password" placeholder="Password" required />
        </div>

        <div className="Agent-Approval-form-group">
          <label><FaSignInAlt style={{ marginRight: '10px' }} /> Re-enter Password:</label>
          <input type="password" placeholder="Re-enter Password" required />
        </div>

        <div className="Agent-Approval-form-group">
          <label><FaUser style={{ marginRight: '10px' }} /> Enter Name:</label>
          <input type="text" placeholder="Name" required />
        </div>

        <div className="Agent-Approval-form-group">
          <label><FaImage style={{ marginRight: '10px' }} /> Upload Profile Picture:</label>
          <input type="file" accept="image/*" required />
        </div>

        <div className="Agent-Approval-form-group">
          <label><FaLocationArrow style={{ marginRight: '10px' }} /> Enter Location:</label>
          <input type="text" placeholder="Location" required />
        </div>

        <button type="submit" className="Agent-Approval-submit-button">
          <FaSignInAlt style={{ marginRight: '10px' }} />
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <img src={user.profilePic} alt={user.name} className="Agent-Approval-profile-pic" />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.location}</td>
              <td>
                <button
                  className="Agent-Approval-delete-button"
                  onClick={() => handleDelete(user.id)}
                >
                  <FaTrashAlt style={{ marginRight: '8px' }} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgentApproval;
