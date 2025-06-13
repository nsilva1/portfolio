const Contact = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section {...props} className='py-24 translate-y-4 transition-all duration-500'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-4'>Contact Me</h2>
        <p className='text-xl text-center text-gray-600 dark:text-gray-400 mb-8'>
          I'm always open to discussing new projects and opportunities. Feel free to reach out!
        </p>
        <form className='max-w-lg mx-auto'>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700 dark:text-gray-300'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              className='mt-1 p-2 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-gray-300'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700 dark:text-gray-300'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              className='mt-1 p-2 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-gray-300'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-700 dark:text-gray-300'
            >
              Message
            </label>
            <textarea
              id='message'
              rows={4}
              className='mt-1 p-2 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-gray-300'
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full bg-primary text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-primary-dark transition duration-200'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export { Contact };
