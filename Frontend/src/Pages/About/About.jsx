import React from 'react'
import './About.css'
import AboutMission from '../../Components/Mission/AboutMission'
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs'
import ClientFeedBack from '../../Components/ClientFeedback/ClientFeedBack'
import MeetOurAgent from '../../Components/MeetOurAgent/MeetOurAgent'



const About = () => {
  return (
    <>

    <div className="About-sec-container">
      <div className="About-sec-overlay"></div>
      <div className="About-sec-content">
        <p className="breadcrumb">Home / Pages / About</p>
        <h1 className="About-sec-title">About Us</h1>
      </div>
    </div>
<AboutMission />
<WhyChooseUs />
<MeetOurAgent />
<ClientFeedBack />
    </>
  )
}

export default About