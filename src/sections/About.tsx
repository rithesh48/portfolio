import React from 'react';
import './About.css';

const About: React.FC = () => (
  <section className="about-section">
    <h2>About Me</h2>
    <p>I’m a full-stack developer with a passion for building user-friendly applications and exploring modern tech stacks.</p>
  </section>
);
export default About;



// // File: src/sections/About.tsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import './About.css';

// const About: React.FC = () => (
//   <motion.section
//     className="about-section"
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, ease: 'easeOut' }}
//   >
//     <h2>About Me</h2>
//     <p>I’m a full-stack developer with a passion for building user-friendly applications and exploring modern tech stacks.</p>
//   </motion.section>
// );

// export default About;
