import React, { useState } from 'react';
import './ViewRequest.css';

const ViewRequest = () => {
  // Dummy data
  const [requests, setRequests] = useState([
    {
      name: 'John Doe',
      phone: '9876543210',
      email: 'johndoe@example.com',
      experience: 5,
      business: 'Software Development',
      area: 'Tech',
      license: '123456789',
      address: '123 Main Street',
      pincode: '123456',
      appliedFor: 'Agent',
    },
    {
      name: 'Jane Smith',
      phone: '9876543211',
      email: 'janesmith@example.com',
      experience: 3,
      business: 'Retail',
      area: 'Fashion',
      license: '987654321',
      address: '456 Elm Street',
      pincode: '654321',
      appliedFor: 'Admin',
    },
    {
      name: 'Mark Johnson',
      phone: '9876543212',
      email: 'markjohnson@example.com',
      experience: 10,
      business: 'Consultancy',
      area: 'Finance',
      license: '112233445',
      address: '789 Pine Avenue',
      pincode: '789123',
      appliedFor: 'Agent',
    },
  ]);

  // Action handlers
  const handleApprove = (index) => {
    alert(`Request from ${requests[index].name} approved!`);
    // Logic to approve the request (e.g., update the status in DB)
  };

  const handleDeny = (index) => {
    alert(`Request from ${requests[index].name} denied!`);
    // Logic to deny the request (e.g., remove from DB or mark as denied)
  };

  const handleDelete = (index) => {
    const updatedRequests = requests.filter((_, i) => i !== index);
    setRequests(updatedRequests);
    alert(`Request from ${requests[index].name} deleted!`);
  };

  return (
    <div className="view-req-container">
      <h2 className="view-req-heading">Admin Requests</h2>
      <table className="view-req-table">
        <thead>
          <tr className="view-req-table-header">
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Experience Year</th>
            <th>Current Business</th>
            <th>Business Area</th>
            <th>Licence No.</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>Applied for</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="view-req-table-body">
          {requests.map((request, index) => (
            <tr key={index} className="view-req-table-row">
              <td>{request.name}</td>
              <td>{request.phone}</td>
              <td>{request.email}</td>
              <td>{request.experience}</td>
              <td>{request.business}</td>
              <td>{request.area}</td>
              <td>{request.license}</td>
              <td>{request.address}</td>
              <td>{request.pincode}</td>
              <td>{request.appliedFor}</td>
              <td className="view-req-action-buttons">
                <button onClick={() => handleApprove(index)} className="view-req-approve-btn">Approve</button>
                <button onClick={() => handleDeny(index)} className="view-req-deny-btn">Deny</button>
                <button onClick={() => handleDelete(index)} className="view-req-delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewRequest;
