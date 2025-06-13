const Hero = () => {
  return (
    <section className='min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 dark:from-primary/20 dark:to-secondary/20'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-6xl font-bold mb-6'>
            The{' '}
            <span className='bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent'>
              React Developer
            </span>{' '}
            You Need
          </h1>
          <p className='text-xl text-gray-700 dark:text-gray-300 mb-8'>
            Building modern, responsive, and <strong>high quality web applications</strong> with
            modern tools for exceptional user experiences
          </p>
          <div className='flex flex-col md:flex-row gap-4 justify-center mb-12'>
            <a
              href='#projects'
              className='px-8 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-blue-300/30 dark:hover:shadow-blue-500/20 shadow-blue-200/20 dark:shadow-blue-700/10'
            >
              View Projects
            </a>
            <a
              href='#about'
              className='px-8 py-3 bg-white text-gray-900 rounded-lg dark:bg-black/50 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-gray-900 dark"hover"border-white transition-colors'
            >
              Learn More
            </a>
          </div>
          <div
            id='terminal-container'
            className='bg-gray-100 dark:bg-black/50 rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto'
          >
            <div className='flex items-center space-x-2 p-3 bg-gray-200 dark:bg-black'>
              <div className='w-3 h-3 bg-red-500 rounded-full'></div>
              <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
              <div className='w-3 h-3 bg-green-500 rounded-full'></div>
            </div>
            <div className='p-6 font-poppins terminal-content'>
              <span className='text-green-500'>$</span>
              <span className='text-gray-900 dark:text-gray-400 ml-1'>npm install -g neto</span>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
