import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../../layouts/Main';

const HapticWrist = () => (
  <Main
    title="Projects"
    description="Learn about Jiajun An's projects."
    fullPage="true"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/projects">A novel 3-DoF Large Force Haptic Device for the Wrist Motion</Link></h2>
          <p>A selection of projects that I&apos;m not too ashamed of</p>
        </div>
      </header>
      <div className="project_content">sd</div>
    </article>
  </Main>
);

export default HapticWrist;
