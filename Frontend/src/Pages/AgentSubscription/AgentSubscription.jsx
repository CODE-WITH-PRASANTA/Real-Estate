import React from 'react'
import './AgentSubscription.css'
import PricingSection from '../../Components/PricingSec/PricingSec'
import SubScriptionFaq from '../../Components/SubScriptionFaq/SubScriptionFaq'
import InquirySec from '../../Components/InquirySec/InquirySec'

const AgentSubscription = () => {
  return (
    <>
    <div className="agent-sub-container">
      <div className="agent-sub-overlay"></div>
      <div className="agent-sub-content">
        <p className="breadcrumb">Home / Pages /Subscription</p>
        <h1 className="agent-sub-title">Agent Subscription</h1>
      </div>
    </div>

    <PricingSection />
    <SubScriptionFaq />
    <InquirySec />
    </>
  )
}

export default AgentSubscription