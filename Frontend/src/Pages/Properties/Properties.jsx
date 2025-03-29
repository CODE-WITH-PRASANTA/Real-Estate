import React, { useState } from 'react';
import './Properties.css';
import FilterProperty from '../../Components/FliterProperty/FilterProperty';
import PropertiesandOthers from '../../Components/PropertiesandOthers/PropertiesandOthers';

const Properties = () => {
  const [filteredProperties, setFilteredProperties] = useState(null); // State to hold filtered data

  return (
    <>
      <div className="Properties-container">
        <div className="Properties-overlay"></div>
        <div className="Properties-content">
          <p className="breadcrumb">Home / Pages / Properties</p>
          <h1 className="Properties-title">Available Properties</h1>
        </div>
      </div>
      <FilterProperty onFilter={setFilteredProperties} />
      <PropertiesandOthers filteredProperties={filteredProperties} />
    </>
  );
};

export default Properties;
