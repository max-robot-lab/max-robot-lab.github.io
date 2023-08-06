import React from 'react';

import Main from '../../layouts/Main';

const DexterousHand = () => (
  <Main
    title="Projects"
    description="Learn about Jiajun An's projects."
    fullPage="true"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>Design of a Humanoid Dexterous robot hand</h2>
          <p>Focused duration: Jun 2017 - Aug 2017</p>
          <p>PROJECT TYPE: LAB PROJECT (SUPERVISOR: <a href="https://scholar.google.com/citations?user=DbviELoAAAAJ&hl=en">PROFESSOR FUCHUN SUN</a>, <a href="https://scholar.google.com/citations?user=5G47IcIAAAAJ&hl=zh-CN">PROFESSOR BING FANG</a>)</p>
        </div>
      </header>
      <div className="project_content">
        <h3>Introduction:</h3>
        <p>In this project, I developed an innovative cable-driven approach for humanoid robot finger design, while simultaneously increasing the degree of freedom (DoF) of the robot hand from 13 (previous version) to 22. Additionally, we aim to integrate new angle sensors, haptic sensors, and temperature sensors into the robot hand design.</p>
        <div><center><img width="80%" src={`${process.env.PUBLIC_URL}${'/images/projects/DexterousHandDetails.svg'}`} alt="details" /></center></div>
      </div>
    </article>
  </Main>
);

export default DexterousHand;
