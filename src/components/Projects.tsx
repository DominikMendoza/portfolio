import React from 'react';
import { personalData } from '../data';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 bg-[var(--color-dark-surface)] backdrop-blur-sm border border-white/5 rounded-lg shadow-lg"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-[var(--color-text-light)]">My Projects</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {personalData.projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-[var(--color-dark-bg)] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-bold text-[var(--color-accent-blue)] mb-2">{project.name}</h3>
            <p className="text-sm text-[var(--color-text-muted)] mb-3">{project.role} - {project.date}</p>
            <ul className="list-disc list-inside text-[var(--color-text-light)] space-y-1 mb-4">
              {project.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[var(--color-accent-purple)] hover:underline"
              >
                View on GitHub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
