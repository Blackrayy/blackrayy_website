import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>blackRayy</h3>
          <p>Building sleek and powerful digital experiences from New Delhi.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/">Portfolio</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Connect with Us</h4>
          <div className="social-icons">
            <Link to="/"><FaFacebookF /></Link>
            <Link to="/"><FaTwitter /></Link>
            <Link to="/"><FaLinkedinIn /></Link>
            <Link to="/"><FaInstagram /></Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} blackRayy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
