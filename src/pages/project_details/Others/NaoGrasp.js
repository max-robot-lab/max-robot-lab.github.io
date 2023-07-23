import React from 'react';

import Main from '../../../layouts/Main';

const NaoGrasp = () => (
  <Main
    title="Projects"
    description="Learn about Jiajun An's projects."
    fullPage="true"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>The NAO Robot Online Programming Contest 2014</h2>
          <p>Focused duration: Oct 2013 - Feb 2014</p>
          <p>PROJECT TYPE: Competition Project (3 people team)</p>
        </div>
      </header>
      <div className="project_content">
        <h3>Introduction:</h3>
        <p>In the competition, teams programme the strategies and motion trajectories for NAO robot to realize automatically cleaning specified trashes that are mimicked by various two-colored cylinders in a certain area.</p>
        <p>Our team achieved the gold award (3 people team).</p>
        <div><center><iframe width="40%" height="300px" src="https://www.youtube.com/embed/HoLDmJX6dCY" allow="autoplay; encrypted-media" allowfullscreen="true" title="video" /></center></div>
      </div>
    </article>
  </Main>
);

export default NaoGrasp;
