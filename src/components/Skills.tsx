// import React from 'react';
import { skillset } from '../constants';
import styles from '../styles';

const Skills = () => {
  return (
    <section
      id='projects'
      className={`${styles.flexCenter} flex-col w-full h-full p-4`}
    >
      <div className='py-6'>
        <h2 className='font-poppins font-semibold ss:text-[60px] text-[40px] ss:leading-[80px] leading-[65px] text-gradient'>
          Skills
        </h2>
      </div>
      <div className='flex flex-row flex-wrap justify-center'>
        {skillset.map((skill) => (
          <div key={skill.id} className='m-5'>
            <figure>
              <img
                src={skill.icon}
                alt={skill.text}
                className='h-32 w-32 duration-300 hover:scale-125'
              />
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
