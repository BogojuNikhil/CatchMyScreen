import React, {  useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react';
import { scrollTo } from '../utils/scrollTo';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate;

  return (
    <div className='fixed top-2 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5 bg-transparent'>

      {/* Logo */}
      <Link to="/" className='max-md:flex-1'>
        <img src={logo} alt="CatchMyScreen Logo" className='w-28 h-auto' />
      </Link>

      {/* Menu Items */}
      <div
        className={`${menuOpen ? 'max-md:w-full flex' : "max-md-w-0 hidden" } max-md:fixed max-md:inset-0 z-40 bg-white/10 backdrop-blur flex-col justify-center items-center max-md:gap-10 md:flex md:flex-row md:static md:bg-transparent md:backdrop-blur-none md:gap-10 md:rounded-full py-3 px-6 md:px-10 border md:border-gray-300/20 transition duration-300`}
      >
        <XIcon
          className='md:hidden absolute top-6 right-6 w-6 h-6 text-white cursor-pointer'
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <Link
          to="/"
          onClick={() => { scrollTo(0, 0); setMenuOpen(false); }}
          className='text-white text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-primary hover:drop-shadow-glow'
        >
          Home
        </Link>
        <Link
          to="/movies"
          onClick={() => { scrollTo(0, 0); setMenuOpen(false); }}
          className='text-white text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-primary hover:drop-shadow-glow'
        >
          Movies
        </Link>
        <Link
          to="/theaters"
          onClick={() => { scrollTo(0, 0); setMenuOpen(false); }}
          className='text-white text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-primary hover:drop-shadow-glow'
        >
          Theaters
        </Link>
        <Link
          to="/releases"
          onClick={() => { scrollTo(0, 0); setMenuOpen(false); }}
          className='text-white text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-primary hover:drop-shadow-glow'
        >
          Releases
        </Link>
        <Link
          to="/favorites"
          onClick={() => { scrollTo(0, 0); setMenuOpen(false); }}
          className='text-white text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-primary hover:drop-shadow-glow'
        >
          Favorites
        </Link>
      </div>

      {/* Right Side */}
      <div className='flex items-center gap-6 z-50'>
        <SearchIcon className='max-md:hidden text-white cursor-pointer w-6 h-6 hover:text-primary transition duration-300' />
        {
          !user ? (
            <button
              onClick={openSignIn}
              className='px-4 py-1 sm:px-7 sm:py-2 bg-red-600 hover:bg-red-500 transition rounded-full font-medium text-white text-sm sm:text-base'
            >
              Login
            </button>
          ) : (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label='My Bookings'
                  labelIcon={<TicketPlus width={15} />}
                  onclick={() => navigate('/my-bookings')}
                />
              </UserButton.MenuItems>
            </UserButton>
          )
        }

        <MenuIcon
          className='md:hidden text-white cursor-pointer w-8 h-8'
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
    </div>
  );
};

export default Navbar;