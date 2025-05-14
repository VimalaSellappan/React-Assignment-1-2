import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); 
  return (
    <nav>
      <div className="left">
        <Link to="/">Home</Link>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div> 
        <div></div>
      </div>

      <div className={`right ${menuOpen ? 'active' : ''}`}>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
      </div>
    </nav>
  );
};

export default Navbar;
