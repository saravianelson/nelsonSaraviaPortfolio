import React from 'react';
import './skills.css';

export const Skills = () => {
  return (
    <div className="container-skills" id="skills">
      <h2 className="skills-heading">Skills</h2>
      <div className="divider"></div>
      <div className="skills-list">
        <div className="skill">
          <div className="info">
            <p><span className="skill-icon">&#60;/&#62;</span>HTML & CSS</p>
            <span className="percent">75%</span>
          </div>
          <div className="bar">
            <div className="progress html"></div>
          </div>
        </div>

        <div className="skill">
          <div className="info">
            <p><span className="skill-icon">JS</span>JavaScript</p>
            <span className="percent">45%</span>
          </div>
          <div className="bar">
            <div className="progress js"></div>
          </div>
        </div>

        <div className="skill">
          <div className="info">
            <p><span className="skill-icon">&#x1F4BB;</span>Data Base</p>
            <span className="percent">87%</span>
          </div>
          <div className="bar">
            <div className="progress db"></div>
          </div>
        </div>

        <div className="skill">
          <div className="info">
            <p><span className="skill-icon">Git</span>Git & GitHub</p>
            <span className="percent">80%</span>
          </div>
          <div className="bar">
            <div className="progress git"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
