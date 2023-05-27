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
          <p>PROJECT TYPE: Lab PROJECT</p>
          <p>Mechanical Design Group: Group Leader, 2 people</p>
        </div>
      </header>
      <div className="project_content">
        <h3>Introduction:</h3>
        <p>Our objective is to develop a teleoperated legged-manipulator robot system with replaceable instruments specifically designed for applications in hospitals and logistics warehouses. More project information can be found: <a href="https://biomedirobotics.com/career/">BMT group/Career</a></p>
        <h3>Robotic Arm Design (Initial):</h3>
        <p>My current robotic arm design solution is based on the reference of <a href="https://biomimetics.mit.edu//">MIT Biomimetic Robotic Lab&apos;s</a> Proprioceptive Manipulation Platform [1]. In this design, I have added an additional degree of freedom at the end effector.</p>
        <div><center><img width="40%" src={`${process.env.PUBLIC_URL}${'/images/projects/TeleRepIns.svg'}`} alt="details" /></center></div>
        <h3>Replaceable Instrument Device Design (Initial):</h3>
        <div><center><iframe width="40%" height="300px" src={`${process.env.PUBLIC_URL}${'/videos/TeleRepInsDemo1.mp4'}`} allow="autoplay; encrypted-media" allowfullscreen="true" title="video" /></center></div>
        <h3>Reference:</h3>
        <div><span>[1] A. SaLoutos, E. Stanger-Jones, and S. Kim, “Fast Reflexive Grasping with a Proprioceptive Teleoperation Platform,” IROS, 2022.</span></div>
      </div>
    </article>
  </Main>
);

export default TeleRepIns;
