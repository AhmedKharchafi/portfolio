import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactInfo = ({ icon, title, value, link, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex items-start mb-6"
    >
      <div className="bg-secondary-800 p-3 rounded-full text-primary-500 mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-white mb-1">{title}</h3>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-primary-500 transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-gray-300">{value}</p>
        )}
      </div>
    </motion.div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contactez <span>Moi</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-white mb-6"
            >
              Entrer en contact
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-8"
            >
              N'hésitez pas à me contacter pour des opportunités professionnelles, des collaborations sur des projets ou toute question concernant mon travail ou mes compétences.
            </motion.p>
            
            <div>
              <ContactInfo
                icon={<FaMapMarkerAlt size={20} />}
                title="Localisation"
                value="Rabat, Maroc"
                delay={0.3}
              />
              
              <ContactInfo
                icon={<FaEnvelope size={20} />}
                title="Email"
                value="ahmed_kharchafi@um5.ac.ma"
                link="mailto:ahmed_kharchafi@um5.ac.ma"
                delay={0.4}
              />
              
              <ContactInfo
                icon={<FaPhone size={20} />}
                title="Téléphone"
                value="+212 6 24 38 76 02"
                link="tel:+212624387602"
                delay={0.5}
              />
              
              <ContactInfo
                icon={<FaLinkedin size={20} />}
                title="LinkedIn"
                value="Ahmed Kharchafi"
                link="https://linkedin.com/in/ahmed-kharchafi"
                delay={0.6}
              />
              
              <ContactInfo
                icon={<FaGithub size={20} />}
                title="GitHub"
                value="github.com/ahmed-kharchafi"
                link="https://github.com"
                delay={0.7}
              />
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-secondary-800 rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Envoyez-moi un message</h3>
            
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 bg-secondary-700 border border-secondary-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                  placeholder="Votre nom"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-secondary-700 border border-secondary-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                  placeholder="Votre email"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-300 mb-2">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 bg-secondary-700 border border-secondary-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                  placeholder="Sujet"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full p-3 bg-secondary-700 border border-secondary-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full">
                Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
