import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  
  return (
    <nav className="navbar">
      <div className="logo">blackRayy</div>
      <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/services">Contact</Link></li>
        <li><Link to="/services">About</Link></li>
        <li><Link to="/services">FAQ</Link></li>
      </ul>
      <button className="book-btn">Book now</button>
    </nav>
  );
};

export default Navbar;
