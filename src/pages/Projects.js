import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import { Helmet } from 'react-helmet-async';

import Main from '../layouts/Main';

const Projects = () => {
  const [markdown, setMarkdown] = useState('');

  /* useEffect(() => {
    import('../data/about.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  }); */

  useEffect(() => {
    import('../data/projects.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  }, []);

  /* const count = markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length; */

  return (
    <Main
      title="Awards"
      description="Lab Info"
    >
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>主持项目/Funding</h2>
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    </Main>
  );
};

export default Projects;

/* import React from 'react';
// import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/project_details';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about MAX Lab's projects."
    fullPage="true"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>Projects</h2>
          {/* <p>A selection of my design projects</p>
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

export default Projects; */
