import React from 'react';
import profileImage from '../assets/profile_image.jpg';
import styles from '../styles';
import Button from './Button';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id='home'
      className={`flex md:flex-row-reverse flex-col ${styles.paddingY}`}
    >
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10`}>
        <img
          src={profileImage}
          alt='Profile Image'
          className='max-w-sm rounded-lg relative z-[5]'
        />
      </div>

      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <h1 className='flex-1 font-poppins font-semibold ss:text-[69px] text-[50px] text-white ss:leading-[100px] leading-[75px]'>
          Software <br className='sm:block hidden' />{' '}
          <span className='text-gradient'>Engineer</span>{' '}
        </h1>
        <p className={`${styles.paragraph} mb-5`}>
          Self-taught software engineer with over 5 years of experience designing
          and building web applications. Proficient with HTML, CSS, React, and
          Python, with experience in DevOps.
        </p>
        <Link to='projects' smooth duration={200}>
          <Button text='Projects' />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
