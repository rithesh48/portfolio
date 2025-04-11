import React from 'react';
import './About.css';

const About: React.FC = () => (
  <section className="about-section">
    <h2>About Me</h2>
    <p>
      I'm Rithesh, a Full Stack Developer driven by curiosity, creativity, and a deep love for building digital experiences that solve real-world problems. 
      I specialize in developing robust, scalable web applications using modern technologies across the full development stack.
    </p>
    <p>
      Currently interning at Stacklane, I'm gaining valuable hands-on experience in professional software development — from writing clean, reusable code to 
      collaborating on team-based projects. I’m particularly passionate about creating responsive UIs, working with APIs, and integrating cloud services like AWS and Azure.
    </p>
    <p>
      My approach is simple: keep learning, stay curious, and build things that matter. Whether it's frontend design, backend logic, or data handling, I enjoy crafting elegant 
      solutions that combine performance with usability. When I'm not coding, you'll probably find me exploring bikes, cars, or new tech trends.
    </p>
    <p>
      I'm always excited to connect, collaborate, and contribute to projects that make a meaningful impact.
    </p>
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
