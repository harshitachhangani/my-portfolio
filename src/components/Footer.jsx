import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Harshita Chhangani</p>
        <div className="flex space-x-4 mt-2">
          <a href="#" className="hover:text-blue-500">
            Home
          </a>
          <a href="#" className="hover:text-blue-500">
            About
          </a>
          <a href="#" className="hover:text-blue-500">
            Services
          </a>
          <a href="#" className="hover:text-blue-500">
            Contact
          </a>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
