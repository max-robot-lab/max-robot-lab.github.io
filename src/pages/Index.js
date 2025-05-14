import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import Cell from '../components/Projects/Cell';
// import data from '../data/projects';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Index = () => (
  <Main
    description={"Max Lab's website. "}
  >
    <article className="post" id="index">
      <div className="title">
        <p className="intromaxin">
          马鑫，分别于 2011 年与 2017 年在大连理工大学机械工程学院获得学士与博士学位，师从大连理工大学校长贾振元院士。2017 年 10 月至 2021 年 3 月在香港中文大学、新加坡南洋理工大学以及美国普渡大学进行三年博士后研究工作，美国普渡大学博士后研究期间师从 Richard M. Voyles 教授(IEEE Fellow)。2021 年 4 月至2025年4月在香港中文大学机械与自动化工程系担任研究助理教授。2025年至今，在南方科技大学助理教授。
        </p>
        <p className="intromaxin">
          Xin Ma received his Bachelor’s and Ph.D. degrees from the School of Mechanical Engineering at Dalian University of Technology in 2011 and 2017, respectively, under the supervision of Academician Zhenyuan Jia (President of Dalian University of Technology). From October 2017 to March 2021, he conducted postdoctoral research at The Chinese University of Hong Kong, Nanyang Technological University, and Purdue University, working under Professor Richard M. Voyles (IEEE Fellow) during his time at Purdue. From April 2021 to April 2025, he served as a Research Assistant Professor in the Department of Mechanical and Automation Engineering at The Chinese University of Hong Kong. Since 2025, he has been an Assistant Professor at Southern University of Science and Technology.
        </p>
      </div>
      <header>
        <div className="title">
          <h2><Link to="/">新闻/News</Link></h2>
          {/* <p>
             Design innovations push the upper bound of robot performance.
           </p> */}
        </div>
      </header>
      <ul>
        <li>
          <div className="post-item">
            <Link to="/contact"><strong>欢迎加入我们！| Welcome to join us!</strong></Link>
            <span className="post-date">2025-05-13</span>
          </div>
        </li>
        <li>
          <div className="post-item">
            Paper Accepted by IEEE T-RO: “On the Fully Decoupled Rigid-Body Dynamics Identification of Serial Industrial Robots”
            <span className="post-date">2025-05-11</span>
          </div>
        </li>
        <li>
          <div className="post-item">
            Paper Accepted by IEEE T-MECH: “A Dexterity and Exploration Enhanced Quadruped Robot with a Multi-Functional Retractable Variable-Stiffness Manipulator”
            <span className="post-date">2025-05-10</span>
          </div>
        </li>
        <li>
          <div className="post-item">
            Max Lab Officially Launches!
            <span className="post-date">2025-05-08</span>
          </div>
        </li>
      </ul>
      <header className="projects-header">
        <div className="title">
          <h2>研究方向/Research Directions</h2>
          {/* <p>A selection of my design projects</p> */}
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
      {/* {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))} */}
    </article>
  </Main>
);

export default Index;
