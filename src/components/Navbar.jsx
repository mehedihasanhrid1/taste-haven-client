import React, { useContext , useState }  from "react";
import Logo from '../assets/logo.png';
import {BsFillMoonFill} from 'react-icons/bs';
import { FaTimes, FaBars } from "react-icons/fa";
import { CiLight } from 'react-icons/ci';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const { user, logOut } = useContext(AuthContext);

  return (
    <div>
      <nav className="py-4 px-2 md:p-5 shadow flex items-center justify-between dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-700 dark:to-gray-900">
        <div className="block lg:hidden text-lg md:text-xl relative">
        <button onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </button>
        {
          click && <div className='absolute h-fit pb-8 pt-6 md:pt-8 rounded w-60 md:w-72 top-[51px] md:top-14 -left-2 md:-left-5 p-5 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 dark:bg-gradient-to-t dark:from-gray-900 dark:via-gray-700 dark:to-gray-900'>
          <div className='flex items-center justify-center flex-col'>
                  {user ? (
                    <img className='rounded-full h-12 w-12 md:h-14 md:w-14 mb-2' src={user.photoURL} alt='' />
                  ):(
                    <img className='rounded-full h-12 w-12 md:h-14 md:w-14 mb-2' src='https://i.ibb.co/fY089MJ/man-icon.jpg' alt='' />
                  )}
                  {user ? (
                    <p className='text-lg font-medium'>{user.displayName}</p>
                  ): (
                    <p className='text-lg font-medium'>Anonymous User</p>
                  )}
                  {user ? (
                    <p className='italic text-xs md:text-base'>{user.email}</p>
                  ):(
                    <p className='italic text-xs md:text-base'>name@domain.com</p>
                  )}
                </div>
          <div>
            <ul className='text-lg font-medium flex flex-col items-start mt-3 md:mt-4 gap-1 md:gap-2' onClick={handleClick}>
            <NavLink to="/" className={(navData) => (navData.isActive ? "text-[#289944] dark:text-[#FB9333] dark:border-[#FB9333]" : '')}>
                <li className="">Home</li>
              </NavLink>
              <NavLink to="/addproduct" className={(navData) => (navData.isActive ? "text-[#289944] dark:text-[#FB9333] dark:border-[#FB9333]" : '')}>
                <li className="">Add Product</li>
              </NavLink>
              <NavLink to="/cart" className={(navData) => (navData.isActive ? "text-[#289944] dark:text-[#FB9333] dark:border-[#FB9333]" : '')}>
                <li className="">My Cart</li>
              </NavLink>
              <NavLink to="/contactus" className={(navData) => (navData.isActive ? "text-[#289944] dark:text-[#FB9333] dark:border-[#FB9333]" : '')}>
                <li className="">Contact Us</li>
              </NavLink>
            </ul>
        </div>

        </div>
        }
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
        <div className='flex items-center  gap-1 md:gap-3 lg:gap-4'>
        {user ? (
            <div className='hidden md:inline-block lg:hidden xl:inline-block'>
              <p className='text-lg font-medium'>{user.displayName}</p>
            </div>
          ) : ''}
        <div className="group flex relative">
        {user && (
              <img
                className='rounded-full h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10'
                src={user.photoURL}
                alt=''
              />
            )}
            {user && (
              <span className="group-hover:opacity-100 transition-opacity bg-gray-800 dark:bg-gray-100 dark:text-gray-800 px-3 py-2 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 mt-3 lg:mt-5">
                {user.email}
              </span>
            )}
</div>
          
            <button onClick={toggleDarkMode} className='p-2 md:p-3 text-lg md:text-xl dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg dark:text-gray-100 hover:bg-gray-100 text-gray-700 dark:font-bold'>
            {isDarkMode ? <CiLight/> :<BsFillMoonFill/> }
            </button>
            {user ? (
            <button
              onClick={() => {
                logOut();
                setClick(false);
              }}
              className='bg-[#289944] text-white px-4 md:px-6 md:text-lg py-2 hover:bg-[#248a3e] dark:bg-[#FB9333] dark:hover:bg-[#dd7614] rounded-lg'
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className='bg-[#289944] text-white px-4 md:px-6 md:text-lg py-2 hover:bg-[#248a3e] dark:bg-[#FB9333] dark:hover-bg-[#dd7614] rounded-lg'>
                Login
              </button>
            </Link>
          )}   
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
