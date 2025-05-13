import React from 'react';
import { Link } from 'react-router-dom';

// import ContactIcons from '../Contact/ContactIcons';
import { Helmet } from 'react-helmet-async';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const People = () => (
  <Main
    title="About"
    description="Lab Info"
  >
    <Helmet>
      <meta charSet="utf-8" />
      <title>People</title>
      <meta name="description" content={111} />
    </Helmet>
    <section id="people">
      <section className="intro">
        <Link to="/resume_maxin" className="logo">
          <img src={`${PUBLIC_URL}/images/maxin.png`} alt="" />
        </Link>
        <header>
          <h2>Xin Ma (马鑫)</h2>
          <h3>Assistant Professor, Lab Lead</h3>
        </header>
        <ul className="actions">
          <li>
            {!window.location.pathname.includes('/resume_maxin') ? (
              <Link to="/resume_maxin" className="button">
                Learn More
              </Link>
            ) : (
              <Link to="/resume_maxin" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>
      <section className="intro">
        <Link to="/resume_anjiajun" className="logo">
          <img src={`${PUBLIC_URL}/images/anjiajun.png`} alt="" />
        </Link>
        <header>
          <h2>Jiajun An (安嘉珺)</h2>
          <h3>PostDoctoral Researcher</h3>
        </header>
        <ul className="actions">
          <li>
            {!window.location.pathname.includes('/resume_anjiajun') ? (
              <Link to="/resume_anjiajun" className="button">
                Learn More
              </Link>
            ) : (
              <Link to="/resume_anjiajun" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>
      <section className="intro">
        <Link to="/resume_wangdaifeng" className="logo">
          <img src={`${PUBLIC_URL}/images/WangDaifeng2.png`} alt="" />
        </Link>
        <header>
          <h2>Daifeng Wang (王戴丰)</h2>
          <h3>PostDoctoral Researcher</h3>
        </header>
        <ul className="actions">
          <li>
            {!window.location.pathname.includes('/resume_wangdaifeng') ? (
              <Link to="/resume_wangdaifeng" className="button">
                Learn More
              </Link>
            ) : (
              <Link to="/resume_wangdaifeng" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>
      <section className="intro">
        <Link to="/resume_zhupuchen" className="logo">
          <img src={`${PUBLIC_URL}/images/zhupuchen.png`} alt="" />
        </Link>
        <header>
          <h2>Puchen Zhu (朱谱辰)</h2>
          <h3>Ph.D. Candidate</h3>
        </header>
        <ul className="actions">
          <li>
            {!window.location.pathname.includes('/resume_zhupuchen') ? (
              <Link to="/resume_zhupuchen" className="button">
                Learn More
              </Link>
            ) : (
              <Link to="/resume_zhupuchen" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>
      <section className="intro">
        <Link to="/resume_pengming" className="logo">
          <img src={`${PUBLIC_URL}/images/PengMing.jpg`} alt="" />
        </Link>
        <header>
          <h2>Ming Peng (彭名)</h2>
          <h3>Research Assistant</h3>
        </header>
        <ul className="actions">
          <li>
            {!window.location.pathname.includes('/resume_pengming') ? (
              <Link to="/resume_pengming" className="button">
                Learn More
              </Link>
            ) : (
              <Link to="/resume_pengming" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>
      <section className="intro">
        <Link to="/resume_laiwenkai" className="logo">
          <img src={`${PUBLIC_URL}/images/LaiWenkai.jpg`} alt="" />
        </Link>
        <header>
          <h2>Kaiwen Lai (赖文凯)</h2>
          <h3>Research Assistant</h3>
        </header>
        <ul className="actions">
          <li>
            {!window.location.pathname.includes('/resume_laiwenkai') ? (
              <Link to="/resume_laiwenkai" className="button">
                Learn More
              </Link>
            ) : (
              <Link to="/resume_laiwenkai" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>
      <section className="intro">
        <Link to="/resume_huangzhanpeng" className="logo">
          <img src={`${PUBLIC_URL}/images/HuangZhanpeng.jpg`} alt="" />
        </Link>
        <header>
          <h2>Zhanpeng Huang (黄展鹏)</h2>
          <h3>Research Assistant</h3>
        </header>
        <ul className="actions">
          <li>
            {!window.location.pathname.includes('/resume_huangzhanpeng') ? (
              <Link to="/resume_huangzhanpeng" className="button">
                Learn More
              </Link>
            ) : (
              <Link to="/resume_huangzhanpeng" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>
      {/* <section className="blurb">
        <h2>About</h2>
        <p>
          Hi, I&apos;m Jiajun An (Danny), a Ph.D. graduate from the{' '}
          <a href="https://biomedirobotics.com/">BMT group</a> at the MAE Department,{' '}
          <a href="https://en.wikipedia.org/wiki/Chinese_University_of_Hong_Kong">
            The Chinese University of Hong Kong
          </a>
          , under the supervision of{' '}
          <a href="https://www4.mae.cuhk.edu.hk/peoples/au-kwok-wai-samuel/">
            Prof. Kwok Wai Samuel Au
          </a>
          . Previously, I earned my M.Sc. degree from{' '}
          <a href="https://en.wikipedia.org/wiki/Purdue_University">Purdue University</a>{' '}
          in USA and my B.E. degree from{' '}
          <a href="https://en.wikipedia.org/wiki/Shanghai_Jiao_Tong_University">
            Shanghai Jiao Tong University
          </a>{' '}
          in China.
        </p>
        <p>
          I am a roboticist with my focus on legged robots and teleoperation robots.
        </p>
        <ul className="actions">
          <li>
            {!window.location.pathname.includes('/resume') ? (
              <Link to="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link to="/resume" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section> */}
    </section>
    {/* <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2>Lab Information</h2>
        </div>
      </header>
    </article> */}
  </Main>
);

export default People;
