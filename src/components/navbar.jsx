import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <Link to="/">Home</Link>
      </div>
      <div className="right">
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
      </div>
    </nav>
  );
};

export default Navbar;
