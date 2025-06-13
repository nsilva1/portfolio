import { features } from '../lib/constants';

const Features = () => {
  return (
    <section className='py-24 bg-gray-50 dark:bg-black/50 translate-y-4 transition-all duration-500'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-4'>What's in my Toolkit</h2>
        <p className='text-xl text-gray-600 dark:text-gray-400 text-center mb-16'>
          Everything needed to build great products on the web
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
            >
              <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                {<feature.icon className='text-primary text-xl' />}
              </div>
              <h3 className='text-xl font-bold mb-4'>{feature.title}</h3>
              <p className='text-gray-600 dark:text-gray-400'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Features };
