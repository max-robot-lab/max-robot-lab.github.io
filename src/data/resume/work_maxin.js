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
    name: 'Research Assistant Professor',
    position: 'Ph.D.',
    startDate: 'Dec 2021 - Apr 2025',
    summary: `Mechanical and Automation Engineering department, The Chinese University of Hong Kong, 
    Hong Kong, China.`,
    highlights: [

    ],
  },
  {
    name: 'Research Scientist',
    position: 'Ph.D.',
    startDate: 'Dec 2021 - Apr 2025',
    summary: `Medical Robotics Center, Chinese University of Hong Kong, Hong Kong, 
    China.`,
    highlights: [

    ],
  },
  {
    name: 'Postdoctoral Researcher',
    position: 'Ph.D.',
    startDate: 'Oct 2019 - Apr 2021',
    summary: `School of Engineering Technology, Purdue University, USA. 
    (Supervisor: Richard Voyles, IEEE Fellow)`,
    highlights: [

    ],
  },
  {
    name: 'Research Fellow',
    position: 'Ph.D.',
    startDate: 'Jun 2019 - Oct 2019',
    summary: `Nanyang Technological University, 
    Singapore.`,
    highlights: [

    ],
  },
  {
    name: 'Postdoctoral Fellow',
    position: 'Ph.D.',
    startDate: 'Aug 2017 - Jun 2019',
    summary: `Surgery Department, Chinese University of Hong Kong, Hong Kong, 
    China.`,
    highlights: [

    ],
  },
];

export default work;
