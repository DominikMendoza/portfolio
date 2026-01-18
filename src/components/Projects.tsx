import React from 'react';
import { personalData } from '../data';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-dark-surface rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-12 text-text-light">Mis Proyectos</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {personalData.projects.map((project, index) => (
          <div key={index} className="bg-dark-bg p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-accent-blue mb-2">{project.name}</h3>
            <p className="text-sm text-text-muted mb-3">{project.role} - {project.date}</p>
            <ul className="list-disc list-inside text-text-light space-y-1 mb-4">
              {project.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent-purple hover:underline"
              >
                Ver en GitHub
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
