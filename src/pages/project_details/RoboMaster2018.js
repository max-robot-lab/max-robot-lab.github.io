import React from 'react';

import Main from '../../layouts/Main';

const RoboMaster2018 = () => (
  <Main
    title="Projects"
    description="Learn about Jiajun An's projects."
    fullPage="true"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>Design of a Engineer Robot for RoboMaster Robotics Competition 2018</h2>
          <p>Focused duration: Feb 2018 - May 2018</p>
          <p>PROJECT TYPE: Competition Project (I am in charge of the Engineer Robot Design)</p>
        </div>
      </header>
      <div className="project_content">
        <h3>Introduction:</h3>
        <p>RoboMaster is one of the world&apos;s most advanced robotics competition that combines innovative engineering, gaming and entertainment into one action-packed spectator event.  This annual competition was designed for teams of aspiring engineers to build next-generation robots and compete for intellectual supremacy. Each team has six different types of robots including the Standard Robot, Sentry, Hero, Aerial, Engineer and Supplier, that coordinate with each other on an obstacle-filled battleground to take out the opponent&apos;s base. For more information, visit <a href="https://www.robomaster.com/en-US">https://www.robomaster.com/en-US</a>.</p>
        <p>The Engineer robot has the task of landing on resource islands that have stairs, using a sophisticated grasping mechanism to securely grip ammunition boxes, and efficiently replenishing ammunition. Once replenished, the Engineer robot then transfers the ammunition to other robots in need.</p>
        <p>In this design, I have incorporated a grasping structure for the Engineer robot to securely grip ammunition boxes. Additionally, I have implemented a unique structure using large bicycle wheels to facilitate the robot&apos;s ability to climb stairs.</p>
        <div><center><img width="80%" src={`${process.env.PUBLIC_URL}${'/images/projects/RoboMaster2018_details.svg'}`} alt="details" /></center></div>
      </div>
    </article>
  </Main>
);

export default RoboMaster2018;
