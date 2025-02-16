import React from 'react'
import './OurService.css'
import OurWorkService from '../../Components/OurWorkService/OurWorkService'
import ClientFeedBack from '../../Components/ClientFeedback/ClientFeedBack'
import FaqOfServiceSec from '../../Components/FaqOfServiceSec/FaqOfServiceSec'
import ServiceInquirySec from '../../Components/ServiceInquirySec/ServiceInquirySec'


const OurService = () => {
  return (
    <div>
    <div className="our-service-container">
      <div className="our-service-overlay"></div>
      <div className="our-service-content">
        <p className="breadcrumb">Home / Pages / Service</p>
        <h1 className="our-service-title">Our Service</h1>
      </div>
    </div>

    <OurWorkService />
    <ServiceInquirySec />
    <ClientFeedBack />
    <FaqOfServiceSec />
    </div>
  )
}

export default OurService