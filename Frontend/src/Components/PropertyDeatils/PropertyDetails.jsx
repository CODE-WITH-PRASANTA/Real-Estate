import React from "react";
import { useParams } from "react-router-dom";
import "./PropertyDetails.css";
import PropertyDetailsHeading from "../PropertyDetailsHeading/PropertyDetailsHeading";
import PropertyDetailsGallery from "../PropertyDetailsGalery/PropertyDetailsGalery";
import PropertyDetailsDescription from "../PropertyDetailsDescription/PropertyDetailsDescription";
import PropertyDetailsMoreAbout from "../PropertyDetailsMoreAbout/PropertyDetailsMoreAbout";
import WhatIsNearBy from "../WhatIsNearBy/WhatIsNearBy";
import CommentSection from "../CommentSection/CommentSection";
import AgreeculturePropertyDetailsGallery from "../AgreeculturePropertyDetailsGallery/AgreeculturePropertyDetailsGallery";

const PropertyDetails = () => {
  const { id } = useParams(); // Extracting id from the URL

  return (
    <div>
      <PropertyDetailsHeading />
      <AgreeculturePropertyDetailsGallery />
      <PropertyDetailsDescription />
      <PropertyDetailsMoreAbout />
      <WhatIsNearBy />
      <CommentSection />
    </div>
  );
};

export default PropertyDetails;
