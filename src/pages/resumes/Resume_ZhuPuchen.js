import React from 'react';
// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Main from '../../layouts/Main';

import Education from '../../components/Resume/Education';
import Experience from '../../components/Resume/Experience';
// import Skills from '../../components/Resume/Skills';
// import Courses from '../../components/Resume/Courses';
// import References from '../../components/Resume/References';

// import courses from '../../data/resume/courses';
import degrees from '../../data/resume/degree_zhupuchen';
import work from '../../data/resume/work_zhupuchen';
// import { skills, categories } from '../../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Puchen Zhu's Degrees."
  >
    <Helmet>
      <meta charSet="utf-8" />
      <title>People</title>
      <meta name="description" content={111} />
    </Helmet>
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>Puchen Zhu (朱谱辰)</h2>
          <h3>Ph.D. Candidate</h3>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
