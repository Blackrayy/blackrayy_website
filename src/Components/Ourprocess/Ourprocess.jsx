import React from 'react';
import './OurProcess.css';

const steps = [
  { title: 'Call & Design', description: 'Understanding requirements and designing the blueprint.' },
  { title: 'Development', description: 'Building the solution with clean, scalable code.' },
  { title: 'Testing', description: 'Ensuring functionality, performance, and bug-free results.' },
  { title: 'Deployment', description: 'Launching the product in the live environment.' },
  { title: 'Support & Maintenance', description: 'Post-launch updates, fixes, and improvements.' }
];

const OurProcess = () => {
  return (
    <section className="our-process">
      <h2 className="section-title">Our Process</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className="step-number">{index + 1}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
      <div className="ourprocess-diagonal-divider" ></div>
    </section>
  );
};

export default OurProcess;
