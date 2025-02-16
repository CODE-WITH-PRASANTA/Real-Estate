import React, { useState } from 'react';
import './FlourInformation.css';

const FlourInformation = () => {
  const [floors, setFloors] = useState([{ id: Date.now() }]);

  // Add a new floor section
  const handleAddFloor = () => {
    setFloors([...floors, { id: Date.now() }]);
  };

  // Remove a floor section by id
  const handleRemoveFloor = (id) => {
    setFloors(floors.filter((floor) => floor.id !== id));
  };

  return (
    <div className="flour-plan-container">
      <h2 className="flour-plan-title">Floors</h2>

      <div className="flour-plan-enable">
        <span>Enable Floor Information:</span>
      </div>

      {floors.map((floor) => (
        <div className="flour-plan-section" key={floor.id}>
          <div className="flour-plan-header">
            <span>Floor {floors.indexOf(floor) + 1}:</span>
            <button
              className="flour-plan-close"
              onClick={() => handleRemoveFloor(floor.id)}
            >
              &#10005;
            </button>
          </div>

          <div className="flour-plan-grid">
            <div className="flour-plan-group">
              <label>Floor Name:</label>
              <input type="text" placeholder="Enter floor name" />
            </div>
            <div className="flour-plan-group">
              <label>Floor Price (Only Digits):</label>
              <input type="number" placeholder="Enter price" />
            </div>
            <div className="flour-plan-group">
              <label>Price Postfix:</label>
              <input type="text" placeholder="Enter postfix" />
            </div>
            <div className="flour-plan-group">
              <label>Floor Size (Only Digits):</label>
              <input type="number" placeholder="Enter size" />
            </div>
            <div className="flour-plan-group">
              <label>Size Postfix:</label>
              <input type="text" placeholder="Enter postfix" />
            </div>
            <div className="flour-plan-group">
              <label>Bedrooms:</label>
              <input type="number" placeholder="Enter bedrooms" />
            </div>
            <div className="flour-plan-group">
              <label>Bathrooms:</label>
              <input type="number" placeholder="Enter bathrooms" />
            </div>
            <div className="flour-plan-group">
              <label>Floor Image:</label>
              <input type="file" />
            </div>
            <div className="flour-plan-group">
            <label>Description:</label>
            <textarea 
                className="flour-plan-description" 
                placeholder="Enter description"
            ></textarea>
            </div>

          </div>
        </div>
      ))}

      <button className="flour-plan-add" onClick={handleAddFloor}>+</button>
    </div>
  );
};

export default FlourInformation;