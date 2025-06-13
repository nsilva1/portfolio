import { useState } from 'react';
import { headerMenuItems } from '../lib/constants';
import { Sun, Moon, XIcon, Menu } from 'lucide-react';
import { getCurrentHour, getGreeting } from '../lib/helperFunctions';

const Header = ({ goToSection }: { goToSection: (sectionId: string) => void }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const currentHour = getCurrentHour();
  const greeting = getGreeting();

  return (
    <div className='fixed w-full top-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-sm shadow-sm transition-all duration-300'>
      <div className='container mx-auto px-4'>
        <nav className='flex justify-between items-center py-4'>
          <div className='flex items-center'>
            <a href='#' className='text-xl font-extrabold'>
              Neto
            </a>
            <span className='text-primary text-2xl ml-1'>.</span>
          </div>
          <ul className='md:flex space-x-8 hidden'>
            {headerMenuItems.map((menuItem, index) => (
              <li key={index} onClick={() => goToSection(menuItem.link)}>
                <a
                  href={`#${menuItem.link}`}
                  className='text-gray-700 dark:text-gray-300 hover:text-primary transition-colors'
                >
                  {menuItem.label}
                </a>
              </li>
            ))}
          </ul>
          <div className='flex items-center space-x-4'>
            <div className='hidden md:flex gap-2 text-gray-700 dark:text-gray-300'>
              <span className='font-semibold text-xl'>{greeting}</span>
              <span className=''>
                {currentHour < 18 ? (
                  <Sun className='text-2xl text-yellow-500' />
                ) : (
                  <Moon className='text-2xl text-blue-500' />
                )}
              </span>
            </div>
          </div>
          {/* Mobile Menu */}
          <div className='md:hidden'>
            <div
              className='p-2 cursor-pointer'
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              aria-label='Toggle Mobile Menu'
            >
              {showMobileMenu ? <XIcon /> : <Menu />}
            </div>
            <div
              className={`${
                showMobileMenu ? 'flex' : 'hidden'
              } p-6 bg-white text-black absolute top-16 right-0 mx-4 my-2 min-w-[150px] rounded-xl z-10`}
            >
              <ul className='list-none flex flex-col gap-8 justify-end items-center flex-1'>
                {headerMenuItems.map((menuItem, index) => (
                  <li key={index}>
                    <a
                      href={`#${menuItem.link}`}
                      className='text-gray-700 dark:text-gray-300 hover:text-primary transition-colors'
                    >
                      {menuItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export { Header };
