import { IHeaderMenuItem } from './interfaces';
import { Brush, Code2Icon, CloudLightning, Smartphone } from 'lucide-react';
import html5 from '../assets/icons/html5.svg';
import css3 from '../assets/icons/css3.svg';
import javascript from '../assets/icons/javascript.svg';
import typescript from '../assets/icons/typescript.svg';
import react from '../assets/icons/react.png';
import nextjs from '../assets/icons/nextjs.svg';
import tailwindcss from '../assets/icons/tailwindcss.svg';
import git from '../assets/icons/git.svg';
import linkedin from '../assets/icons/linkedin.svg';
import github from '../assets/icons/github.svg';

export const skills = [
  {
    name: 'HTML5',
    icon: html5,
    color: 'red',
  },
  {
    name: 'CSS3',
    icon: css3,
    color: 'blue',
  },
  {
    name: 'JavaScript',
    icon: javascript,
    color: 'yellow',
  },
  {
    name: 'TypeScript',
    icon: typescript,
    color: 'blue',
  },
  {
    name: 'React',
    icon: react,
    color: 'cyan',
  },
  {
    name: 'Next.js',
    icon: nextjs,
    color: 'gray',
  },
  {
    name: 'Tailwind CSS',
    icon: tailwindcss,
    color: 'indigo',
  },
  {
    name: 'Git',
    icon: git,
    color: 'orange',
  },
];

export const headerMenuItems: IHeaderMenuItem[] = [
  {
    label: 'About',
    link: 'about',
  },
  {
    label: 'Skills',
    link: 'skills',
  },
  {
    label: 'Projects',
    link: 'projects',
  },
  {
    label: 'Contact',
    link: 'contact',
  },
];

export const features = [
  {
    icon: Brush,
    title: 'Modern UI Design',
    description:
      'Creating beautiful, responsive interfaces that look great on any device using the latest design trends',
  },
  {
    icon: Code2Icon,
    title: 'Clean Code',
    description:
      'Writing maintainable, efficient code using the latest JavaScript and TypeScript standards, ensuring high performance and scalability',
  },
  {
    icon: CloudLightning,
    title: 'Performance Optimization',
    description:
      'Ensure fast load times and smooth interactions with optimized code and assets, enhancing user experience',
  },
  {
    icon: Smartphone,
    title: 'Responsive Development',
    description:
      'Building applications that work seamlessly across all devices, from desktops to mobile phones, ensuring accessibility and usability for all users',
  },
];

export const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/neto-ukpong-4752992ba/',
    icon: linkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/nsilva1',
    icon: github,
  },
];
