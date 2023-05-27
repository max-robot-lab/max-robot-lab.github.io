import React from 'react';

import Main from '../../layouts/Main';

const HapticWrist = () => (
  <Main
    title="Projects"
    description="Learn about Jiajun An's projects."
    fullPage="true"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>A novel 3-DoF Large Force Haptic Device for the Wrist Motion</h2>
          <p>Focused duration: Apr 2023 - Until Now</p>
          <p>PROJECT TYPE: Personal Proposed PROJECT</p>
        </div>
      </header>
      <div className="project_content">
        <h3>Introduction:</h3>
        <p>I propose this design with the aim of potential applications in VR devices, teleoperation masters, and exoskeletons. My current plan is to iterate and construct the hardware for testing before Sep 2023.</p>
        <div><center><img width="80%" src={`${process.env.PUBLIC_URL}${'/images/projects/HapticWrist_Details.svg'}`} alt="details" /></center></div>
      </div>
    </article>
  </Main>
);

export default HapticWrist;
