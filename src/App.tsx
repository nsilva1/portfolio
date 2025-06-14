import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ArrowBigUpDash } from 'lucide-react';

import { ToastContainer } from 'react-toastify';

const App = () => {
  const goToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <ToastContainer />
      {/* Dark mode background gradient */}
      <div className='fixed inset-0 -z-10 opacity-0 dark:opacity-100 transition-opacity duration-500 pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10'></div>
      </div>

      {/* Header */}
      <Header goToSection={goToSection} />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* About Section */}
      <About id='about' />

      {/* Skills Section */}
      <Skills id='skills' />

      {/* Projects Section */}
      <Projects id='projects' />

      {/* Contact Section */}
      <Contact id='contact' />

      {/* Footer Section */}
      <Footer />
      {/* Scroll to top button */}
      <button
        className='fixed bottom-4 right-4 cursor-pointer bg-primary text-white rounded-full p-3 shadow-lg hover:bg-primary/90 transition-colors duration-300'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowBigUpDash className='w-6 h-6' />
        <span className='sr-only'>Scroll to top</span>
      </button>
    </div>
  );
};

export default App;
