import React from 'react';

const ResumeButton = ({ ...props }: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className=''>
      <a href='/Neto-Ukpong-Neto-Resume.pdf' target='_blank' rel='noopener noreferrer'>
        <button
          {...props}
          className='cursor-pointer px-8 py-3 bg-white text-gray-900 rounded-lg dark:bg-black/50 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white transition-colors'
        >
          View Resume
        </button>
      </a>
    </div>
  );
};

export { ResumeButton };
