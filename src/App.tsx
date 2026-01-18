import React from 'react';
import { personalData } from './data';
import ExperienceTimeline from './components/ExperienceTimeline';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Hero Component
const Hero: React.FC = () => {
  return (
    <section id="hero" className="text-center py-20 px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-text-light">
        Hola, soy {personalData.name}
      </h1>
      <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto">
        {personalData.tagline}
      </p>
      <a
        href="#projects"
        className="bg-accent-purple hover:bg-opacity-80 text-dark-bg font-bold py-3 px-8 rounded-full transition-colors inline-block"
      >
        Ver Proyectos
      </a>
    </section>
  );
};

// About Me Component
const AboutMe: React.FC = () => {
  const { education, interests, skills } = personalData;

  return (
    <section id="about" className="py-16 px-4 bg-dark-surface rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-12 text-text-light">Sobre Mí</h2>
      <div className="max-w-4xl mx-auto text-text-light space-y-6">
        <p className="text-lg">
          Soy un estudiante de Ingeniería de Software en la{' '}
          <span className="text-accent-blue">{education.university}</span>, con un GPA de{' '}
          <span className="text-accent-blue">{education.gpa}</span>. Mi tesis se centra en el{' '}
          <span className="italic">"{education.thesis.split(' - ')[0]}"</span>. Me apasiona construir soluciones que resuelvan problemas complejos.
        </p>
        <p className="text-lg">
          Mis intereses incluyen: <span className="text-accent-blue">{interests.join(', ')}</span>. Siempre estoy buscando nuevos desafíos y oportunidades para aprender y crecer.
        </p>
        <div className="pt-4">
          <h3 className="text-2xl font-bold mb-4">Habilidades Técnicas</h3>
          <div className="flex flex-wrap gap-2">
            {skills.technical.map((skill, index) => (
              <span key={index} className="bg-accent-blue text-dark-bg px-3 py-1 rounded-full text-sm font-semibold">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-text-light font-sans">
      <header className="py-4 px-6 md:px-12 bg-dark-surface shadow-md">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <a href="#" className="text-2xl font-bold text-text-light hover:text-accent-blue transition-colors">Dominik.dev</a>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-accent-purple transition-colors">Sobre mí</a></li>
            <li><a href="#experience" className="hover:text-accent-purple transition-colors">Experiencia</a></li>
            <li><a href="#projects" className="hover:text-accent-purple transition-colors">Proyectos</a></li>
            <li><a href="#contact" className="hover:text-accent-purple transition-colors">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 md:px-12 py-8 space-y-20">
        <Hero />
        <AboutMe />
        <ExperienceTimeline />
        <Projects />
        <Contact />
      </main>

      <footer className="text-center py-8 text-text-muted">
        <p>&copy; {new Date().getFullYear()} {personalData.name}. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;