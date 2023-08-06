import React from 'react';

import Main from '../../../layouts/Main';

const FreeScaleCar = () => (
  <Main
    title="Projects"
    description="Learn about Jiajun An's projects."
    fullPage="true"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>The Freescale Cup National Smart Car Competition 2015</h2>
          <p>Focused duration: Mar 2015 - Aug 2015</p>
          <p>PROJECT TYPE: Competition Project (3 people team)</p>
        </div>
      </header>
      <div className="project_content">
        <h3>Introduction:</h3>
        <p>In this competition, teams build a self-driving two-wheeled smart car to recognize and navigate the designated track. The fastest car that stays on the track and receives a high technical report score will be the winner.</p>
        <p>Our team won the first prize (3 people team).</p>
        <div><center><img width="55%" src={`${process.env.PUBLIC_URL}${'/images/projects/Others/FreeScaleCar_Details.svg'}`} alt="details" /></center></div>
      </div>
    </article>
  </Main>
);

export default FreeScaleCar;
