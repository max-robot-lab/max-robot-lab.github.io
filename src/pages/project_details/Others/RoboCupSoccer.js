import React from 'react';

import Main from '../../../layouts/Main';

const RoboCupSoccer = () => (
  <Main
    title="Projects"
    description="Learn about Jiajun An's projects."
    fullPage="true"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>The RoboCup China Open 2014</h2>
          <p>Focused duration: Mar 2014 - Aug 2014</p>
          <p>PROJECT TYPE: Competition Project (6 people team)</p>
        </div>
      </header>
      <div className="project_content">
        <h3>Introduction:</h3>
        <p>In this competition, teams control 5 Nao robots to cooperate with each other, performing as forward, linebacker, goalkeeper respectively, to conduct a 5v5 robot football game. The main work included robot visual processing, trajectory planning, motion control and cooperation strategies.</p>
        <p>Our team achieved the 2nd place out of 10 competing teams (6 people team).</p>
        <div><center><img width="80%" src={`${process.env.PUBLIC_URL}${'/images/projects/Others/RoboCupSoccer_Details.svg'}`} alt="details" /></center></div>
      </div>
    </article>
  </Main>
);

export default RoboCupSoccer;
