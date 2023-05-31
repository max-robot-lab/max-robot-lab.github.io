/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Towards Agile Maneuver for Terrestrial Robots with Spatial Morphable Inertial Appendage',
    position: 'Ph.D.',
    url: '/Porjects/RoboticTail',
    startDate: 'Sep 2018 - Jan 2023',
    summary: `Project Description: My Ph.D. thesis project, the objective is to propose novel spatial morphable inertial tail designs with
    enhanced inertial adjustment capability in three-dimension (3D) space and investigate its capability in assisting agile
    maneuvers for terrestrial robots. (Supervisor: Prof. AU Kwok Wai Samuel, CUHK)`,
    highlights: [

    ],
  },
  {
    name: 'A Novel 3-DoF Large Force Haptic Device for the Wrist Motion',
    position: 'Ph.D.',
    url: '/Porjects/HapticWrist',
    startDate: 'Sep 2018 - Jan 2023',
    summary: `Project Description: Personal proposed project, the objective is to design a haptic device capable of providing large output
    forces, low inertia, high force transparency, high stiffness, and a large range of motion. The project targets potential
    applications in VR devices, teleoperation masters, and exoskeletons. (CUHK)`,
    highlights: [

    ],
  },
  {
    name: 'Teleoperated Legged-Manipulator with Replaceable Instruments',
    position: 'Ph.D.',
    url: '/Porjects/TeleRepIns',
    startDate: 'Jan 2023 - Until Now',
    summary: `Project Description: Lab project, we aim at developing a teleoperated legged-manipulator robot system with replaceable
    instruments for the application in hospitals and logistics warehouses. Now I am the mechanical design group leader.
    (Supervisor: Prof. AU Kwok Wai Samuel, CUHK)`,
    highlights: [

    ],
  },
  {
    name: 'Humanoid Leg Design Based on Parallel Mechanism',
    position: 'Ph.D.',
    url: '/Porjects/HumanoidLeg',
    startDate: 'Oct 2019 - Until Now',
    summary: `Project Description: Personal proposed project, the objective is to enhance the performance of humanoid leg joints using
    parallel mechanisms. In the latest design, I propose the utilization of three motors in the hip joint of the leg to collectively
    drive the hip pitch movement. (CUHK)`,
    highlights: [

    ],
  },
  {
    name: 'Design of a Humanoid Dexterous robot hand',
    position: 'Ph.D.',
    url: '/Porjects/DexterousHand',
    startDate: 'Jun 2017 - Aug 2017',
    summary: `Project Description: Lab project, the objective is to develop an innovative drive-by-wire approach for humanoid robot
    finger design, while simultaneously increasing the degree of freedom (DoF) of the robot hand from 13 to 22. Additionally, 
    we aim to integrate new angle sensors, haptic sensors, and temperature sensors into the design of the robot hand. 
    (Supervisor: Prof. Fuchun Sun, IEEE Fellow, Tsinghua University)`,
    highlights: [

    ],
  },
  {
    name: 'A Human-Robot Interactive System Based on Hand Gesture Recognition',
    position: 'Ph.D.',
    startDate: 'Jan 2017 - May 2017',
    summary: `Project Description: Lab project, the objective is to establish a mutual interactive function between a computer camera and 
    a robotic hand. This system aims to achieve real-time recognition (within 0.05 seconds) of hand gestures, specifically Rock,  
    Scissors, and Paper. I am the project group leader. (Supervisor: Liang Gong, SJTU)`,
    highlights: [

    ],
  },
  {
    name: 'Design of Foldable Four-rotor Unmanned Aerial Vehicles (UAV)',
    position: 'Ph.D.',
    url: '/Porjects/FoldableUAV',
    startDate: 'Apr 2015 - Aug 2015',
    summary: `Project Description: Course project, the objective is to develop foldable models of four-rotor UAVs and design their  
    internal mechanisms for structural coordination and synchronization. I am the project group leader. (Supervisor: Xinming   
    Zhao, SJTU)`,
    highlights: [

    ],
  },
  {
    name: 'Object Recognition and Intelligent Grasping Based on NAO Robot Vision',
    position: 'Ph.D.',
    startDate: 'Feb 2014 - Jul 2014',
    summary: `Project Description: Lab project, the objective is to program the route planning and grasping motion trajectory planning  
    strategies for the NAO robot. I am the project group leader. (Supervisor: Chuntao Leng, SJTU)`,
    highlights: [

    ],
  },
];

export default work;
