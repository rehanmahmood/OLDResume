import React from "react";
import Skill from "./Skill";
import "./Skills.css";



export default function Skills() {
  return (
    <div className="skills-bar">
        <h1>My Skills</h1>
      <Skill title="Python" percent="80%"/>
      <Skill title="React" percent="60%"/>
      <Skill title="Git" percent="52%"/>
      <Skill title="HTML + CSS" percent="86%"/>
      <Skill title="Django" percent="45%"/>
      <Skill title="Writing" percent="90%"/>
    </div>
  );
}
