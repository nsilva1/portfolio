import { useState } from 'react';
import close from '../assets/close.svg';
import menu from '../assets/menu.svg';
import { navLinks } from '../constants';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <h1 className='font-signature text-3xl text-white h-[50px] w-[50px]'>
        Neto
      </h1>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-white`}
          >
            <Link to={nav.id} smooth duration={400}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* mobile view */}
      <div className='sm:hidden flex flex-1 justify-end items-center z-10'>
        <img
          src={toggle ? close : menu}
          alt='nav menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mb-5'
                } text-white`}
              >
                <Link to={nav.id} smooth duration={400}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
