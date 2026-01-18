import React from 'react';
import { personalData } from '../data';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const { experience } = personalData;

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 bg-[var(--color-dark-surface)] backdrop-blur-sm border border-white/5 rounded-lg shadow-lg"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-[var(--color-text-light)]">Experience</h2>
      <div className="max-w-4xl mx-auto">
        {experience.map((exp, expIndex) => (
          <div key={expIndex} className="relative pl-8 pb-4 last:pb-0">
            {/* Main vertical line */}
            <div className="absolute left-3 top-0 h-full w-0.5 bg-[var(--color-accent-purple)]"></div>
            
            {/* Company Entry */}
            <div className="relative mb-8">
              <div className="absolute left-[-8px] top-1 h-4 w-4 rounded-full bg-[var(--color-accent-blue)] border-2 border-[var(--color-dark-bg)]"></div>
              <h3 className="text-2xl font-bold text-[var(--color-text-light)] ml-8">{exp.company}</h3>
              <p className="text-[var(--color-text-muted)] ml-8">{exp.location}</p>
            </div>

            {/* Roles timeline */}
            <div className="ml-8">
              {exp.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="relative pb-6 last:pb-0 pl-8">
                   {/* Role Dot */}
                   <div className="absolute left-[-2px] top-1.5 h-3 w-3 rounded-full bg-[var(--color-accent-purple)] border-2 border-[var(--color-dark-bg)]"></div>
                  <h4 className="text-xl font-semibold text-[var(--color-text-light)]">{role.title}</h4>
                  <p className="text-sm text-[var(--color-text-muted)] mb-2">{role.date}</p>
                  <ul className="list-disc list-inside text-[var(--color-text-light)] pl-4 marker:text-[var(--color-accent-blue)]">
                    {role.description?.map((item, descIndex) => (
                      <li key={descIndex}>{item}</li>
                    ))}
                  </ul>
                   {exp.highlights && (
                      <ul className="list-disc list-inside text-[var(--color-text-light)] pl-4 mt-2">
                        {exp.highlights.map((item, index) => (
                          <li key={index} className="text-[var(--color-accent-purple)] font-medium">{item}</li>
                        ))}
                      </ul>
                    )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
