import React from 'react'
import UploadMediaPage from '../../Components/UploadMediaPage/UploadMediaPage'
import AditionalInformation from '../../Components/AdditionalInformation/AditionalInformation'
import FlourInformation from '../../Components/FlourInformtion/FlourInformation'
import OwnerInformation from '../../Components/OwnerInformation/OwnerInformation'

const SubmitProperty = () => {
  return (
    <div>
        <UploadMediaPage />
        <AditionalInformation />
        <FlourInformation />
        <OwnerInformation />
    </div>
  )
}

export default SubmitProperty