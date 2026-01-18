import React from 'react';
import { personalData } from '../data';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  const { education } = personalData;

  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 bg-[var(--color-dark-surface)] backdrop-blur-sm border border-white/5 rounded-lg shadow-lg"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-[var(--color-text-light)]">Education</h2>
      <div className="max-w-4xl mx-auto p-8 bg-[var(--color-dark-bg)] rounded-lg">
        <h3 className="text-3xl font-bold text-[var(--color-accent-blue)]">{education.university}</h3>
        <p className="text-xl text-[var(--color-text-light)] mt-2">{education.degree}</p>
        <p className="text-md text-[var(--color-text-muted)] mb-4">{education.graduation}</p>
        
        <div className="mt-4 space-y-2 text-lg">
          <p><span className="font-semibold">GPA:</span> {education.gpa}</p>
          <p><span className="font-semibold">Thesis:</span> <span className="italic">{education.thesis}</span></p>
          <p><span className="font-semibold">Relevant Courses:</span> {education.relevantCourses.join(', ')}</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
