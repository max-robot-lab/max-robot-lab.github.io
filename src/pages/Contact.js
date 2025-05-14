/* import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Michael D'Angelo via email @ hi@mldangelo.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>MAX Lab (Multi-modal Autonomous robot eXploration Lab) is part of the Institute of Robotics at the Southern University of Science and Technology. We focus on cutting-edge research and real-world deployment of robotic systems in three core areas: mechanical structure design, multi-sensor perception, and autonomous control. Our lab has developed prototype platforms for land, air, and underwater robots, driving performance to the MAX in complex environments.</p>
        <p>You can email me at: </p>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact; */
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import { Helmet } from 'react-helmet-async';

import Main from '../layouts/Main';

const Contact = () => {
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
    import('../data/contact.md')
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
      title="Contact"
      description="Lab Info"
    >
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <article className="post markdown" id="contact">
        <header>
          <div className="title">
            <h2>联系我们/Contact Us</h2>
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    </Main>
  );
};

export default Contact;
