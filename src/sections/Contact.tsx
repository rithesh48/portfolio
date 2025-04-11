// import React from 'react';
// import './Contact.css';

// const Contact: React.FC = () => (
//   <section className="contact-section">
//     <h2>Contact</h2>
//     <p>Email me at <a href="mailto:rithesh@example.com">rithesh@example.com</a></p>
//   </section>
// );

// export default Contact;

import React from 'react';
import './Contact.css';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => (
  <section className="contact-section">
    <h2>Contact</h2>
    <ul>
      <li>
        <FaEnvelope /> Email: <a href="mailto:riteshdj889@gmail.com">riteshdj889@gmail.com</a>
      </li>
      <li>
        <FaInstagram /> Instagram: <a href="https://instagram.com/ritesh_d_j" target="_blank" rel="noopener noreferrer">@ritesh_d_j</a>
      </li>
      <li>
        <FaLinkedin /> LinkedIn: <a href="https://www.linkedin.com/in/ritesh-d-j-0a925824b/" target="_blank" rel="noopener noreferrer">ritesh-d-j</a>
      </li>
    </ul>
  </section>
);

export default Contact;

