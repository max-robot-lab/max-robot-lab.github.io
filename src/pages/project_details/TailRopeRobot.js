import React from 'react';

import Main from '../../layouts/Main';

const TailRopeRobot = () => (
  <Main
    title="Projects"
    description="Learn about Jiajun An's projects."
    fullPage="true"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>Design of a Tailed Quadruped Robot for Walking on Pipes and Ropes</h2>
          <p>Focused duration: Jun 2021 - Aug 2021</p>
          <p>PROJECT TYPE: Personal Proposed PROJECT</p>
        </div>
      </header>
      <div className="project_content">
        <h3>Introduction:</h3>
        <p>Inspired by the agile movements of rodents traversing ropes and pipes, I propose this project to explore the application of a 3-DoF morphable inertial tail to assist quadruped robots in achieving challenging walking movements on pipes and ropes. The whole robot design incorporates both legs and a 3-DoF morphable inertial tail. The leg movements are controlled by two actuators: one actuator generates the leg&apos;s walking cyclic motion, while another actuator regulates the leg abduction/adduction angle.</p>
        <p>The utilization of the tail includes three main aspects: (1) Balance; (2) Adjustment of walking directions; (3) Multiple adjustment capabilities enabled by the telescopic tail (In situations where the tail has limited remaining stroke or has reached the limit of its range of motion, the tail can retract to a small length and reposition to a pose that can provide more stroke in the desired swing direction).</p>
        <p>The target motions of this robot include: (1) Walking on plain ground; (2) Walking on pipes or even ropes; (3) Walking between two pipes, walking over a hole, and moving within confined pipes.</p>
        <div><center><img width="65%" src={`${process.env.PUBLIC_URL}${'/images/projects/TailRopeRobot_Details.svg'}`} alt="details" /></center></div>
      </div>
    </article>
  </Main>
);

export default TailRopeRobot;
