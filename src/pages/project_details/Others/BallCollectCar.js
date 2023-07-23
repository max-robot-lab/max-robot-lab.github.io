import React from 'react';

import Main from '../../../layouts/Main';

const BallCollectCar = () => (
  <Main
    title="Projects"
    description="Learn about Jiajun An's projects."
    fullPage="true"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>Purdue Mechatronics Robot Competition 2017</h2>
          <p>Focused duration: Jan 2017 - May 2017</p>
          <p>PROJECT TYPE: Course Project (I was responsible for the entire robot mechanical design, hardware assembly, and testing (5 people team))</p>
        </div>
      </header>
      <div className="project_content">
        <h3>Introduction:</h3>
        <p>In this project, the robot starts from a container, navigates around obstacles, collects three yellow balls, and then returns to the container with closing the door. We utilized the CMU PixyCam to identify the positions of the balls and obstacles.</p>
        <p>Our team achieved the 2nd place out of 10 competing teams in the competition.</p>
        <div><center><img width="70%" src={`${process.env.PUBLIC_URL}${'/images/projects/Others/BallCollectCar_details.svg'}`} alt="details" /></center></div>
      </div>
    </article>
  </Main>
);

export default BallCollectCar;
