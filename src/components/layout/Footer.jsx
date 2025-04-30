import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">
              Ahmed<span className="text-primary-500">Kharchafi</span>
            </h2>
            <p className="text-gray-400">Ingénierie des systèmes intelligents</p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="https://linkedin.com/in/ahmed-kharchafi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="mailto:ahmed_kharchafi@um5.ac.ma" 
              className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
              aria-label="E-mail"
            >
              <FaEnvelope size={24} />
            </a>
            <a 
              href="tel:+212624387602" 
              className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
              aria-label="Téléphone"
            >
              <FaPhone size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Ahmed Kharchafi. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
