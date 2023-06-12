import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/otherprojects';

const Otherprojects = () => (
  <Main
    title="Other Projects"
    description="Learn about Jiajun An's projects."
    fullPage="true"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/projects">Other Projects</Link></h2>
          <p>A selection of my other projects and contests</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Otherprojects;
