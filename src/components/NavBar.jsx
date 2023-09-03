import React, { useState } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can implement the actual dark/light mode switching logic here
  };

  return (
    <nav className={`p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-dark'} drop-shadow-xl`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="font-semibold text-xl">Harshita Chhangani</div>
        <ul className="flex space-x-4">
          <li><a href="#" className="font-semibold text-xl hover:text-blue-300">Home</a></li>
          <li><a href="#" className="font-semibold text-xl hover:text-blue-300">Projects</a></li>
          <li><a href="#" className="font-semibold text-xl hover:text-blue-300">Skills</a></li>
          <li><a href="#" className="font-semibold text-xl hover:text-blue-300">Contact</a></li>
        </ul>
        <button
          className="text-xl"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-500" />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
