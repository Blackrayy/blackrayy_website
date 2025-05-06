import React from 'react';
import './Services.css';
import Navbar from '../Navbar/Navbar';

const Services = () => {
  return (
    <>
    <Navbar/>
    <div className="maintenance-banner">
      <p>🚧 Our website is currently in <strong>maintenance mode</strong>. Some features may be unavailable. We'll be back shortly!</p>
    </div>
    </>
  );
};

export default Services;
