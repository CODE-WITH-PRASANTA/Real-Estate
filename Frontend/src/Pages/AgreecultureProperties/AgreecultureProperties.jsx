import React, { useState } from 'react';
import './AgreecultureProperties.css';
import AgreeculturePropertiesandOthers from '../../Components/AgreeculturePropertiesandOthers/AgreeculturePropertiesandOthers';
import AgreecultureFilterProperty from '../../Components/AgreecultureFilterProperty/AgreecultureFilterProperty';

const AgreecultureProperties = () => {
  const [filteredProperties, setFilteredProperties] = useState(null); // State to hold filtered data

  return (
    <>
      <div className="Properties-container">
        <div className="Properties-overlay"></div>
        <div className="Properties-content">
          <p className="breadcrumb">Home / Pages / Plots</p>
          <h1 className="Properties-title">Available Land Properties</h1>
        </div>
      </div>
      <AgreecultureFilterProperty onFilter={setFilteredProperties} />
      <AgreeculturePropertiesandOthers filteredProperties={filteredProperties} />
    </>
  );
};

export default AgreecultureProperties;
