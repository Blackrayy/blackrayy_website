import React from 'react';
import './Projects.css';
import img4 from '../../../public/Images/img4.jpg';
import img5 from '../../../public/Images/img5.jpg';
import img6 from '../../../public/Images/img6.jpg';
const projects = [
  {
    title: "E-commerce Platform Revamp",
    description: "For a leading retail client, we developed a cutting-edge e-commerce platform that seamlessly integrates with their existing IT infrastructure. Utilizing responsive web design and a customized mobile app, the project enhanced user engagement and increased their online sales by 40% within the first quarter after its launch.",
    image: img4
  },
  {
    title: "Healthcare App Development",
    description: "We collaborated with a healthcare provider to design a patient-centric mobile application that streamlines appointment scheduling and teleconsultations. The app features a user-friendly interface with secure data encryption, ensuring patient confidentiality while improving overall service efficiency.",
    image: img5
  },
  {
    title: "Educational Portal Redesign",
    description: "Tasked with redesigning an outdated educational portal, we created an intuitive, mobile-responsive platform that facilitates interactive learning. The project involved developing custom features like live webinars, discussion forums, and comprehensive progress tracking, significantly improving the user experience for both students and educators.",
    image: img6
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-heading">Stunning Apps Built for You</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
      <div className="projects-diagonal-divider" ></div>
    </section>
  );
};

export default Projects;
