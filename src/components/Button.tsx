import React from 'react';

const Button = ({ text }: { text: String }) => {
  return (
    <div>
      <button
        type='button'
        className={`rounded-full py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
