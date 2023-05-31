import React from 'react';
import Main from '../../layouts/Main';

const RoboticTail = () => (
  <Main
    title="Projects"
    description="Learn about Jiajun An's projects."
    fullPage="true"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>Towards Agile Maneuver for Terrestrial Robots with Spatial Morphable Inertial Appendage</h2>
          <p>Focused duration: Sep 2018 - Jan 2023</p>
          <p>Project Type: Ph.D. thesis project (Supervisor: <a href="https://biomedirobotics.com/au-kwok-wai-samuel/">Professor Au, Kwok Wai Samuel)</a></p>
        </div>
      </header>
      <div className="project_content">
        <h3>Introduction:</h3>
        <p>Terrestrial animals often use their external appendages (e.g., tails or limbs) to achieve spectacular maneuverability and various agile motions (such as a cat&apos;s mid-air reorientation before landing and a human gymnast&apos;s somersault), which cannot be easily realized in existing terrestrial robots. By observing the inertial adjustment capability embodied on animal appendages, researchers have been inspired to apply inertial adjustment mechanisms to terrestrial robotics to enhance their maneuverability. Particularly, researchers found that tails and tail-like appendage mechanisms are the optimal means of inertial adjustment for terrestrial robot applications. However, existing robotic tails&apos; inertial adjustment capability still lags far behind their biological counterparts, which limits the robots&apos; capability of achieving various agile behaviors.</p>
        <p>The objective of this thesis project is to propose novel spatial morphable inertial tail designs with enhanced inertial adjustment capability in three-dimension (3D) space and investigate its capability in assisting agile maneuvers for terrestrial robots. </p>
        <h3>3-DoF Morphable Inertial Tail Designs:</h3>
        <p>There should be considerations on the minimal number of active tail DoF&apos;s required to produce a spatial workspace with distributed motion about its tail length. Otherwise, the extra added mass of the actuators results in the decreasing of inertial adjustment capabilities and increasing burden for the terrestrial robots. To satisfy the tail motion requirements (pitch, yaw, and adjustable tail length), 3 should be the minimum and optimal DoF&apos;s number.</p>
        <div><center><img width="80%" src={`${process.env.PUBLIC_URL}${'/images/projects/RoboticTailVersionsRefine.svg'}`} alt="details" /></center></div>
        <li>Other considerred designs:</li>
        <div className="other1"><img width="55%" src={`${process.env.PUBLIC_URL}${'/images/projects/RoboticTailVersionsOther.svg'}`} alt="details" /></div>
        <h3>1-DoF Springy Underactuated Leg Designs:</h3>
        <p>The aim of the 1-DoF springy Underactuated leg designs is to investigate tail-energized hopping motion and efficiently store energy for somersault jumping.</p>
        <div><center><img width="60%" src={`${process.env.PUBLIC_URL}${'/images/projects/RoboticOneDoFLeg.svg'}`} alt="details" /></center></div>
        <h3>Tailed Robot Designs:</h3>
        <div>After optimizing the tail mass and length, we integrate the proposed tail designs into terrestrial robots and investigate how the tail spatial morphable inertial property can assist in agile maneuvers.</div>
        <div><center><img width="60%" src={`${process.env.PUBLIC_URL}${'/images/projects/RoboticTailOverall_Refine.svg'}`} alt="details" /></center></div>
        <li>Tail Energized Hopping:</li>
        <div className="videoContainer"><iframe width="40%" height="300px" src="https://www.youtube.com/embed/Xdk5LIovmog" allow="autoplay; encrypted-media" allowfullscreen="true" title="video" /><iframe width="40%" height="300px" src="https://www.youtube.com/embed/qjxhvkis9MY" allow="autoplay; encrypted-media" allowfullscreen="true" title="video" /></div>
        <li>3D Aerial Reorientation with a Safe Landing of a Quadruped Robot:</li>
        <div><center><iframe width="40%" height="300px" src="https://www.youtube.com/embed/9JWLTtbqiD8" allow="autoplay; encrypted-media" allowfullscreen="true" title="video" /></center></div>
        <li>Tail Assisted Somersault:</li>
        <div><center><iframe width="40%" height="300px" src="https://www.youtube.com/embed/cikngZnz7OA" allow="autoplay; encrypted-media" allowfullscreen="true" title="video" /></center></div>
        <h3>Publications:</h3>
        <div><span>[1] Y. Tang, J. An (co-first author), X. Chu, S. Wang, C. Y. Wong, and K. W. Samuel Au, “Towards Safe Landing of Falling Quadruped Robots Using a 3-DoF Morphable Inertial Tail,” ICRA, 2022.</span></div>
        <div><span>[2] J. An, X. Ma, C. H. David Lo, W. S. Ng, X. Chu, K. W. Samuel Au, “Design and Experimental Validation of a Monopod Robot with 3-DoF Morphable Inertial Tail for Somersault,” IEEE Transaction of Mechatronics, 2021.</span></div>
        <div><span>[3] J. An, T. Y. Chung, C. H. D. Lo, C. Ma, X. Chu and K. W. Samuel Au, “Development of a Bipedal Hopping Robot With Morphable Inertial Tail for Agile Locomotion,” BioRob, 2020.</span></div>
        <div><span>[4] “Morphable inertial appendage, systems and associated methods,” US Provisional Patent, US 62/810,258.</span></div>
      </div>
    </article>
  </Main>
);

export default RoboticTail;
