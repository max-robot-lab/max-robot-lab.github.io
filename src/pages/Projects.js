import React from 'react';
// import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/project_details';

const Projects = () => (
  <Main
    title="Design Projects"
    description="Learn about Jiajun An's projects."
    fullPage="true"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>Design Projects</h2>
          <p>A selection of my design projects</p>
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

export default Projects;
