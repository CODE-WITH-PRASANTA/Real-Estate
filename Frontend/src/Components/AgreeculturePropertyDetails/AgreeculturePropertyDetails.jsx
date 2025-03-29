import React from "react";
import { useParams } from "react-router-dom";
import "./AgreeculturePropertyDetails.css";
import CommentSection from "../CommentSection/CommentSection";
import AgreeculturePropertyDetailsHeading from "../AgreeculturePropertyDetailsHeading/AgreeculturePropertyDetailsHeading";
import AgreeculturePropertyDetailsDescription from "../AgreeculturePropertyDetailsDescription/AgreeculturePropertyDetailsDescription";
import AgreeculturePropertyDetailsGallery from "../AgreeculturePropertyDetailsGallery/AgreeculturePropertyDetailsGallery";
import AgreeculturePropertyDetailsMoreAbout from "../AgreeculturePropertyDetailsMoreAbout/AgreeculturePropertyDetailsMoreAbout";

const AgreeculturePropertyDetails = () => {
  const { id } = useParams(); // Extracting id from the URL

  return (
    <div>
      <AgreeculturePropertyDetailsHeading />
      <AgreeculturePropertyDetailsGallery />
      <AgreeculturePropertyDetailsDescription />
      <AgreeculturePropertyDetailsMoreAbout />
      <CommentSection />
    </div>
  );
};

export default AgreeculturePropertyDetails;
