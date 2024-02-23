import React, { useState } from "react";
import { NavLink } from 'react-router-dom';


function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  
  return (
    <React.Fragment>
      <div className="symon">
      <nav id="desktop-nav">
        <div className="logo">Symon D.</div>
        <div>
          <ul className="nav-links">
            <li><NavLink className="nav-links" to="/about">About</NavLink></li>
            <li><NavLink className="nav-links" to="/resume">Resume</NavLink></li>
            <li><NavLink className="nav-links" to="/myexperience">Experience</NavLink></li>
            <li><NavLink className="nav-links" to="/projects">Projects</NavLink></li>
            <li><NavLink className="nav-links" to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </nav>

      <nav id="hamburger-nav">
        <div className="logo">John Doe</div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={`menu-links ${isOpen ? 'open' : ''}`}>
            <li><NavLink className="nav-link" onClick={toggleMenu} to="/about">About</NavLink></li>
            <li><NavLink className="nav-link" onClick={toggleMenu} to="/resume">Resume</NavLink></li>
            <li><NavLink className="nav-link" onClick={toggleMenu} to="/myexperience">Experience</NavLink></li>
            <li><NavLink className="nav-link" onClick={toggleMenu} to="/projects">Projects</NavLink></li>
            <li><NavLink className="nav-link" onClick={toggleMenu} to="/contact">Contact</NavLink></li>
          </div>
        </div>
      </nav>
    </div>
    </React.Fragment>
  );
}

export default Navigation;
