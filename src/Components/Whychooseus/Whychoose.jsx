import React from 'react';
import './Whychoose.css';

const Whychoose = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance for real-time results.',
    },
    {
      icon: '🔒',
      title: 'Secure by Design',
      description: 'Built with enterprise-grade security protocols.',
    },
    {
      icon: '🚀',
      title: 'Scalable Solutions',
      description: 'Handles growth without slowing down.',
    },
  ];

  return (
    <section className="whychoose-section">
      <div className="whychoose-container">
        <h2 className="section-title">Why Choose BlackRayy?</h2>
        <p className="section-description">
          Discover the core advantages that make us stand out from the rest.
        </p>
        <div className="features-grid">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{item.icon}</div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-text">{item.description}</p>
            </div>
          ))}
        </div>
        
      </div>
      <div className="divider-diagonal-flip"></div>
    </section>
  );
};

export default Whychoose;
