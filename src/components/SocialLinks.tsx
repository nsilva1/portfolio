import { FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
  return (
    <div className='hidden sm:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] rounded hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
          <a
            href='https://github.com/nsilva1'
            target='_blank'
            rel='noreferrer'
            className='flex justify-between items-center w-full text-white'
          >
            <>
              Github <FaGithub size={30} />
            </>
          </a>
        </li>
        <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] rounded hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
          <a
            href='mailto:netoukpong@gmail.com'
            target='_blank'
            rel='noreferrer'
            className='flex justify-between items-center w-full text-white'
          >
            <>
              Mail <HiOutlineMail size={30} />
            </>
          </a>
        </li>
        <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] rounded hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
          <a
            href='./Neto_Ukpong_Resume.pdf'
            download
            className='flex justify-between items-center w-full text-white'
          >
            <>
              Resume <BsFillPersonLinesFill size={30} />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
