// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
