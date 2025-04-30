import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, technologies, githubLink, liveLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="card group h-full flex flex-col"
    >
      <div className="relative overflow-hidden rounded-t-xl mb-4">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 to-transparent opacity-50"></div>
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      
      <p className="text-gray-300 mb-4 flex-grow">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-secondary-700 text-primary-400 text-xs px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-4 mt-auto">
        {githubLink && (
          <a 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary-500 transition-colors duration-300 flex items-center"
          >
            <FaGithub className="mr-1" /> Code
          </a>
        )}
        {liveLink && (
          <a 
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary-500 transition-colors duration-300 flex items-center"
          >
            <FaExternalLinkAlt className="mr-1" /> Live
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;