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
            <p><img className="skill-icon" src="/assets/img/html.png" alt="" />HTML & CSS</p>
            <span className="percent">95%</span>
          </div>
          <div className="bar">
            <div className="progress html"></div>
          </div>
        </div>

        <div className="skill">
          <div className="info">
          <p><img className="skill-icon" src="/assets/img/javascript-logo-24.png" alt="" />JavaScript</p>
            <span className="percent">95%</span>
          </div>
          <div className="bar">
            <div className="progress js"></div>
          </div>
        </div>

        <div className="skill">
          <div className="info">
            <p><img className="skill-icon" src="/assets/img/github-logo-24.png" alt="" />Git & GitHub</p>
            <span className="percent">90%</span>
          </div>
          <div className="bar">
            <div className="progress git"></div>
          </div>
        </div>

        <div className="skill">
          <div className="info">
            <p><img className="skill-icon" src="/assets/img/data-solid-24.png" alt="" />Data Base</p>
            <span className="percent">87%</span>
          </div>
          <div className="bar">
            <div className="progress db"></div>
          </div>
        </div>

        <div className="skill">
          <div className="info">
            <p><img className="skill-icon" src="/assets/img/piton.png" alt="" />Python</p>
            <span className="percent">80%</span>
          </div>
          <div className="bar">
            <div className="progress python"></div>
          </div>
        </div>

        
        <div className="skill">
          <div className="info">
            <p><img className="skill-icon" src="/assets/img/data-science.png" alt="" />Data Science</p>
            <span className="percent">80%</span>
          </div>
          <div className="bar">
            <div className="progress ds"></div>
          </div>
        </div>

      </div>
    </div>
  );
};
