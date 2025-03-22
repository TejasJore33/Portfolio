import React from "react";
import skills from "./data/skills.json";

const Skills = () => {
  return (
    <div className="skills-container" id="Skills">
      <h1>SKILLS</h1>

      <div className="skills-items">
        {skills.map((data, index) => (
          <div
            className="skill-card"
            key={index} // Use index as a fallback if data doesn't have a unique ID
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img
              className="skill-img"
              src={`./assets/${data.imageSrc}`}
              alt={data.title}
            />
            <h3>{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
