import React from 'react';
import { projectLinks } from '../constants';
import styles from '../styles';

const Projects = () => {
  return (
    <section
      id='projects'
      className={`${styles.flexCenter} flex-col w-full h-full p-4`}
    >
      <div className='py-6'>
        <h2 className='font-poppins font-semibold ss:text-[60px] text-[40px] ss:leading-[80px] leading-[65px] text-gradient'>
          Projects
        </h2>
      </div>
      <div className='flex flex-1 flex-row flex-wrap justify-center xl:justify-start'>
        {projectLinks.map((project) => (
          <div key={project.id} className='feedback-card w-72  shadow-xl m-3'>
            <figure>
              <img
                src={project.icon}
                alt={project.name}
                className='rounded duration-200 hover:scale-105'
              />
            </figure>
            <div className='card-body'>
              <div className='card-actions justify-between'>
                <a
                  className='text-white hover:text-dimWhite'
                  href={project.demoLink}
                  target='_blank'
                  rel='noreferrer'
                >
                  View Demo
                </a>
                <a
                  className='text-white hover:text-dimWhite'
                  href={project.codeLink}
                  target='_blank'
                  rel='noreferrer'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
