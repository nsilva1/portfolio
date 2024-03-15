// import React from 'react';
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
          Self-taught Software Engineer with over 6 years of hands-on experience
          in designing and implementing robust web applications using React and
          Python. Proficient in both front-end and back-end development, with a
          deep understanding of modern web development practices and
          methodologies. Extensive experience in leveraging various frameworks
          to deliver scalable and efficient solutions. Additionally, adept in
          DevOps practices, ensuring seamless integration and deployment
          processes. Committed to staying updated with emerging technologies and
          continuously enhancing skills to drive innovation and deliver
          high-quality products.
        </p>
        <Link to='projects' smooth duration={200}>
          <Button text='Projects' />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
