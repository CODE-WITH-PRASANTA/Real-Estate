import React, { useState } from 'react';
import './FlourInformation.css';

const FlourInformation = ({ onChange }) => {
  const [floors, setFloors] = useState([{ id: Date.now(), data: {} }]);

  // Handle individual field change
  const handleInputChange = (id, field, value) => {
    const updatedFloors = floors.map((floor) =>
      floor.id === id
        ? { ...floor, data: { ...floor.data, [field]: value } }
        : floor
    );
    setFloors(updatedFloors);
    onChange(updatedFloors.map((floor) => floor.data));
  };

  // Add a new floor section
  const handleAddFloor = () => {
    setFloors([...floors, { id: Date.now(), data: {} }]);
  };

  // Remove a floor section by id
  const handleRemoveFloor = (id) => {
    const updatedFloors = floors.filter((floor) => floor.id !== id);
    setFloors(updatedFloors);
    onChange(updatedFloors.map((floor) => floor.data));
  };

  return (
    <div className="flour-plan-container">
      <h2 className="flour-plan-title">Floors</h2>

      {floors.map((floor, index) => (
        <div className="flour-plan-section" key={floor.id}>
          <div className="flour-plan-header">
            <span>Floor {index + 1}:</span>
            <button
              className="flour-plan-close"
              onClick={() => handleRemoveFloor(floor.id)}
            >
              &#10005;
            </button>
          </div>

          <div className="flour-plan-grid">
            <div className="flour-plan-group">
              <label>Floor Number:</label>
              <input
                type="text"
                placeholder="Enter floor Number"
                onChange={(e) =>
                  handleInputChange(floor.id, 'floorNumber', e.target.value)
                }
              />
            </div>
            <div className="flour-plan-group">
              <label>Floor Price (Only Digits):</label>
              <input
                type="number"
                placeholder="Enter price"
                onChange={(e) =>
                  handleInputChange(floor.id, 'price', e.target.value)
                }
              />
            </div>
            <div className="flour-plan-group">
              <label>Price Postfix:</label>
              <input
                type="text"
                placeholder="Enter postfix"
                onChange={(e) =>
                  handleInputChange(floor.id, 'postfix', e.target.value)
                }
              />
            </div>
            <div className="flour-plan-group">
              <label>Floor Size (Only Digits):</label>
              <input
                type="number"
                placeholder="Enter size"
                onChange={(e) =>
                  handleInputChange(floor.id, 'size', e.target.value)
                }
              />
            </div>
            <div className="flour-plan-group">
              <label>Kitchen:</label>
              <input
                type="text"
                placeholder="Enter Kitchens"
                onChange={(e) =>
                  handleInputChange(floor.id, 'kitchen', e.target.value)
                }
              />
            </div>
            <div className="flour-plan-group">
              <label>Bedrooms:</label>
              <input
                type="number"
                placeholder="Enter bedrooms"
                onChange={(e) =>
                  handleInputChange(floor.id, 'bedrooms', e.target.value)
                }
              />
            </div>
            <div className="flour-plan-group">
              <label>Bathrooms:</label>
              <input
                type="number"
                placeholder="Enter bathrooms"
                onChange={(e) =>
                  handleInputChange(floor.id, 'bathrooms', e.target.value)
                }
              />
            </div>
            <div className="flour-plan-group">
              <label>Floor Image:</label>
              <input
                type="file"
                onChange={(e) =>
                  handleInputChange(floor.id, 'image', e.target.files[0])
                }
              />
            </div>
            <div className="flour-plan-group">
              <label>About:</label>
              <textarea
                className="flour-plan-description"
                placeholder="Enter About the Floor"
                onChange={(e) =>
                  handleInputChange(floor.id, 'about', e.target.value)
                }
              ></textarea>
            </div>
          </div>
        </div>
      ))}

      <button className="flour-plan-add" onClick={handleAddFloor}>
        +
      </button>
    </div>
  );
};

export default FlourInformation;
