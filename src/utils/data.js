import images from './images'

const menu = [
  {
    id: 1,
    title: 'StyleSpark',
    category: 'react',
    url: 'https://style-spark.vercel.app/',
    source: 'https://github.com/muhammedrepo/kalle',
    tags: ['Mern-stack', 'Typescript', 'TailwindCSS'],
    img: `${images.p13}`,
    desc: `E-commerce app`,
  },
  {
    id: 2,
    title: 'Realtor',
    category: 'Next',
    url: 'https://realtor-muhammedtijani.vercel.app/',
    source: 'https://github.com/muhammedtijani/realtor',
    tags: ['NextJS', 'ChakraUI'],
    img: `${images.p2}`,
    desc: `Real estate app`,
  },
  {
    id: 3,
    title: 'Job Tracker',
    category: 'react',
    url: 'https://mern-job-app-v2.onrender.com',
    source: 'https://github.com/muhammedrepo/mern-job-app-v2',
    tags: ['Mern-stack', 'styled component'],
    img: `${images.p11}`,
    desc: 'Job tracker app',
  },
  {
    id: 4,
    title: 'Monst Clone',
    category: 'Typescript',
    url: 'https://monst-clone.muhammedtijani.com/',
    source: 'https://github.com/coolzyte/monst',
    tags: ['React', 'Tailwind', 'Typescript'],
    img: `${images.p21}`,
    desc: 'Full multipurpose website',
  },

  {
    id: 5,
    title: 'Elyssi E-commerce',
    category: 'react',
    url: 'https://elyssi.vercel.app/',
    source: 'https://github.com/muhammedrepo/elyssi',
    tags: ['React', 'TailwindCSS'],
    img: `${images.p19}`,
    desc: `E-commerce app`,
  },

  {
    id: 6,
    title: 'Crypto News',
    category: 'react',
    url: 'https://crypto-news.muhammedtijani.com/',
    source: 'https://github.com/coolzyte/cryptonews',
    tags: ['React', 'Ant Design', 'ChartJs'],
    img: `${images.p1}`,
    desc: 'Crypto News App',
  },

  {
    id: 7,
    title: 'Techx Website',
    category: 'Next',
    url: 'https://techx-website.vercel.app/',
    source: 'https://github.com/muhammedrepo/techx-website',
    tags: ['React', 'Typescript', 'Bootstrap'],
    img: `${images.p9}`,
    desc: 'Techx website template',
  },

  {
    id: 8,
    title: 'Startup',
    category: 'react',
    url: 'https://startup.muhammedtijani.com/',
    source: 'https://github.com/coolzyte/startup',
    tags: ['React', 'Tailwind'],
    img: `${images.p3}`,
    desc: `Startup focus template`,
  },
  {
    id: 9,
    title: 'Manage Landing Page',
    category: 'react',
    url: 'https://manage-landing-page.muhammedtijani.com/',
    source: 'https://github.com/coolzyte/manage-landing-page',
    tags: ['React', 'Tailwind'],
    img: `${images.p14}`,
    desc: `Manage landing page`,
  },
  {
    id: 10,
    title: 'User Accounts Activity',
    category: 'react',
    url: 'https://frontend-interview-test.netlify.app/',
    source: 'https://github.com/coolzyte/interview-test',
    tags: ['React', 'Tailwind', 'API'],
    img: `${images.p15}`,
    desc: `User accounts analytics`,
  },
  {
    id: 11,
    title: 'Hoobank website',
    category: 'react',
    url: 'https://hoobank.muhammedtijani.com/',
    source: 'https://github.com/coolzyte/hoobank',
    tags: ['React', 'Tailwind'],
    img: `${images.p16}`,
    desc: `Hoobank react website`,
  },

  {
    id: 12,
    title: 'Dice Game',
    category: 'javascript',
    url: 'https://roll-a-dice.muhammedtijani.com/',
    source: 'https://github.com/muhammedtijani/piggame',
    tags: ['HTML5', 'CSS', 'JavaScript'],
    img: `${images.p10}`,
    desc: `Exciting Roll Dice Game `,
  },

  {
    id: 13,
    title: 'Image To Text',
    category: 'Typescript',
    url: 'https://image-text.muhammedtijani.com/',
    source: 'https://github.com/coolzyte/image-text',
    tags: ['React', 'Typescript', 'TailwindCSS'],
    img: `${images.p20}`,
    desc: `Image to text converter`,
  },
  {
    id: 14,
    title: 'Job Board',
    category: 'react',
    url: 'https://job-board.muhammedtijani.com',
    source: 'https://github.com/coolzyte/job-board',
    tags: ['React', 'Tailwind CSS'],
    img: `${images.p18}`,
    desc: `Job board app`,
  },

  // {
  //   id: 9,
  //   title: 'Personal Portfolio',
  //   category: 'Typescript',
  //   url: 'https://portfolio.muhammedtijani.com/',
  //   source: 'https://github.com/coolzyte/portfolio_v3',
  //   tags: ['React', 'Typescript', 'Styled-Components'],
  //   img: `${images.p11}`,
  //   desc: `Portfolio Template `,
  // },
  // {
  //   id: 10,
  //   title: 'Travel Advisor',
  //   category: 'react',
  //   url: 'https://hotelapp.muhammedtijani.com/',
  //   source: 'https://github.com/coolzyte/travel_advisor',
  //   tags: ['React', 'RapidApi', 'MaterialUI'],
  //   img: `${images.p12}`,
  //   desc: `Browse Hotels Around the world `,
  // },

  // {
  //   id: 15,
  //   title: 'Pavo Website',
  //   category: 'react',
  //   url: 'https://pavo.muhammedtijani.com/',
  //   source: 'https://github.com/coolzyte/pavo',
  //   tags: ['React', 'Tailwind'],
  //   img: `${images.p17}`,
  //   desc: `Pavo react website`,
  // },

  // {
  //   id: 17,
  //   title: 'Restaurant',
  //   category: 'react',
  //   url: 'https://restaurant-app.muhammedtijani.com/',
  //   source: 'https://github.com/coolzyte/restaurant-app',
  //   tags: ['React', 'CSS'],
  //   img: `${images.p4}`,
  //   desc: `Restaurant website template `,
  // },
  // {
  //   id: 18,
  //   title: 'Portfolio',
  //   category: 'react',
  //   url: 'https://portfolio-v-1.muhammedtijani.com/',
  //   source: '',
  //   tags: ['React', 'styled-component'],
  //   img: `${images.p7}`,
  //   desc: `modern portfolio template`,
  // },
  // {
  //   id: 19,
  //   title: 'Search App',
  //   category: 'react',
  //   url: 'https://goggle.muhammedtijani.com',
  //   source: '',
  //   tags: ['React', 'Tailwind'],
  //   img: `${images.p8}`,
  //   desc: 'Search App',
  // },
]
export default menu
