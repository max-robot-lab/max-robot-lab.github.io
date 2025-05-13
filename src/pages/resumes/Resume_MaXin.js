import React from 'react';
// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Main from '../../layouts/Main';

import Education from '../../components/Resume/Education';
import Experience from '../../components/Resume/Experience';
import Others from '../../components/Resume/Others';
// import Skills from '../../components/Resume/Skills';
// import Courses from '../../components/Resume/Courses';
// import References from '../../components/Resume/References';

// import courses from '../../data/resume/courses';
import degrees from '../../data/resume/degree_maxin';
import work from '../../data/resume/work_maxin';
import others from '../../data/resume/others_maxin';
// import { skills, categories } from '../../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Others: () => <Others data={others} />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Xin Ma's Degrees."
  >
    <Helmet>
      <meta charSet="utf-8" />
      <title>People</title>
      <meta name="description" content={111} />
    </Helmet>
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>Prof. Xin Ma (马鑫教授)</h2>
          <h3>Assistant Professor, Lab Lead</h3>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
