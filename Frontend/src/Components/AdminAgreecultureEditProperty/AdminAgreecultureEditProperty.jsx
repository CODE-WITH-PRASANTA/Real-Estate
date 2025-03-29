import React, { useState, useEffect } from "react";
import { FaTrash, FaCheck } from "react-icons/fa";
import "./AdminAgreecultureEditProperty.css";
import { API_URL } from '../../Api';


const AdminAgreecultureEditProperty = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(`${API_URL}/agreecultureproperties/agriculture-properties`);
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProperties();
}, []);


const handleDelete = async (id) => {
  try {
      const response = await fetch(`${API_URL}/agreecultureproperties/agriculture-property/${id}`, {
          method: "DELETE",
      });

      if (response.ok) {
          setProperties(properties.filter((property) => property._id !== id));
      } else {
          console.error("Failed to delete property");
      }
  } catch (error) {
      console.error("Error deleting property:", error);
  }
};


const handleUpdate = async (id, updatedData) => {
    try {
      const response = await fetch(`${API_URL}/agreecultureproperties/agriculture-property/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
  
      if (response.ok) {
        const updatedProperty = await response.json();
        setProperties((prevProperties) =>
          prevProperties.map((property) =>
            property._id === id ? updatedProperty.updatedProperty : property
          )
        );
        alert("✅ Property updated successfully!"); // Success Alert
      } else {
        alert("❌ Failed to update property. Please try again."); // Error Alert
        console.error("Failed to update property");
      }
    } catch (error) {
      alert("⚠️ Error updating property. Check console for details."); // Error Alert
      console.error("Error updating property:", error);
    }
  };
  

  return (
    <div className="AdminEdit-Property">
      <div className="AdminEdit-Property-Container">
        <h2 className="AdminEdit-Property-Title">Manage Properties</h2>
        <table className="AdminEdit-Property-Table">
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Title</th>
              <th>Price</th>
              <th>Seller Photo</th>
              <th>Seller Name</th>
              <th>Action</th>
              <th>Choose Type</th>
              <th>Choose Category</th>
              <th>Put Location</th>
              <th>Choose Best Value</th>
              <th>Confirm</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property, index) => (
              <tr key={property._id}>
                <td>{index + 1}</td>
                <td>{property.title}</td>
                <td>{property.price}</td>
                <td>
                  <img
                    src={property.sellerPhoto}
                    alt="Seller"
                    className="AdminEdit-Property-SellerPhoto"
                  />
                </td>
                <td>{property.sellerName}</td>
                <td>
                  <button
                    className="AdminEdit-Property-DeleteBtn"
                    onClick={() => handleDelete(property._id)}
                  >
                    <FaTrash /> Delete
                  </button>
                </td>

                <td>
                    <select id={`type-${property._id}`} defaultValue={property.category} className="AdminEdit-Property-Select">
                      <option value="Rent">Rent</option>
                      <option value="Sell">Sell</option>
                    </select>
                  </td>
                  <td>
                    <select id={`category-${property._id}`} defaultValue={property.propertyType} className="AdminEdit-Property-Select">
                      <option>Agricultural land</option>
                      <option>Non-Agricultural land</option>
                      <option>Residential Plot</option>
                      <option>Commercial Plot</option>
                      <option>Industrial Plot</option>
                      <option>Shop / Office</option>
                      <option>Weekend Villa</option>
                      <option>Warehouse</option>
                      <option>Hotel Rent</option>
                      <option>Restaurant</option>
                      <option>House Rent</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      id={`location-${property._id}`}
                      defaultValue={property.location}
                      placeholder="Enter Location"
                      className="AdminEdit-Property-Input"
                    />
                  </td>
                  <td>
                    <select id={`bestValue-${property._id}`} defaultValue={property.bestValue} className="AdminEdit-Property-Select">
                      <option value="Normal">Normal</option>
                      <option value="Top Properties">TOP PROPERTIES</option>
                    </select>
                  </td>
                <td>
                    <button
                      className="AdminEdit-Property-ConfirmBtn"
                      onClick={() =>
                        handleUpdate(property._id, {
                          choosingType: document.getElementById(`type-${property._id}`).value,
                          choosingCategory: document.getElementById(`category-${property._id}`).value,
                          puttingLocation: document.getElementById(`location-${property._id}`).value,
                          choosingBestValue: document.getElementById(`bestValue-${property._id}`).value,
                        })
                      }
                    >
                      <FaCheck /> Confirm
                    </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAgreecultureEditProperty;
