import styles from '../styles';

const About = () => {
  return (
    <div>
      <div className={`${styles.flexStart} flex-col w-full`}>
        <div className='py-6 '>
          <h1 className='font-poppins font-semibold ss:text-[60px] text-[45px] ss:leading-[100px] leading-[75px] text-gradient'>
            About
          </h1>
        </div>
        <div>
          <p className={`${styles.paragraph} text-white py-1`}>
            I am a highly skilled full stack developer with over 5 years of
            experience in building complex web applications using React and
            Python. I am skilled in developing scalable and reliable software
            solutions using cloud environments such as AWS, Digital Ocean and
            Netlify.
          </p>
          <p className={`${styles.paragraph} text-white py-1`}>
            With a strong foundation in both front-end and back-end
            technologies, I have worked on numerous projects involving the
            development of RESTful APIs, database modeling, and user interface
            design.
          </p>
          <p className={`${styles.paragraph} text-white py-1`}>
            I stay up to date with the latest trends and technologies in the
            industry, and I am always looking for ways to improve my skills and
            knowledge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
