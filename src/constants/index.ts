import gata from '../assets/gata.png'
import webChatApp from '../assets/web-chat-app.png'
import imageGallery from '../assets/image-gallery.png'
import modern from '../assets/modern.png'
import calculator from '../assets/calculator.png'

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
    description: 'A Web 3 quiz game with oncline classes in the metaverse',
    frontend: 'Frontend - React, Tailwind',
    backend: 'Backend - Firebase Firestore, Vercel Hosting'
  },
  {
    id: 2,
    icon: webChatApp,
    codeLink: 'https://github.com/nsilva1/web-chat-app',
    demoLink: 'https://web-chat-app-pearl.vercel.app/',
    name: 'Web Chat App',
    description: 'A chat application with Google authentication',
    frontend: 'Frontend - React, Tailwind',
    backend: 'Backend - Firebase Authentication & Firestore, Vercel Hosting'
  },
  
  {
    id: 3,
    icon: modern,
    codeLink: 'https://github.com/nsilva1/tailwind-website',
    demoLink: 'https://tailwind-website-theta.vercel.app/',
    name: 'Modern Tailwind Website',
    description: 'A modern payment solution website',
    frontend: 'Frontend - React, Tailwind',
    backend: 'Backend - Vercel Hosting'
  },
  {
    id: 4,
    icon: calculator,
    codeLink: 'https://github.com/nsilva1/simple-calculator',
    demoLink: 'https://simple-calculator-nsilva1.vercel.app/',
    name: 'Simple Calculator',
    description: 'A simple calculator using React Context API',
    frontend: 'Frontend - React, Tailwind',
    backend: 'Backend - Vercel Hosting'
  },
  {
    id: 5,
    icon: imageGallery,
    codeLink: 'https://github.com/nsilva1/image-gallery',
    demoLink: 'https://dazzling-panda-006119.netlify.app/',
    name: 'Image Gallery',
    description: 'An image search gallery where images are gotten from pixabay using axios to make api calls',
    frontend: 'Frontend - React, Tailwind, Axios',
    backend: 'Backend - Netlify Hosting'
  },
]