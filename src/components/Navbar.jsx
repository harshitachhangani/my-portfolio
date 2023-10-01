import React, { useEffect, useState } from 'react';
import name from "../assets/imgs/name.png";
import { Link } from 'react-scroll';
import { FaXmark, FaBars, FaSun, FaMoon } from "react-icons/fa6";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Projects", path: "projects" },
    { link: "Skills", path: "skills" },
    { link: "Education", path: "education" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <header className={`w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'dark-mode' : ''}`}>
      <nav
        className={` lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300 "
            : ""
        }`}
      >
        <div className='flex justify-between items-center text-base gap-8'>
          <a href='' className='text-2xl font-semibold flex items-center space-x-3'>
            <img src={name} alt='' />
          </a>

          <ul className='md:flex space-x-12 hidden'>
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                
                key={path}
                className='block text-base font-bold  text-gray-900 hover:text-blue-500 first-font-medium no-underline'
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                {link}
              </Link>
            ))}
          </ul>

          <div className='space-x-12 hidden lg:flex items-center'>
            {/* Circular dark mode toggle button with border */}
            <div
              onClick={toggleDarkMode}
              className={`bg-white rounded-full p-2 cursor-pointer transition-all duration-300 border border-gray-500 ${isDarkMode ? 'dark-mode-button' : ''}`}
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </div>
          </div>

          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-neutralGrey focus:outline-none focus:txt-gray-500'
            >
              {isMenuOpen ? <FaXmark className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
            </button>
          </div>
        </div>

        <div
          className={`space-y-4 px-4 mt-20 py-7 md:hidden bg-gray-400 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
             
              key={path}
              className='block text-base font-bold text-gray-100 hover:text-blue-500 first-font-medium no-underline md:hidden'
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
