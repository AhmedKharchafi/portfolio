import React from 'react';
import { FaChevronDown, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Je suis <span className="text-primary-500">Ahmed Kharchafi</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            <TypeAnimation
              sequence={[
                'Ingénierie des systèmes intelligents',
                1000,
                'Intelligence Artificielle',
                1000,
                'Science des données',
                1000,
                'Passionné de DevOps',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex space-x-4 mb-10"
          >
            <a
              href="https://www.linkedin.com/in/ahmed-kharchafi-518b2b351/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary-800 text-white hover:bg-primary-500 hover:text-secondary-900 rounded-full transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary-800 text-white hover:bg-primary-500 hover:text-secondary-900 rounded-full transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="mailto:ahmed_kharchafi@um5.ac.ma"
              className="p-3 bg-secondary-800 text-white hover:bg-primary-500 hover:text-secondary-900 rounded-full transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4"
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="btn btn-primary"
            >
              Voir les projets
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="btn btn-outline"
            >
              Me contacter
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className="text-gray-400 hover:text-primary-500 transition-colors cursor-pointer"
        >
          <FaChevronDown size={24} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
