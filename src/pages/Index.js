import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Index = () => (
  <Main
    description={"Jiajun An's personal website. "}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Design Experiences (Selected)</Link></h2>
          <p>
            Design innovations push the upper bound of robot performance.
          </p>
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

export default Index;
