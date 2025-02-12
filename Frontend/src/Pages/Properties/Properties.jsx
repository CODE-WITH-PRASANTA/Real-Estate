import React from 'react'
import './Properties.css'
import FilterProperty from '../../Components/FliterProperty/FilterProperty'

const Properties = () => {
  return (
    <>
    <div className="Properties-container">
      <div className="Properties-overlay"></div>
      <div className="Properties-content">
        <p className="breadcrumb">Home / Pages / Properties</p>
        <h1 className="Properties-title">Avalable Properties</h1>
      </div>
    </div>

    <FilterProperty />
    </>
  )
}

export default Properties