import React from 'react';

import Main from '../../layouts/Main';

const ActiveLegRSR = () => (
  <Main
    title="Projects"
    description="Learn about Jiajun An's projects."
    fullPage="true"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>Design and Experimental Verification of a 6-DoF Tailed Monopod Robot with a 3-DoF Active Leg</h2>
          <p>Focused duration: Jan 2020 - Jul 2020</p>
          <p>PROJECT TYPE: LAB PROJECT (SUPERVISOR: <a href="https://biomedirobotics.com/au-kwok-wai-samuel/">PROFESSOR AU, KWOK WAI SAMUEL)</a></p>
        </div>
      </header>
      <div className="project_content">
        <h3>Introduction:</h3>
        <p>I propose a 6-DoF tailed monopod robot by integrating a 3-DoF omni-directional leg with our 3-DoF morphable inertial tail. The goal is to construct a highly agile robot capable of executing more agile behaviors. The 3-DoF omni-directional leg design is based on 3-RSR spatial parallel leg mechanism [1].</p>
        <p>In my design, I have optimized the spherical joint sequence to address the singularity issue and have also incorporated springs to enhance the output performance of the leg.</p>
        <p>The project was subsequently undertaken by another M.Phil student in our group, who integrated our 3-DoF omni-directional leg with drone propellers to achieve impressive 3D hopping and amazing double flip motions (to be published).</p>
        <div><center><img width="80%" src={`${process.env.PUBLIC_URL}${'/images/projects/ActiveLegRSRDetails.svg'}`} alt="details" /></center></div>
        <h3>Experiments:</h3>
        <p>Here, I present the initial results of our initial jumping experiments. We have also conducted more recent experiments involving 3D hopping and double flip motions, which are currently awaiting publication.</p>
        <div><center><iframe width="25%" height="300px" src="https://www.youtube.com/embed/yQmaIZdhOag" allow="autoplay; encrypted-media" allowfullscreen="true" title="video" /></center></div>
        <h3>Reference:</h3>
        <div><span>[1] S. Kalouche, “GOAT: A legged robot with 3D agility and virtual compliance,” IROS, 2017.</span></div>
      </div>
    </article>
  </Main>
);

export default ActiveLegRSR;
