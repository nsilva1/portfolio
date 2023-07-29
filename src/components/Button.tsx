const Button = ({ text }: { text: String }) => {
  return (
    <div>
      <button
        type='button'
        className={`rounded-full py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none duration-200 hover:scale-105`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
