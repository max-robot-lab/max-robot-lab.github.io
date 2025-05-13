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
    name: 'Research Fellow',
    position: 'Ph.D.',
    startDate: 'Apr 2025 - May 2025',
    summary: `Prof. Atsuo Takanishi Laboratory, Waseda University, 
    Japan.`,
    highlights: [

    ],
  },
  {
    name: 'Joint Research Fellow',
    position: 'Ph.D.',
    startDate: 'May 2022 - Mar 2025',
    summary: `Faculty of Science and Technology, Sophia University, 
    Japan.`,
    highlights: [

    ],
  },
  {
    name: 'Teaching Assistant',
    position: 'Ph.D.',
    startDate: 'Sep 2018 - Jun 2019',
    summary: `School of Creative Science and Engineerin, Waseda University, 
    Japan.`,
    highlights: [

    ],
  },
];

export default work;
