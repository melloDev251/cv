import React from "react";
import User from "./User";
import Skills from "./Skills";
import Profil from "./Profil";
import FormatExp from "./FormatExp";
import DarkMode from "./DarkMode";
import { Preview, print } from "react-html2pdf";
import ReactTooltip from "react-tooltip";

const Home = () => {
  const handleGenerateCv = () => {
    const cvTemplate = document.getElementById("cv-print");
    cvTemplate.setAttribute(
      "style",
      "width:210mm !important",
      "height:297mm !important"
    );
    cvTemplate.classList.add("cv-print");
    document.body.classList.remove("dark");
    setTimeout(() => {
      print("cv", "cv-print");
      cvTemplate.setAttribute("style", "width:100% !important");
      cvTemplate.classList.remove("cv-print");
    }, 300);
  };

  return (
    <Preview id={"cv-print"} className="cv-print">
      <div className="grid__container">
        <div className="sidebar">
          <div className="actions">
            <DarkMode />
            <button onClick={handleGenerateCv}>
              <i className="fas fa-print fa-2x" data-tip="Cliquer pour générer en format pdf"></i>
            </button>
            <ReactTooltip place="bottom" type="dark" textColor="#ffffff" effect="float" />
          </div>
          <User />
          <Skills />
        </div>
        <div className="main">
          <Profil />
          <FormatExp />
        </div>
      </div>
    </Preview>
  );
};

export default Home;
