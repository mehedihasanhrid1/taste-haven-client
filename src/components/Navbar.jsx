import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import {BsFillMoonFill} from 'react-icons/bs';
import { FaTimes, FaBars } from "react-icons/fa";
import { CiLight } from 'react-icons/ci';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <div>
      <nav className="p-4 md:p-5 shadow flex items-center justify-between dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-700 dark:to-gray-900">
        <div className="block lg:hidden">
        <button onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </button>
        </div>
        <div>
            <div className='flex items-center justify-center gap-1 md:gap-2'>
                <img className='h-8 md:h-10 lg:h-12' src={Logo} alt="" />
                <h2 className='text-[#289944] dark:text-white text-xl md:text-3xl  lg:text-4xl font-bold'>Taste<span className='text-[#FB9333]'>{" "}Haven</span></h2>
            </div>
        </div>
        <div>
            <ul className='text-lg font-medium hidden lg:flex items-center gap-5'>
            <NavLink to="/" className={(navData) => (navData.isActive ? "text-[#289944] border-b-2 border-[#289944] dark:text-[#FB9333] dark:border-[#FB9333]" : '')}>
                <li className="">Home</li>
              </NavLink>
              <NavLink to="/addproduct" className={(navData) => (navData.isActive ? "text-[#289944] border-b-2 border-[#289944] dark:text-[#FB9333] dark:border-[#FB9333]" : '')}>
                <li className="">Add Product</li>
              </NavLink>
              <NavLink to="/cart" className={(navData) => (navData.isActive ? "text-[#289944] border-b-2 border-[#289944] dark:text-[#FB9333] dark:border-[#FB9333]" : '')}>
                <li className="">My Cart</li>
              </NavLink>
              <NavLink to="/contactus" className={(navData) => (navData.isActive ? "text-[#289944] border-b-2 border-[#289944] dark:text-[#FB9333] dark:border-[#FB9333]" : '')}>
                <li className="">Contact Us</li>
              </NavLink>
            </ul>
        </div>
        <div className='flex items-center gap-3'>
            <button onClick={toggleDarkMode} className='p-3 text-xl dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg dark:text-gray-100 hover:bg-gray-100 text-gray-700 dark:font-bold'>
            {isDarkMode ? <CiLight/> :<BsFillMoonFill/> }
            </button>
            <button className='bg-[#289944] text-white px-5 md:px-6 md:text-lg py-2 hover:bg-[#248a3e] rounded-lg'>Login</button>    
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
