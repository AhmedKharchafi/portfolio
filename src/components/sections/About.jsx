import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          À propos de <span>Moi</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8 flex justify-center md:justify-start">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary-500 shadow-lg">
              <img
                src="src/pic.jpg"
                alt="Profil"
                className="rounded-full object-cover object-fit"
                style={{}}
              />
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-primary-500 mb-4">Étudiant en ingénierie des systèmes intelligents</h3>
            <p className="text-gray-300 mb-6">
              Je suis un étudiant passionné en ingénierie des systèmes intelligents, avec un fort intérêt pour l'intelligence artificielle,
              la science des données, et un enthousiasme croissant pour le DevOps. Je suis à la recherche d'un stage pour mettre en pratique 
              mes compétences techniques, renforcer mon expérience, et contribuer à des projets innovants dans ces domaines.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center text-gray-300">
                <div className="mr-3 text-primary-500">
                  <FaUser />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Âge</p>
                  <p>22 ans</p>
                </div>
              </div>
              
              <div className="flex items-center text-gray-300">
                <div className="mr-3 text-primary-500">
                  <FaGraduationCap />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Études</p>
                  <p>ENSIAS, Rabat</p>
                </div>
              </div>
              
              <div className="flex items-center text-gray-300">
                <div className="mr-3 text-primary-500">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Localisation</p>
                  <p>Rabat, Maroc</p>
                </div>
              </div>
              
              <div className="flex items-center text-gray-300">
                <div className="mr-3 text-primary-500">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Téléphone</p>
                  <p>+212 6 24 38 76 02</p>
                </div>
              </div>
              
              <div className="flex items-center text-gray-300 col-span-1 sm:col-span-2">
                <div className="mr-3 text-primary-500">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p>ahmed_kharchafi@um5.ac.ma</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold text-primary-500 mb-4">Langues</h3>
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Arabe</span>
                <span className="text-primary-500">Langue maternelle</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '100%' }}></div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Français</span>
                <span className="text-primary-500">Courant</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Anglais</span>
                <span className="text-primary-500">Courant</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-primary-500 mb-4 mt-6">Centres d'intérêt</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-secondary-700 text-gray-300 px-4 py-2 rounded-full">Volley-ball</span>
              <span className="bg-secondary-700 text-gray-300 px-4 py-2 rounded-full">Musique</span>
              <span className="bg-secondary-700 text-gray-300 px-4 py-2 rounded-full">Jeux vidéo</span>
              <span className="bg-secondary-700 text-gray-300 px-4 py-2 rounded-full">Technologie</span>
              <span className="bg-secondary-700 text-gray-300 px-4 py-2 rounded-full">Recherche en IA</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
