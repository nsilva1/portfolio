import Navbar from './components/Navbar';
import Hero from './components/Hero';
import styles from './styles';
import About from './components/About';
// import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className='bg-black-gradient w-full overflow-hidden'>
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={styles.boxWidth}>
          <Navbar />
        </div>
      </div>

      {/* Hero Section */}
      <div className={`${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Hero />
        </div>
      </div>

      {/* Rest of site */}
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <About />
          {/* <Skills /> */}
          <Projects />
          <Contact />
          {/* <Footer /> */}
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default App;
