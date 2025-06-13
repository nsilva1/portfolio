const Loader = () => {
  return (
    <div className=''>
      <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-gray-500 dark:border-gray-400 border-solid'></div>
      <div className='mt-4 text-center text-gray-500 dark:text-gray-400'>
        Loading...
      </div>
    </div>
  );
};

export { Loader };
