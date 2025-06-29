import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { MenuIcon, SearchIcon, XIcon } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5 bg-transparent'>

      {/* Logo */}
      <Link to="/" className='max-md:flex-1'>
        <img src={logo} alt="CatchMyScreen Logo" className='w-36 h-auto' />
      </Link>

      {/* Menu Items */}
      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } max-md:fixed max-md:inset-0 z-40 bg-black/100 backdrop-blur flex-col justify-center items-center max-md:gap-10 md:flex md:flex-row md:static md:bg-transparent md:backdrop-blur-none md:gap-10 md:rounded-full py-3 px-6 md:px-10 border md:border-gray-300/20 transition duration-300`}
      >
        <XIcon
          className='md:hidden absolute top-6 right-6 w-6 h-6 text-white cursor-pointer'
          onClick={() => setMenuOpen(false)}
        />
        {['/', '/movies', '/theaters', '/releases', '/favorites'].map((path, index) => {
          const labels = ['Home', 'Movies', 'Theaters', 'Releases', 'Favorites'];
          return (
            <Link
              key={path}
              to={path}
              className='relative text-white text-lg transition duration-300 hover:text-primary after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full glow-hover'
            >
              {labels[index]}
            </Link>
          );
        })}
      </div>

      {/* Right Side */}
      <div className='flex items-center gap-6 z-50'>
        <SearchIcon className='max-md:hidden text-white cursor-pointer w-6 h-6 hover:text-primary transition duration-300' />
        <button className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium text-white text-sm sm:text-base'>
          Login
        </button>
        <MenuIcon
          className='md:hidden text-white cursor-pointer w-8 h-8'
          onClick={() => setMenuOpen(true)}
        />
      </div>

      {/* Glow Effect Styles */}
      <style>
        {`
          .glow-hover:hover {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.5),
                         0 0 10px rgba(0, 212, 255, 0.6),
                         0 0 20px rgba(0, 212, 255, 0.7);
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;