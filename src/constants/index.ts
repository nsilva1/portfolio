import gata from '../assets/gata.png'
import webChatApp from '../assets/web-chat-app.png'
import imageGallery from '../assets/image-gallery.png'
import modern from '../assets/modern.png'
import calculator from '../assets/calculator.png'
import html from '../assets/html-1.svg'
import css from '../assets/css-3.svg'
import tailwindcss from '../assets/tailwindcss.svg'
import javascript from '../assets/javascript.svg'
import typescript from '../assets/typescript.svg'
import react from '../assets/react-2.svg'
import fastapi from '../assets/fastapi-1.svg'
import mongodb from '../assets/mongodb-icon-1.svg'
import postgresql from '../assets/postgresql.svg'
import python from '../assets/python.svg'

export const navLinks = [
    {
        id: "home",
        title: "Home",
      },
      {
        id: "about",
        title: "About",
      },
      // {
      //   id: "skills",
      //   title: "Skills",
      // },
      {
        id: "projects",
        title: "Projects",
      },
      {
        id: "contact",
        title: "Contact",
      },
]


export const projectLinks = [
  {
    id: 1,
    icon: gata,
    codeLink: 'https://github.com/nsilva1/gata-quiz',
    demoLink: 'https://gata-quiz.vercel.app/',
    name: 'Gata Quiz',
    description: 'A Web 3 quiz game with short online classes in the metaverse. Take a class, take the quiz',
    frontend: 'Frontend - React, Tailwind CSS',
    backend: 'Backend - Firebase Firestore'
  },
  {
    id: 2,
    icon: webChatApp,
    codeLink: 'https://github.com/nsilva1/web-chat-app',
    demoLink: 'https://web-chat-app-pearl.vercel.app/',
    name: 'Web Chat App',
    description: 'A web chat application with Google authentication',
    frontend: 'Frontend - React, Tailwind CSS',
    backend: 'Backend - Firebase Authentication & Firestore'
  },
  // {
  //   id: 3,
  //   icon: 'https://wephco.com',
  //   codeLink: 'https://github.com/nsilva1/tailwind-website',
  //   demoLink: 'https://tailwind-website-theta.vercel.app/',
  //   name: 'Modern Tailwind Website',
  //   description: 'A modern payment solution website',
  //   frontend: 'Frontend - React, Tailwind',
  //   backend: ''
  // },
  {
    id: 4,
    icon: calculator,
    codeLink: 'https://github.com/nsilva1/simple-calculator',
    demoLink: 'https://simple-calculator-nsilva1.vercel.app/',
    name: 'Simple Calculator',
    description: 'A simple calculator',
    frontend: 'Frontend - React, Tailwind CSS',
    backend: ''
  },
  {
    id: 5,
    icon: imageGallery,
    codeLink: 'https://github.com/nsilva1/image-gallery',
    demoLink: 'https://dazzling-panda-006119.netlify.app/',
    name: 'Image Gallery',
    description: 'Image search gallery. Search for any kind of image. Images gotten through Pixabay API',
    frontend: 'Frontend - React, Tailwind CSS',
    backend: ''
  },
]

export const skillset = [
  {
    id: 1,
    icon: html,
    text: 'HTML'
  },
  {
    id: 2,
    icon: css,
    text: 'CSS'
  },
  {
    id: 3,
    icon: tailwindcss,
    text: 'Tailwind CSS'
  },
  {
    id: 4,
    icon: javascript,
    text: 'Javascript'
  },
  {
    id: 5,
    icon: typescript,
    text: 'Typescript'
  },
  {
    id: 6,
    icon: react,
    text: 'React'
  },
  {
    id: 7,
    icon: python,
    text: 'Python'
  },
  {
    id: 8,
    icon: fastapi,
    text: 'FastAPI'
  },
  {
    id: 9,
    icon: mongodb,
    text: 'MongoDB'
  },
  {
    id: 10,
    icon: postgresql,
    text: 'PostgreSQL'
  },
]