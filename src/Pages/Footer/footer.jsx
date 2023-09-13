import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Nelson Saravia</h2>
        <h5>Fullstack Developer</h5>
      </div>
      <div className="social-network">
        <a href="https://github.com/saravianelson" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/saravianelson/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://twitter.com/Saravianel" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-twitter"></i>
        </a>
      </div>
    </footer>
  );
};

