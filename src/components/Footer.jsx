import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Mail } from 'react-feather';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <p className="text-2xl font-semibold mb-4">Stay Connected</p>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/harshita-chhangani-a82732257/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://github.com/harshitachhangani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="mailto:harshitachhangani0503@gmail.com"
            className="text-blue-500 hover:underline"
          >
            <Mail size={24} />
          </a>
        </div>
        <p className="text-sm mt-4 font-bold">&copy; {new Date().getFullYear()} Harshita Chhangani</p>
      </div>
    </footer>
  );
}

export default Footer;
