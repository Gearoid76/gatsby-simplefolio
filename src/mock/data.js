import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Gearóid O Ceallacháin', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'UI/UX designer looking for work', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Nice to meet you, I am ',
  name: 'Gearóid ',
  subtitle: 'UX/UI designer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'cactus_joe2.jpg',
  paragraphOne:
    'I am a UI/UX designer who enjoys programming. I take a moment to think about the customer’s needs and wishes. I push toward going beyond the customers’ requirements, reminding myself what we are here to achieve. I believe that with great user design comes simplistic use and effective security. I have education in both design and security I am equipped to execute my vision.',
  paragraphTwo: 'I want to keep my skills up by programming and learnign new methods',
  paragraphThree: 'If you need more information please contact me.',
  resume: 'https://gearoid76.github.io/Gearoid76.github.io/index_resume.html', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Front.jpg',
    title: 'Enviornmental game',
    info: 'Help Cal survive in the future by helping animals and saving the enviorment',
    info2: '',
    url: 'https://gearoid76.github.io/Gearoid76.github.io/Index_Portfolio.html',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pia-bg.png',
    title: 'Pia',
    info:
      'Pia is a calender app that would organise your classes to best fit your schedule, this would make sure that no classes would be overlapping',
    info2: '',
    url: 'https://gearoid76.github.io/Gearoid76.github.io/index_pia.html',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '55games.jpg',
    title: 'Project pristine',
    info: 'This was a game that used nature to determine if you lived or died',
    info2: 'By choosing the correct rather than the fastest way to create power',
    url: 'https://gearoid76.github.io/Gearoid76.github.io/index_ProjectPristine.html',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'press to email me ',
  email: 'gocealla@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/gearoid76',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/gear%C3%B3id-o-ceallach%C3%A1in/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Gearoid76',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
