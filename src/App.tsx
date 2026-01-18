import React from 'react';
import { personalData } from './data';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { motion } from 'framer-motion';

// Hero Component
const Hero: React.FC = () => {
  return (
    <motion.section 
      id="hero" 
      className="text-center py-20 px-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[var(--color-text-light)]">
        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-purple)] to-[var(--color-accent-blue)]">{personalData.name}</span>
      </h1>
      <p className="text-xl text-[var(--color-text-muted)] mb-8 max-w-2xl mx-auto">
        {personalData.tagline}
      </p>
      <motion.a
        href="#projects"
        className="bg-[var(--color-accent-purple)] text-[var(--color-dark-bg)] font-bold py-3 px-8 rounded-full inline-block"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View Projects
      </motion.a>
    </motion.section>
  );
};

// About Me Component
const AboutMe: React.FC = () => {
  const { interests, skills } = personalData;

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 bg-[var(--color-dark-surface)] backdrop-blur-sm border border-white/5 rounded-lg shadow-lg"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-[var(--color-text-light)]">About Me</h2>
      <div className="max-w-4xl mx-auto text-[var(--color-text-light)] space-y-6">
        <p className="text-lg">
          I am a passionate Software Engineer focused on building solutions that solve complex problems. I am always looking for new challenges and opportunities to learn and grow.
        </p>
        <p className="text-lg">
          My interests include: <span className="text-[var(--color-accent-blue)]">{interests.join(', ')}</span>.
        </p>
        <div className="pt-4">
          <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.technical.map((skill, index) => (
              <motion.span 
                key={index} 
                className="bg-[var(--color-accent-blue)] text-[var(--color-dark-bg)] px-3 py-1 rounded-full text-sm font-semibold"
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};


function App() {
  return (
    <div className="min-h-screen bg-[var(--color-dark-bg)] bg-[var(--background-image-radial-gradient)] text-[var(--color-text-light)] font-[var(--font-family-sans)]">
      <header className="sticky top-0 z-50 py-4 px-6 md:px-12 bg-[var(--color-dark-surface)] backdrop-blur-lg border-b border-white/10 shadow-md">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <a href="#" className="text-2xl font-bold text-[var(--color-text-light)] hover:text-[var(--color-accent-blue)] transition-colors">Dominik.dev</a>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-[var(--color-accent-purple)] transition-colors">About</a></li>
            <li><a href="#experience" className="hover:text-[var(--color-accent-purple)] transition-colors">Experience</a></li>
            <li><a href="#projects" className="hover:text-[var(--color-accent-purple)] transition-colors">Projects</a></li>
            <li><a href="#education" className="hover:text-[var(--color-accent-purple)] transition-colors">Education</a></li>
            <li><a href="#achievements" className="hover:text-[var(--color-accent-purple)] transition-colors">Achievements</a></li>
            <li><a href="#contact" className="hover:text-[var(--color-accent-purple)] transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 md:px-12 py-8 space-y-20">
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>

      <footer className="text-center py-8 text-[var(--color-text-muted)]">
        <p>&copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;