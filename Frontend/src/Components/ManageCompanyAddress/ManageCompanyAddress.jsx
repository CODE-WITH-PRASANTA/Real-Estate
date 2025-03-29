import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../Api'; // Import the API URL
import './ManageCompanyAddress.css';

const ManageCompanyAddress = () => {
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({ photo: '', address: '', properties: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get(`${API_URL}/company-address/all`);
        setEntries(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEntries();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFormData({ ...formData, photo: e.target.files[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('photo', formData.photo);
    formDataToSubmit.append('address', formData.address);
    formDataToSubmit.append('properties', formData.properties);

    if (editIndex !== null) {
      try {
        const response = await axios.put(`${API_URL}/company-address/update/${editIndex}`, formDataToSubmit);
        const updatedEntries = [...entries];
        updatedEntries[editIndex] = response.data;
        setEntries(updatedEntries);
        setEditIndex(null);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const response = await axios.post(`${API_URL}/company-address/create`, formDataToSubmit);
        setEntries([...entries, response.data]);
      } catch (error) {
        console.error(error);
      }
    }
    setFormData({ photo: '', address: '', properties: '' });
    setLoading(false);
  };

  const handleEdit = (index) => {
    setFormData(entries[index]);
    setEditIndex(index);
  };

  const handleDelete = async (index) => {
    try {
      await axios.delete(`${API_URL}/company-address/delete/${entries[index]._id}`);
      setEntries(entries.filter((_, i) => i !== index));
      if (editIndex === index) setEditIndex(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Manage-company-address-container">
      <h2 className="Manage-company-address-title">Manage Office Address</h2>
      
      <form onSubmit={handleSubmit} className="Manage-company-address-form">
        <div className="Manage-company-address-form-group">
          <label>Upload Office Location Photo:</label>
          <input type="file" accept="image/*" onChange={handleFileChange} required={!editIndex} />
        </div>

        <div className="Manage-company-address-form-group">
          <label>Enter Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>

        <div className="Manage-company-address-form-group">
          <label>How Many Properties?</label>
          <input type="number" name="properties" value={formData.properties} onChange={handleChange} required />
        </div>

        <button type="submit" className="Manage-company-address-submit-btn" disabled={loading}>
          {editIndex !== null ? 'Update' : 'Submit'}
        </button>
      </form>

      {entries.length > 0 && (
        <div className="Manage-company-address-table-container">
          <h3 className="Manage-company-address-table-title">Uploaded Data</h3>
          <table className="Manage-company-address-table">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Address</th>
                <th>Properties</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={index} className="Manage-company-address-table-row">
                  <td><img src={entry.photoUrl} alt="Office" className="Manage-company-address-office-image" /></td>
                  <td>{entry.address}</td>
                  <td>{entry.properties}</td>
                  <td>
                  <button className="Manage-company-address-edit-btn" onClick={() => handleEdit(index)}>Edit</button>
                    <button className="Manage-company-address-delete-btn" onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageCompanyAddress;