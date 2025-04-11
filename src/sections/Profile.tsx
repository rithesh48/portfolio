// import React from 'react';
// import './Profile.css';

// const Profile: React.FC = () => (
//   <section className="profile-section">
//     <h2>Hi, I'm Rithesh 😎</h2>
//     <p>A passionate developer who loves bikes, cars, and coding.</p>
//   </section>
// );

// export default Profile;


import React from 'react';
import './Profile.css';

const Profile: React.FC = () => (
  <section className="profile-section">
    <div className="profile-content">
      <h2>Hi, I'm <span className="highlight">Rithesh</span> </h2>
      <p>A passionate <span className="highlight">developer</span> who loves <span className="highlight">bikes</span>, <span className="highlight">cars</span>, and <span className="highlight">coding</span>.</p>
    </div>
  </section>
);

export default Profile;
