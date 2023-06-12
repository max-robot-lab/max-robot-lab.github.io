import React from 'react';

import Main from '../../layouts/Main';

const FlipBot = () => (
  <Main
    title="Projects"
    description="Learn about Jiajun An's projects."
    fullPage="true"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>Design of a Tailed Quadruped Robot Towards Various Somersault Motions</h2>
          <p>Focused duration: Jun 2021 - Aug 2021</p>
          <p>PROJECT TYPE: Personal Proposed PROJECT</p>
        </div>
      </header>
      <div className="project_content">
        <h3>Introduction:</h3>
        <p>Inspired by the agile aerial maneuvers of kangaroo rats,, I propose this project to explore the application of a 3-DoF morphable inertial tail to assist quadruped robots in achieving various challenging somersault motions. The whole robot design incorporates both legs and a 3-DoF morphable inertial tail. The leg movements are controlled by three actuators: one actuator generates the leg&apos;s jumping linear motion, one actuator regulates the leg flexison/extension angle, while another actuator regulates the leg abduction/adduction angle.</p>
        <p>The utilization of the tail includes three main aspects: (1) Generate angular momentum for the somersault motions; (2) Aerial reorientation during flight phase; (3) Adjust the whole robot&apos;s moment of inertia to adjust body rotation speed during somersaults.</p>
        <p>The target motions of this robot include: (1) Omnidirectional somersault motions, such as backflip flips, forward flips, side flips, and diogonal flips; (2) Omnidirectional jumping and hopping motions; (3) Advanced somersault motions, such as soemrsault with a twist, double flips, and even tripple flips.</p>
        <div><center><img width="80%" src={`${process.env.PUBLIC_URL}${'/images/projects/FlipBot_Details.svg'}`} alt="details" /></center></div>
      </div>
    </article>
  </Main>
);

export default FlipBot;
