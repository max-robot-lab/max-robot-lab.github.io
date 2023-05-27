import React from 'react';

import Main from '../../layouts/Main';

const HumanoidLeg = () => (
  <Main
    title="Projects"
    description="Learn about Jiajun An's projects."
    fullPage="true"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>Humanoid Leg Design Based on Parallel Mechanism</h2>
          <p>Focused duration: Jan 2023 - Until Now</p>
          <p>PROJECT TYPE: Personal Proposed PROJECT</p>
        </div>
      </header>
      <div className="project_content">
        <h3>Introduction:</h3>
        <p>There are three main design approaches currently being pursued to enhance the performance of humanoid robot legs: (1) Breakthroughs in joint motor performance: This involves seeking advancements in the capabilities and efficiency of the motors used in the leg joints. (e.g. <a href="https://www.youtube.com/watch?v=gTkupawAG6w">UCLA ARTEMIS</a> and <a href="https://biomimetics.mit.edu/">MIT Humanoid</a>) (2) Joint design with spring incorporation: By integrating springs into the joint design, it allows for improved energy efficiency, compliance, and shock absorption (e.g. <a href="https://robotsguide.com/robots/cassie/">Cassie</a>). (3) Utilizing parallel mechanisms: Implementing parallel mechanisms in the leg structure can provide increased strength, stability, and dexterity (e.g. <a href="https://www.youtube.com/watch?v=62lo04Up2vc">UIUC TELLO</a>). </p>
        <p>My objective is to enhance the performance of humanoid leg joints using parallel mechanisms. In the latest design, I propose the utilization of three motors in the hip joint of the leg to collectively drive the hip pitch movement.</p>
        <h3>Design Version 1:</h3>
        <p>This design emerged during my exploration of the 3-DoF robotic tail design. However, I later learned that coupling the design of the hip joint and knee joint can lead to mechanical antagonism [1].</p>
        <div className="other2"><img width="15%" src={`${process.env.PUBLIC_URL}${'/images/projects/HumanoidLegV1.svg'}`} alt="details" /><iframe width="20%" height="300px" src={`${process.env.PUBLIC_URL}${'/videos/LegDemo1.mp4'}`} allow="autoplay; encrypted-media" allowfullscreen="true" title="video" /><iframe width="20%" height="300px" src={`${process.env.PUBLIC_URL}${'/videos/LegDemo2.mp4'}`} allow="autoplay; encrypted-media" allowfullscreen="true" title="video" /><iframe width="20%" height="300px" src={`${process.env.PUBLIC_URL}${'/videos/LegDemo3.mp4'}`} allow="autoplay; encrypted-media" allowfullscreen="true" title="video" /></div>
        <h3>Design Version 2:</h3>
        <p>After gaining a deeper understanding of the spherical five-bar parallel mechanism, I have made the following 4-DoF leg design. In left side design, the motion sequence of the left hip joint is flexion/extension followed by abduction/adduction. Subsequently, I updated it to the new design on the right side: abduction/adduction followed by flexion/extension.</p>
        <p>For the transmission mechanism at the ankle joint, I experimented with an <a href="https://www.youtube.com/watch?v=2ItvM0IU6Xo">8-bar linkage rotation transmission mechanism</a>. It offers the advantage of smaller backlash compared to chain or gear transmissions.</p>
        <div><center><div><img width="25%" src={`${process.env.PUBLIC_URL}${'/images/projects/HumanoidLegV2.svg'}`} alt="details" /><img width="18%" src={`${process.env.PUBLIC_URL}${'/images/projects/HumanoidLegV2T2.svg'}`} alt="details" /></div></center></div>
        <h3>Design Version 3:</h3>
        <p>In the latest design, I further attempted to incorporate the yaw motion motor of the hip joint to enhance the performance of the hip pitch movement. </p>
        <div><center><img width="70%" src={`${process.env.PUBLIC_URL}${'/images/projects/HumanoidLegV3.svg'}`} alt="details" /></center></div>
        <h3>Reference:</h3>
        <div><span>[1] A. Abate, J. W. Hurst, and R. L. Hatton, “Mechanical Antagonism in Legged Robots.,” Robotics: Science and Systems, 2016.</span></div>
      </div>
    </article>
  </Main>
);

export default HumanoidLeg;
