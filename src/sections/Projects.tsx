import React from 'react';
import './Projects.css';
import { FaMapMarkedAlt, FaMoneyCheckAlt, FaRobot, FaGlobe } from 'react-icons/fa';

const Projects: React.FC = () => (
  <section className="projects-section">
    <h2>Projects</h2>
    <div className="projects-grid">
      <div className="project-card">
        <FaMapMarkedAlt className="project-icon" />
        <h3>Travel Itinerary Generator</h3>
        <p>
          A personalized travel planning tool that uses user preferences to generate optimized itineraries and recommendations.
        </p>
      </div>
      <div className="project-card">
        <FaMoneyCheckAlt className="project-icon" />
        <h3>Payroll Management System</h3>
        <p>
          An efficient system for automating employee salary calculations, deductions, and payslip generation.
        </p>
      </div>
      <div className="project-card">
        <FaRobot className="project-icon" />
        <h3>Deepfake Detective</h3>
        <p>
          A detection framework leveraging deep learning and image forensics to identify AI-generated synthetic media.
        </p>
      </div>
      <div className="project-card">
        <FaGlobe className="project-icon" />
        <h3>Portfolio Website</h3>
        <p>
          A responsive personal portfolio built using React, highlighting my skills, projects, and professional journey.
        </p>
      </div>
    </div>
  </section>
);

export default Projects;
