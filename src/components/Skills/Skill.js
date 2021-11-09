import React from "react";
import "./Skill.css";

const Skill = (props) => {
  return (
    <div className="Skill-bar">
      <h3>{props.title}</h3>
      <div className="bar">
        <div className="info">

        </div>
        <div className="progress-line" >
            <span style={{width:props.percent}}></span>
        </div>
      </div>
    </div>
  );
};
export default Skill;
