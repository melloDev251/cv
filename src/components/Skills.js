import React from "react";
import Interests from "./Interests";
import SkillsContents from "./SkillsContents";

const Skills = () => {
  return (
    <div className="test">
      <div className="skills">
        <h2 className="h2">Compétences</h2>
        <SkillsContents title="HTML" rating="5" />
        <SkillsContents title="CSS" rating="4" />
        <SkillsContents title="JS" rating="4" />
        <SkillsContents title="PHP" rating="3" />
        <SkillsContents title="PYTHON" rating="3" />
        <SkillsContents title="REACT" rating="4" />
        <SkillsContents title="EXPRESS / NODE" rating="4" />
        <SkillsContents title="LARAVEL" rating="3" />
        <SkillsContents title="DJANGO" rating="3" />
      </div>
      <div className="skills">
        <h2 className="h2">Langues</h2>
        <SkillsContents title="Malagasy" rating="5" />
        <SkillsContents title="Français" rating="4" />
        <SkillsContents title="Anglais" rating="2" />
        <SkillsContents title="Arabe" rating="1" />
      </div>
      <Interests />
    </div>
  );
};

export default Skills;
