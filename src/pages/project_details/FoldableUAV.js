import React from 'react';

import Main from '../../layouts/Main';

const FoldableUAV = () => (
  <Main
    title="Projects"
    description="Learn about Jiajun An's projects."
    fullPage="true"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>Design of Foldable Four-rotor Unmanned Aerial Vehicles (UAV)</h2>
          <p>Focused duration: Apr 2015 - Aug 2015</p>
          <p>PROJECT TYPE: COURSE PROJECT (SUPERVISOR: PROFESSOR ZHAO, Xinming)</p>
          <p>Group: Group Leader, 5 people</p>
        </div>
      </header>
      <div className="project_content">
        <h3>Introduction:</h3>
        <p>In this project, I lead our group to develop foldable models of four-rotor UAVs and design their internal mechanisms for structural coordination and synchronization. I am the project group leader.</p>
        <div><center><img width="80%" src={`${process.env.PUBLIC_URL}${'/images/projects/FoldableUAVDetails.svg'}`} alt="details" /></center></div>
      </div>
    </article>
  </Main>
);

export default FoldableUAV;
