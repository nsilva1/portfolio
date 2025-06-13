import { skills } from '../lib/constants';

const Skills = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      {...props}
      className='py-24 bg-gray-50 dark:bg-black/50 translate-y-4 transition-all duration-500'
    >
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-4'>My Skills</h2>
        <p className='text-gray-600 dark:text-gray-400 text-xl mb-16 text-center'>
          Technologies and tools I use to bring products to life
        </p>
      </div>
      <div className='flex justify-center items-center flex-wrap gap-20 mx-auto px-4'>
        {skills.map((skill, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div
              className={`w-16 h-16 bg-${skill.color}-500/10 dark:bg-white rounded-full flex items-center justify-center mb-6`}
            >
              <img src={skill.icon} alt={skill.name} className='text-3xl' />
            </div>
            <h3 className='text-xl font-bold mb-4'>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Skills };
