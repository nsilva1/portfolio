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
    name: 'Gata Quiz'
  },
  {
    id: 2,
    icon: webChatApp,
    codeLink: 'https://github.com/nsilva1/web-chat-app',
    demoLink: 'https://web-chat-app-pearl.vercel.app/',
    name: 'Web Chat App'
  },
  
  {
    id: 3,
    icon: modern,
    codeLink: 'https://github.com/nsilva1/tailwind-website',
    demoLink: 'https://tailwind-website-theta.vercel.app/',
    name: 'Modern Tailwind Website'
  },
  {
    id: 4,
    icon: calculator,
    codeLink: 'https://github.com/nsilva1/simple-calculator',
    demoLink: 'https://simple-calculator-nsilva1.vercel.app/',
    name: 'Simple Calculator'
  },
  {
    id: 5,
    icon: imageGallery,
    codeLink: 'https://github.com/nsilva1/image-gallery',
    demoLink: 'https://dazzling-panda-006119.netlify.app/',
    name: 'Image Gallery'
  },
]