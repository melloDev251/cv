import React from "react";
import dataFormations from "../data/Formations";
import dataExperiences from "../data/Experiences";
import dataOtherCompetences from "../data/OtherCompetences"
import Formations from "./Formations";
import Experiences from "./Experiences";
import OtherCompétences from "./OtherCompétences";

const FormatExp = () => {
  return (
    <>
      <Formations dataFor={dataFormations} />
      <Experiences dataExp={dataExperiences} />
      <OtherCompétences dataOth={dataOtherCompetences} />
    </>
  );
};

export default FormatExp;
