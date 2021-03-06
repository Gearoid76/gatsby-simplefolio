import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Gearóid O Ceallacháin', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'I.T. Graduate looking for UI/UX design work', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Nice to meet you, I am ',
  name: 'Gearóid ',
  subtitle: 'Graduate leaning towards UI/UX',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'cactus_joe2.jpg',
  paragraphOne:
    'I am an IT Graduate leaning towards UI/UX who enjoys programming. I take a moment to think about the customer’s needs and wishes. I push toward going beyond the customers’ requirements, reminding myself what we are here to achieve. I believe that with great user design comes simplistic use and effective security. I have an education in both design and security I am equipped to execute my vision.',
  paragraphTwo: 'I want to keep my skills up by programming and learning new methods.',
  paragraphThree: 'If you need more information please contact me.',
  resume: 'https://gearoid76.github.io/index_resume.html', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pia-bg.png',
    title: 'Pia',
    info:
      'Pia is a calendar app that would organise your classes to best fit your schedule, this would make sure that no classes would be overlapping.',
    info2:
      'As a design team of three, we did the 1)Overview - this was an app to help improve the scheduling of students study life 2) Analyzing user data - we analyzed ourselves and classmates on what was their problems 3) Creating personas - we assumed, that they were all students some looking for classes to fill their schedule 4) Ideation - we figured that by research planning it around a calendar would be the best option 5) Creating storyboards - we had a scenario where students and free time and wanted to put some class in.',
    url: 'https://gearoid76.github.io/index_peppi.html',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Front.jpg',
    title: 'Environmental game',
    info: 'Help Cal survive in the future by helping animals and saving the enviorment.',
    info2: 'Here I was a part of the sales team along with creating the story in which it was set.',
    url: 'https://gearoid76.github.io/index_EnvGame.html',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '55games.jpg',
    title: 'Project pristine',
    info:
      'This was a game that used nature to determine if you lived or died. By choosing the correct rather than the fastest way to create power.',
    info2:
      'Here I was a part of the Marketing team, as this was my first project in the UI/UX world long with the first project in the games industry.',
    url: 'https://gearoid76.github.io/index_ProjectPristine.html',
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
