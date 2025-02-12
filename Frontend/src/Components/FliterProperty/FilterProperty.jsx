import React, { useState } from 'react';
import { FaSearch, FaSlidersH, FaSyncAlt } from 'react-icons/fa';
import './FilterProperty.css';

const FilterProperty = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([1000, 10000000]);
  const [bedroom, setBedroom] = useState('');
  const [bathroom, setBathroom] = useState('');
  const [minArea, setMinArea] = useState('');
  const [maxArea, setMaxArea] = useState('');

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  const resetFilters = () => {
    setPriceRange([1000, 10000000]);
    setBedroom('');
    setBathroom('');
    setMinArea('');
    setMaxArea('');
  };

  return (
    <div className="filter-container">
      <h2 className="filter-heading">Property List Top Filter</h2>
      <div className="filter-bar">
        <select className="filter-select">
          <option>Type</option>
          <option>Buy</option>
          <option>Rent</option>
        </select>
        <select className="filter-select">
          <option>Category</option>
          <option>Apartment</option>
          <option>Properties</option>
          <option>House</option>
          <option>Villas</option>
        </select>
        <select className="filter-select">
          <option>Location</option>
          <option>New York</option>
          <option>Los Angeles</option>
          <option>San Francisco</option>
          <option>Miami</option>
        </select>
        <button className="filter-toggle" onClick={toggleFilters}>
          <FaSlidersH />
        </button>
      </div>
      <div className={`filter-options ${isOpen ? 'open' : 'closed'}`}>
        <div className="filter-section row">
          <div className="filter-item">
            <label>Bedroom:</label>
            <input
              type="number"
              placeholder="0"
              value={bedroom}
              onChange={(e) => setBedroom(e.target.value)}
            />
          </div>
          <div className="filter-item">
            <label>Bathroom:</label>
            <input
              type="number"
              placeholder="0"
              value={bathroom}
              onChange={(e) => setBathroom(e.target.value)}
            />
          </div>
          <div className="filter-item">
          <label>Minimum :</label>
            <input
              type="text"
              className="area-input"
              placeholder="Min area m²"
              value={minArea}
              onChange={(e) => setMinArea(e.target.value)}
            />
          </div>
          <div className="filter-item">
          <label>Maximum :</label>
            <input
              type="text"
              className="area-input"
              placeholder="Max area m²"
              value={maxArea}
              onChange={(e) => setMaxArea(e.target.value)}
            />
          </div>
        </div>

        <div className="filter-section-price filter-price">
            <label className="price-label">
                Price Range: ₹{priceRange[0].toLocaleString()} - ₹
                {priceRange[1].toLocaleString()}
            </label>
            <div className="qodef-e-filter-item qodef--price-range">
                <div className="qodef-e-filter-item-inner">
                <div className="qodef-e-price-heading">
                    ₹{priceRange[0].toLocaleString()} - ₹
                    {priceRange[1].toLocaleString()}
                </div>
                <div className="qodef-e-price-range-slider-wrapper">
                    <input
                    type="range"
                    min="1000"
                    max="10000000"
                    step="100"
                    value={priceRange[0]}
                    onChange={(e) =>
                        setPriceRange([Math.min(Number(e.target.value), priceRange[1]), priceRange[1]])
                    }
                    className="price-slider"
                    />
                    <input
                    type="range"
                    min="1000"
                    max="10000000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) =>
                        setPriceRange([priceRange[0], Math.max(Number(e.target.value), priceRange[0])])
                    }
                    className="price-slider"
                    />
                </div>
                </div>
                <input type="hidden" name="price_min" value={priceRange[0]} />
                <input type="hidden" name="price_max" value={priceRange[1]} />
            </div>
        </div>
        <div className="filter-section-checkbox">
        <div className="filter-header">
            <h2 className="filter-title">Filter Properties</h2>
            <button className="filter-reset" onClick={resetFilters} title="Reset Filters">
            <FaSyncAlt className="reset-icon" />
            </button>
        </div>
        <div className="filter-checkboxes">
            <label>
            <input type="checkbox" /> Air Condition
            </label>
            <label>
            <input type="checkbox" /> Disabled Access
            </label>
            <label>
            <input type="checkbox" /> Elevator
            </label>
            <label>
            <input type="checkbox" /> Cable TV
            </label>
            <label>
            <input type="checkbox" /> Ceiling Height
            </label>
            <label>
            <input type="checkbox" /> Swimming Pool
            </label>
        </div>
        <div className="filter-actions">
            <button className="filter-search">
            <FaSearch /> Search Property
            </button>
        </div>
        </div>

      </div>
    </div>
  );
};

export default FilterProperty;
