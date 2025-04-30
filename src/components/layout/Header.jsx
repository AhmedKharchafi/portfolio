import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { to: 'home', label: 'Accueil' },
    { to: 'about', label: 'À propos' },
    { to: 'skills', label: 'Compétences' },
    { to: 'projects', label: 'Projets' },
    { to: 'education', label: 'Éducation' },
    { to: 'experience', label: 'Expérience' },
    { to: 'contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClass = scrolled
    ? 'fixed w-full top-0 z-50 bg-secondary-900 shadow-md transition-all duration-300'
    : 'fixed w-full top-0 z-50 bg-transparent transition-all duration-300';

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <h1 className="text-2xl font-bold text-white">
              Ahmed<span className="text-primary-500">K</span>
            </h1>
          </Link>
        </div>

        {/* Navigation bureau */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              className="nav-link text-white hover:text-primary-500 transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bouton menu mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Basculer le menu"
          >
            {isOpen ? (
              <FaTimes size={24} className="text-primary-500" />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Navigation mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-secondary-800 shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className="nav-link text-white hover:text-primary-500 transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
