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
      <header>
        <div className="title">
          <h2><Link to="/">News</Link></h2>
          {/* <p>
             Design innovations push the upper bound of robot performance.
           </p> */}
        </div>
      </header>
      <ul>
        <li>
          <div className="post-item">
            Max Lab Officially Launches!
            <span className="post-date">2025-05-08</span>
          </div>
        </li>
      </ul>
      <header className="projects-header">
        <div className="title">
          <h2>Directions</h2>
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
    <article className="post" id="join">
      <header>
        <div className="title">
          <h2><Link to="/">Join Us!</Link></h2>
          {/* <p>
             Design innovations push the upper bound of robot performance.
           </p> */}
        </div>
      </header>
      <ul>
        <li>
          <div className="post-item">
            <h3 className="post-title">We are Recruiting New Lab Members!</h3>
            <span className="post-date">2025-05-08</span>
          </div>

          <ul className="recruit-list">
            <li>博士后研究员 | Postdoctoral Researcher: 机器人机电结构创新与轻量化复合材料设计</li>
            <li>机械工程师 | Mechanical Engineer: 机器人结构设计与机械系统集成</li>
            <li>高级算法工程师 | Senior Algorithm Engineer: SLAM、多传感器融合及实时避障与地图构建</li>
            <li>控制仿真工程师 | Control &amp; Simulation Engineer: 模型预测控制 (MPC) 与强化学习驱动的运动控制</li>
            <li>研究助理/硕士生 | Research Assistant / Master’s Student: 系统集成、硬件测试与数据分析</li>
            <li>实习学生 | Internship Student: 实验室日常研究支持、原型搭建与测试</li>
          </ul>

          <div className="post-footer">
            <p> Send your CV &amp; cover letter to <a href="mailto:max6@sustech.edu.cn">max6@sustech.edu.cn</a></p>
            <p>MAX Lab (Multi-modal Autonomous robot eXploration Lab) — 隶属于机器人研究所</p>
          </div>
        </li>
      </ul>
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
