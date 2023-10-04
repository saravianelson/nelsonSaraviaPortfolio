import React from 'react';
import './footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="sotial-network">
        <a href="https://github.com/saravianelson" target="_blank" rel="noopener noreferrer">
        <img src="/assets/img/github-logo-24.png" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/saravianelson/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/img/linkedin-square-logo-24.png" alt="" />
        </a>
        <a href="https://twitter.com/Saravianel" target="_blank" rel="noopener noreferrer">
          <img src="/assets/img/twitter-logo-24.png" alt="" />
        </a>
      </div>
      <div className="footer-content">
        <h6> © 2021 Nelson Saravia</h6>
      </div>
    </footer>
  );
};

