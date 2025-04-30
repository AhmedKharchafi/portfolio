import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaDatabase, 
  FaCloud, 
  FaServer, 
  FaMobileAlt, 
  FaBrain,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaDocker,
  FaAws,
  FaGithub
} from 'react-icons/fa';

const CategorieCompétences = ({ title, skills, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="card"
    >
      <div className="flex items-center mb-4">
        <div className="text-primary-500 mr-3">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-300">{skill.name}</span>
              <span className="text-primary-500">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Compétences = () => {
  const catégoriesCompétences = [
    {
      title: "Intelligence Artificielle",
      icon: <FaBrain size={24} />,
      skills: [
        { name: "Apprentissage Automatique", level: 85 },
        { name: "Prétraitement des Données", level: 90 },
        { name: "Réseaux Neuronaux", level: 75 },
      ]
    },
    {
      title: "Science des Données",
      icon: <FaDatabase size={24} />,
      skills: [
        { name: "Python", level: 90 },
        { name: "Pandas", level: 85 },
        { name: "Scikit-learn", level: 80 },
        { name: "Visualisation des Données", level: 75 },
      ]
    },
    {
      title: "Langages de Programmation",
      icon: <FaCode size={24} />,
      skills: [
        { name: "Python", level: 90 },
        { name: "C/C++", level: 75 },
        { name: "SQL/PL-SQL", level: 70 },
        { name: "MATLAB", level: 80 },
      ]
    },
    {
      title: "Développement Web",
      icon: <FaHtml5 size={24} />,
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 70 },
        { name: "Flutter", level: 65 },
      ]
    },
    {
      title: "Informatique en Nuage",
      icon: <FaCloud size={24} />,
      skills: [
        { name: "AWS", level: 65 },
        { name: "Architecture Cloud", level: 60 },
      ]
    },
    {
      title: "DevOps",
      icon: <FaServer size={24} />,
      skills: [
        { name: "CI/CD", level: 60 },
        { name: "Git", level: 75 },
        { name: "Linux", level: 70 },
      ]
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mes <span>Compétences</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {catégoriesCompétences.map((category, index) => (
            <CategorieCompétences
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              delay={0.1 * index}
            />
          ))}
        </div>

        <motion.div 
          className="flex flex-wrap justify-center mt-16 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <FaPython size={40} className="text-gray-400 hover:text-primary-500 transition-colors duration-300" />
          <FaJs size={40} className="text-gray-400 hover:text-primary-500 transition-colors duration-300" />
          <FaHtml5 size={40} className="text-gray-400 hover:text-primary-500 transition-colors duration-300" />
          <FaCss3Alt size={40} className="text-gray-400 hover:text-primary-500 transition-colors duration-300" />
          <FaReact size={40} className="text-gray-400 hover:text-primary-500 transition-colors duration-300" />
          <FaDocker size={40} className="text-gray-400 hover:text-primary-500 transition-colors duration-300" />
          <FaAws size={40} className="text-gray-400 hover:text-primary-500 transition-colors duration-300" />
          <FaGithub size={40} className="text-gray-400 hover:text-primary-500 transition-colors duration-300" />
          <FaMobileAlt size={40} className="text-gray-400 hover:text-primary-500 transition-colors duration-300" />
        </motion.div>
      </div>
    </section>
  );
};

export default Compétences;
