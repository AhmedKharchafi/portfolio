import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const TimelineItem = ({ year, title, institution, description, delay }) => {
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
      <p className="text-gray-400 mb-2">{institution}</p>
      {description && <p className="text-gray-300">{description}</p>}
    </motion.div>
  );
};

const Education = () => {
  const educationItems = [
    {
      year: "2022 - Présent",
      title: "Génie des Systèmes Intelligents",
      institution: "École Nationale Supérieure d'Informatique et d'Analyse des Systèmes (ENSIAS), Rabat",
      description: "Spécialisation en ingénierie des systèmes intelligents avec un accent sur l'IA et la science des données."
    },
    {
      year: "2020 - 2022",
      title: "Classes Préparatoires",
      institution: "Classes Préparatoires aux Grandes Écoles TSI (Technologie et Sciences Industrielles), Béni Mellal",
      description: "Programme intensif de deux ans préparant aux concours d'entrée aux écoles d'ingénieurs."
    },
    {
      year: "2019 - 2020",
      title: "Baccalauréat Sciences et Technologies Mécaniques",
      institution: "Lycée MED VI AZILAL",
      description: "Enseignement secondaire axé sur les sciences et technologies mécaniques."
    }
  ];

  const certifications = [
    {
      year: "2025 - Présent",
      title: "AWS Academy Machine Learning Foundations",
      institution: "Amazon Web Services",
      description: "En cours"
    },
    {
      year: "2025 - Présent",
      title: "AWS Academy Cloud Foundations",
      institution: "Amazon Web Services",
      description: "En cours"
    },
    {
      year: "2025 - Présent",
      title: "AWS Academy Lab Project - Cloud Web Application Builder",
      institution: "Amazon Web Services",
      description: "En cours"
    },
    {
      year: "2025 - Présent",
      title: "AWS Academy Cloud Architecting",
      institution: "Amazon Web Services",
      description: "En cours"
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mon <span>Parcours</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <FaGraduationCap className="text-primary-500 mr-3" size={24} />
              <h3 className="text-2xl font-semibold text-white">Parcours Académique</h3>
            </div>
            <div className="ml-4">
              {educationItems.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  title={item.title}
                  institution={item.institution}
                  description={item.description}
                  delay={0.1 * index}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <FaGraduationCap className="text-primary-500 mr-3" size={24} />
              <h3 className="text-2xl font-semibold text-white">Certifications</h3>
            </div>
            <div className="ml-4">
              {certifications.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  title={item.title}
                  institution={item.institution}
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

export default Education;
