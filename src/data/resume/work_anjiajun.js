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
    name: 'Postdoctoral Researcher',
    position: 'Ph.D.',
    startDate: 'May 2024 - Apr 2025',
    summary: `Agriculture and Biological Engineering (Rank No. 1 US. News), Purdue University, 
    USA.`,
    highlights: [

    ],
  },
  {
    name: 'Postdoctoral Researcher',
    position: 'Ph.D.',
    startDate: 'Aug 2023 - May 2024',
    summary: `Mechanical and Automation Engineering, The Chinese University of Hong Kong, Hong Kong, 
    China.`,
    highlights: [

    ],
  },
  {
    name: 'Postdoctoral Fellow',
    position: 'Ph.D.',
    startDate: 'Aug 2023 - May 2024',
    summary: `Multi-Scale Medical Robotics Center, Hong Kong, 
    China.`,
    highlights: [

    ],
  },
];

export default work;
