// import React from 'react';
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
      <div className='flex flex-1 flex-row flex-wrap justify-center xl:justify-start px-5'>
        {projectLinks.map((project) => (
          <div key={project.id} className='feedback-card w-[500px] shadow-2xl rounded-3xl m-5'>
            <figure>
              <img
                src={project.icon}
                alt={project.name}
                className='rounded w-[500px] h-72'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title text-white'>{project.name}</h2>
              <p className='text-white font-semibold'>{project.description}</p>
              <p className='text-white'>{project.frontend}</p>
              <p className='text-white'>{project.backend}</p>
              <div className='card-actions justify-between mt-5'>
                <a
                  className='btn btn-ghost text-white hover:text-dimWhite'
                  href={project.demoLink}
                  target='_blank'
                  rel='noreferrer'
                >
                  View Demo
                </a>
                <a
                  className='btn btn-ghost text-white hover:text-dimWhite'
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
