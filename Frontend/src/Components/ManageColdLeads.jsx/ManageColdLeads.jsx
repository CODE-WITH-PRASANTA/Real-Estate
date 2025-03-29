import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../Api'; // Import API URL
import './ManageColdLeads.css';

const ManageColdLeads = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [newNumber, setNewNumber] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/managephone/phone`)
      .then((res) => {
        if (res.data.number) {
          setPhoneNumber(res.data.number);
        }
      })
      .catch((err) => console.error('Error fetching phone number:', err));
  }, []);

  const handleSaveNumber = () => {
    if (newNumber.length === 10 && /^\d+$/.test(newNumber)) {
      const method = phoneNumber ? 'put' : 'post';
      
      axios[method](`${API_URL}/managephone/phone`, { number: newNumber })
        .then((res) => {
          if (res.data.phone) {
            setPhoneNumber(res.data.phone.number);
            setNewNumber('');
          }
        })
        .catch((err) => console.error(`Error ${method === 'post' ? 'adding' : 'updating'} phone number:`, err));
    } else {
      alert('Please enter a valid 10-digit phone number.');
    }
  };

  const handleDeleteNumber = () => {
    axios.delete(`${API_URL}/managephone/phone`)
      .then(() => setPhoneNumber(''))
      .catch((err) => console.error('Error deleting phone number:', err));
  };

  return (
    <div className="call-manage-section">
      <h2 className="call-manage-section-title">Manage Call Number</h2>
      <div className="call-manage-section-input-group">
        <input
          type="text"
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
          placeholder="Enter phone number"
          maxLength="10"
          className="call-manage-section-input"
        />
        <button onClick={handleSaveNumber} className="call-manage-section-save-btn">
          {phoneNumber ? 'Update' : 'Add'}
        </button>
      </div>
      {phoneNumber && (
        <div className="call-manage-section-list">
          <p className="call-manage-section-number">Stored Number: {phoneNumber}</p>
          <button onClick={handleDeleteNumber} className="call-manage-section-delete-btn">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ManageColdLeads;
