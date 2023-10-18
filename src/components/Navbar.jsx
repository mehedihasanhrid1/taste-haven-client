import React from 'react';
import Logo from '../assets/logo.png';
import {BsFillMoonFill} from 'react-icons/bs';
import { CiLight } from 'react-icons/ci';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div>
      <nav className="p-4 md:p-5 shadow flex items-center justify-between">
        <div>
            <div className='flex items-center justify-center gap-1 md:gap-2'>
                <img className='h-8 md:h-10 lg:h-12' src={Logo} alt="" />
                <h2 className='text-[#289944] dark:text-white text-xl md:text-3xl  lg:text-4xl font-bold'>Taste<span className='text-[#FB9333]'>{" "}Haven</span></h2>
            </div>
        </div>
        <div>
            <button onClick={toggleDarkMode} className='p-3 text-xl dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg dark:text-gray-100 hover:bg-gray-100 text-gray-700 dark:font-bold'>
            {isDarkMode ? <CiLight/> :<BsFillMoonFill/> }
            </button>    
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
