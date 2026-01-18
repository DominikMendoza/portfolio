import React from 'react';
import { personalData } from '../data';
import { motion } from 'framer-motion';

const Achievements: React.FC = () => {
  const { leadershipAndActivities, skills } = personalData;

  return (
    <motion.section
      id="achievements"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 bg-[var(--color-dark-surface)] backdrop-blur-sm border border-white/5 rounded-lg shadow-lg"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-[var(--color-text-light)]">Achievements & Certifications</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Awards */}
        <div className="bg-[var(--color-dark-bg)] p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-[var(--color-accent-blue)] mb-4">Awards & Competitions</h3>
          <div className="space-y-4">
            {leadershipAndActivities.map((activity, index) => (
              <div key={index}>
                <h4 className="text-xl font-semibold">{activity.organization}</h4>
                <p className="text-[var(--color-text-muted)] text-sm">{activity.role} | {activity.date}</p>
                <ul className="list-disc list-inside mt-2">
                  {activity.description.slice(1).map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-[var(--color-dark-bg)] p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-[var(--color-accent-blue)] mb-4">Certifications</h3>
          <div className="space-y-4">
            {skills.certifications.map((cert, index) => (
              <div key={index}>
                <p className="text-xl font-semibold">{cert}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default Achievements;
