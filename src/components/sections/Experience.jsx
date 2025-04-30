import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaUsers } from 'react-icons/fa';

const TimelineItem = ({ year, title, organization, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="timeline-item"
    >
      <div className="mb-1 text-primary-500 font-semibold">{year}</div>
      <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
      <p className="text-gray-400 mb-2">{organization}</p>
      {description && <p className="text-gray-300">{description}</p>}
    </motion.div>
  );
};

const Experience = () => {
  const professionalExperience = [
    {
      year: "2024 (un mois et demi)",
      title: "Assistant ingénieur en intelligence artificielle",
      organization: "ONSSA, Rabat",
      description: "Utilisation de l'intelligence artificielle pour accélérer le processus d'analyse des données de résidus et de contaminants alimentaires par LC-MS-MS au laboratoire DPIV. Stage d'un mois axé sur l'application de l'IA aux méthodes de traitement des données en laboratoire."
    }
  ];

  const extracurricular = [
    {
      year: "2024 - 2025",
      title: "Président du club sportif",
      organization: "ENSIAS",
      description: "Direction du club sportif, organisation d'événements et promotion de l'activité physique auprès des étudiants."
    },
    {
      year: "2025",
      title: "Organisateur d'événements",
      organization: "ENSIAS 2K25",
      description: "Organisation de la journée Olympiades ENSIAS, coordination de diverses compétitions et activités sportives."
    }
  ];

  return (
    <section id="experience" className="section-padding bg-secondary-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mon <span>Expérience</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <FaBriefcase className="text-primary-500 mr-3" size={24} />
              <h3 className="text-2xl font-semibold text-white">Expérience professionnelle</h3>
            </div>
            <div className="ml-4">
              {professionalExperience.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  title={item.title}
                  organization={item.organization}
                  description={item.description}
                  delay={0.1 * index}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <FaUsers className="text-primary-500 mr-3" size={24} />
              <h3 className="text-2xl font-semibold text-white">Activités extrascolaires</h3>
            </div>
            <div className="ml-4">
              {extracurricular.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  title={item.title}
                  organization={item.organization}
                  description={item.description}
                  delay={0.1 * index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
