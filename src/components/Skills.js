import React from "react";
import Interests from "./Interests";
import SkillsContents from "./SkillsContents";

const Skills = () => {
  return (
    <div className="test">
      <div className="skills">
        <h2 className="h2">Compétences</h2>
        {/* <SkillsContents title="HTML/CSS" rating="4" /> */}
        <SkillsContents title="React" rating="4" />
        <SkillsContents title="Express.js" rating="4" />
        <SkillsContents title="Node.js" rating="4" />
        <SkillsContents title="MongoDB" rating="4" />
        <SkillsContents title="Angular" rating="2.5" />
        <SkillsContents title="Django" rating="2" />
        <SkillsContents title="Vue.js " rating="1.5" />
        <SkillsContents title="Laravel" rating="1.5" />
      </div>
      <div className="skills">
        <h2 className="h2">Langues</h2>
        <SkillsContents title="Malagasy" rating="5" />
        <SkillsContents title="Français" rating="3.5" />
        <SkillsContents title="Anglais" rating="1.5" />
        {/* <SkillsContents title="Espagnol" rating="1" /> */}
      </div>
      <Interests />
    </div>
  );
};

export default Skills;
