import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="menu-toggler" onClick={toggleMenu}>
        {isOpen ? (
          <img className="close-menu" src="/assets/img/close.png" alt="Close" />
        ) : (
          <img className="open-menu" src="/assets/img/open.png" alt="Open" />
        )}
      </div>
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li><a href='#home' onClick={closeMenu}>Home</a></li>
        <li><a href='#aboutme' onClick={closeMenu}>About</a></li>
        <li><a href='#portfolio' onClick={closeMenu}>Portfolio</a></li>
        <li><a href='#skills' onClick={closeMenu}>Skills</a></li>
        <li><a href='#contact' onClick={closeMenu}>Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
