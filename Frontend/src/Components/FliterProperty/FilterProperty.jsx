
import React, { useState, useEffect } from "react";
import { FaSearch, FaSlidersH, FaSyncAlt } from "react-icons/fa";
import axios from "axios";
import { API_URL } from "../../Api"; // Import the API base URL
import "./FilterProperty.css";

const FilterProperty = ({ onFilter }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [choosingType, setChoosingType] = useState("");
    const [choosingCategory, setChoosingCategory] = useState("");
    const [puttingLocation, setPuttingLocation] = useState("");
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get(`${API_URL}/properties/properties`);
                const uniqueLocations = [...new Set(response.data.map((property) => property.puttingLocation))];
                setLocations(uniqueLocations);
            } catch (error) {
                console.error("Error fetching locations:", error);
            }
        };
        fetchLocations();
    }, []);

    const toggleFilters = () => setIsOpen(!isOpen);

    const resetFilters = () => {
        setChoosingType("");
        setChoosingCategory("");
        setPuttingLocation("");
        onFilter(null);
    };

    const searchProperties = async () => {
        try {
            const response = await axios.get(`${API_URL}/properties/filter`, {
                params: { choosingType, choosingCategory, puttingLocation }
            });
            onFilter(response.data);
        } catch (error) {
            console.error("Error fetching properties:", error);
        }
    };


    return (
        <div className="filter-container">
            <h2 className="filter-heading">Property List Top Filter</h2>
            <div className="filter-bar">
                <select className="filter-select" value={choosingType} onChange={(e) => setChoosingType(e.target.value)}>
                    <option value="">Type</option>
                    <option value="Sell">Sell</option>
                    <option value="Rent">Rent</option>
                </select>

                <select className="filter-select" value={choosingCategory} onChange={(e) => setChoosingCategory(e.target.value)}>
                    <option value="">Category</option>
                    <option value="Agricultural land">Agricultural land</option>
                    <option value="Non Agricultural land">Non Agricultural land</option>
                    <option value="Residential Plot">Residential Plot</option>
                    <option value="Commercial Plot">Commercial Plot</option>
                    <option value="Industrial Plot">Industrial Plot</option>
                    <option value="Shop / Office">Shop / Office</option>
                    <option value="Weekend Villa">Weekend Villa</option>
                    <option value="Warehouse">Warehouse</option>
                    <option value="Hotel Rent">Hotel Rent</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="House Rent">House Rent</option>
                </select>

                <select className="filter-select" value={puttingLocation} onChange={(e) => setPuttingLocation(e.target.value)}>
                    <option value="">Location</option>
                    {locations.map((location, index) => (
                        <option key={index} value={location}>{location}</option>
                    ))}
                </select>

                <button className="filter-toggle" onClick={toggleFilters}>
                    <FaSlidersH />
                </button>
            </div>

            <div className={`filter-options ${isOpen ? "open" : "closed"}`}>
                <div className="filter-section-checkbox">
                    <div className="filter-header">
                        <h2 className="filter-title">Filter Properties</h2>
                        <button className="filter-reset" onClick={resetFilters} title="Reset Filters">
                            <FaSyncAlt className="reset-icon" />
                        </button>
                    </div>
                    <div className="filter-actions">
                        <button className="filter-search" onClick={searchProperties}>
                            <FaSearch /> Search Property
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterProperty;
