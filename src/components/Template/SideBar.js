import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Jiajun An (Danny)</h2>
        <ContactIcons />
        <h3>The platformization of robotics is ushering in a new era.</h3>
      </header>
    </section>
    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Jiajun An (Danny), a Ph.D. graduate from the <a href="https://biomedirobotics.com/">BMT group</a> at the MAE Department, <a href="https://en.wikipedia.org/wiki/Chinese_University_of_Hong_Kong">The Chinese University of Hong Kong</a>, under the supervision of <a href="https://www4.mae.cuhk.edu.hk/peoples/au-kwok-wai-samuel/">Prof. AU Kwok Wai Samuel</a>. Previously, I earned my M.Sc. degree from <a href="https://en.wikipedia.org/wiki/Purdue_University">Purdue University</a> in USA and my B.E. degree from <a href="https://en.wikipedia.org/wiki/Shanghai_Jiao_Tong_University">Shanghai Jiao Tong University</a> in China.</p>
      <p>I am a roboticist with my focus on mechanical design and hardware development.</p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/resume" className="button">About Me</Link>}
        </li>
      </ul>
    </section>
  </section>
);

export default SideBar;
