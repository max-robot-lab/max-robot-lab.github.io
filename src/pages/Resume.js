import React from 'react';
// import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// import Education from '../components/Resume/Education';
// import Experience from '../components/Resume/Experience';
// import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';

// import courses from '../data/resume/courses';
// import degrees from '../data/resume/degrees';
// import work from '../data/resume/work';
// import { skills, categories } from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  // Education: () => <Education data={degrees} />,
  // Experience: () => <Experience data={work} />,
  // Skills: () => <Skills skills={skills} categories={categories} />,
  // Courses: () => <Courses data={courses} />,
  // References: () => <References />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Jiajun An's Resume. "
    fullPage="true"
  >
    <article className="post" id="resume">
      {/* <header>
        <div className="title">
          <h2><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header> */}
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
      <object data="/images/CV_T2_ICRA_V2.pdf" type="application/pdf" width="100%" height="1200px">
        <p height="600px">Alternative text - include a link <a href="/images/CV_Jiajun_An_2pages.pdf">to the PDF!</a></p>
      </object>
    </article>
  </Main>
);

export default Resume;
