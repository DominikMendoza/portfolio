import React from 'react';
import { personalData } from '../data';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const { contact } = personalData;

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 bg-[var(--color-dark-surface)] backdrop-blur-sm border border-white/5 rounded-lg shadow-lg"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-[var(--color-text-light)]">Contact</h2>
      <div className="max-w-xl mx-auto text-center space-y-6">
        <p className="text-lg text-[var(--color-text-light)]">
          I am open to new opportunities and collaborations. Feel free to contact me!
        </p>
        <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-8">
          <motion.a
            href={`mailto:${contact.email}`}
            className="text-[var(--color-accent-purple)] hover:text-[var(--color-accent-blue)] text-xl font-medium flex items-center"
            whileHover={{ scale: 1.1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {contact.email}
          </motion.a>
          <motion.a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent-purple)] hover:text-[var(--color-accent-blue)] text-xl font-medium flex items-center"
            whileHover={{ scale: 1.1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.679-.217.679-.481 0-.239-.007-.87.01-1.703-2.782.601-3.37-1.341-3.37-1.341-.454-1.151-1.11-1.459-1.11-1.459-.908-.619.069-.607.069-.607 1.004.072 1.531 1.032 1.531 1.032.892 1.529 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.334-2.22-.251-4.555-1.116-4.555-4.956 0-1.091.39-1.984 1.029-2.682-.103-.252-.446-1.27.098-2.656 0 0 .84-.271 2.75 1.023A9.584 9.584 0 0112 4.043c.837.009 1.67.116 2.459.349 1.909-1.294 2.749-1.023 2.749-1.023.546 1.386.202 2.404.099 2.656.64.698 1.028 1.591 1.028 2.682 0 3.847-2.338 4.69-4.568 4.943.359.309.678.92.678 1.855 0 1.336-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.137 20.19 22 16.438 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </motion.a>
          <motion.a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent-purple)] hover:text-[var(--color-accent-blue)] text-xl font-medium flex items-center"
            whileHover={{ scale: 1.1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            LinkedIn
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;