import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Application de Livraison de Nourriture",
      description: "Une application mobile pour les services de livraison de nourriture avec authentification des utilisateurs, gestion des commandes et suivi en temps réel.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Flutter", "Dart", "Firebase", "VS Code"],
      githubLink: "https://github.com",
      liveLink: "#"
    },
    {
      title: "Traitement et Classification des Signaux ECG",
      description: "Modèle d'apprentissage profond pour la classification des signaux ECG afin d'identifier les anomalies cardiaques en utilisant des techniques avancées de traitement du signal.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Python", "MATLAB", "Apprentissage Profond", "TensorFlow"],
      githubLink: "https://github.com",
      liveLink: null
    },
    {
      title: "Projet de Stockage en Cloud",
      description: "Une solution de stockage basée sur le cloud utilisant AWS avec des pratiques DevOps pour le déploiement continu et la gestion de l'infrastructure.",
      image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["AWS", "DevOps", "CI/CD", "Terraform"],
      githubLink: "https://github.com",
      liveLink: null
    },
    {
      title: "Système Automatisé de Température",
      description: "Un système qui mesure la température et vérifie le port du masque, développé en utilisant Python, Arduino et divers capteurs.",
      image: "https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Python", "Arduino", "Capteurs", "Vision par Ordinateur"],
      githubLink: "https://github.com",
      liveLink: null
    },
    {
      title: "Estimation du Temps d'Arrivée des Bus",
      description: "Système pour estimer les temps d'arrivée des bus en utilisant la géolocalisation et les données de circulation via l'API Bing Maps.",
      image: "src/images.png",
      technologies: ["API Bing Maps", "Python", "Firebase", "VBA"],
      githubLink: "https://github.com",
      liveLink: null
    },
    {
      title: "Centre Météorologique",
      description: "Un centre de données météorologiques qui collecte, traite et affiche des informations météorologiques en utilisant l'API OpenWeather.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["API OpenWeather", "Python", "Firebase", "Raspberry Pi", "ReactJS"],
      githubLink: "https://github.com",
      liveLink: null
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mes <span>Projets</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
