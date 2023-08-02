import React from 'react';

import Main from '../../layouts/Main';

const TeleRepIns = () => (
  <Main
    title="Projects"
    description="Learn about Jiajun An's projects."
    fullPage="true"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>Teleoperated legged-manipulator with replaceable instruments</h2>
          <p>Focused duration: Jan 2023 - Until Now</p>
          <p>PROJECT TYPE: Lab PROJECT (SUPERVISOR: <a href="https://biomedirobotics.com/au-kwok-wai-samuel/">PROFESSOR AU, KWOK WAI SAMUEL</a>)</p>
          <p>Mechanical Design Group: Group Leader</p>
        </div>
      </header>
      <div className="project_content">
        <h3>Introduction:</h3>
        <p>Our objective is to develop a teleoperated legged-manipulator robot system with replaceable instruments specifically designed for applications in hospitals and logistics warehouses. More project information can be found: <a href="https://biomedirobotics.com/career/">BMT group/Career</a></p>
        <h3>Robotic Design (Initial):</h3>
        <p>The instruments are placed at the top of the quadrupedal robot, and a specially designed gripper device enables the robot arm to grasp various instruments for manipulation.</p>
        <div><center><img width="40%" src={`${process.env.PUBLIC_URL}${'/images/projects/TeleRepInsDemo.svg'}`} alt="details" /></center></div>
        <h3>Replaceable Instrument Device Design and Experiments (Initial):</h3>
        <div><center><iframe width="40%" height="300px" src="https://www.youtube.com/embed/7YHnpSOZx6E" allow="autoplay; encrypted-media" allowfullscreen="true" title="video" /></center></div>
        <h3>Teleoperation Master System Building:</h3>
        <div><center><img width="60%" src={`${process.env.PUBLIC_URL}${'/images/projects/TeleRepInsMaster.svg'}`} alt="details" /></center></div>
        <h3>Reference:</h3>
        <div><span>[1] A. SaLoutos, E. Stanger-Jones, and S. Kim, “Fast Reflexive Grasping with a Proprioceptive Teleoperation Platform,” IROS, 2022.</span></div>
      </div>
    </article>
  </Main>
);

export default TeleRepIns;
