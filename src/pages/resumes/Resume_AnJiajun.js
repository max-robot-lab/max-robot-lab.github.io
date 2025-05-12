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
import degrees from '../../data/resume/degree_anjiajun';
import work from '../../data/resume/work_anjiajun';
// import { skills, categories } from '../../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Experience: () => <Experience data={work} />,
  Education: () => <Education data={degrees} />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Jiajun An's Degrees."
  >
    <Helmet>
      <meta charSet="utf-8" />
      <title>People</title>
      <meta name="description" content={111} />
    </Helmet>
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>Dr. Jiajun An (安嘉珺博士)</h2>
          <h3>Postdoctoral Researcher</h3>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
