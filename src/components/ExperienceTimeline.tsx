import React from 'react';
import { personalData } from '../data';

interface RoleProps {
  title: string;
  date: string;
  description?: string[];
  highlights?: string[];
}

const RoleEntry: React.FC<RoleProps> = ({ title, date, description, highlights }) => (
  <div className="mb-4">
    <h3 className="text-xl font-semibold text-accent-blue">{title}</h3>
    <p className="text-sm text-text-muted mb-2">{date}</p>
    {description && (
      <ul className="list-disc list-inside text-text-light pl-4">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}
    {highlights && (
      <ul className="list-disc list-inside text-text-light pl-4 mt-2">
        {highlights.map((item, index) => (
          <li key={index} className="text-accent-purple font-medium">{item}</li>
        ))}
      </ul>
    )}
  </div>
);

const ExperienceTimeline: React.FC = () => {
  const { experience, education } = personalData;

  return (
    <section id="experience" className="py-16 px-4 bg-dark-surface rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-12 text-text-light">Experiencia & Educación</h2>
      <div className="max-w-4xl mx-auto">
        {experience.map((exp, expIndex) => (
          <div key={expIndex} className="relative pl-8 pb-8 last:pb-0">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 h-full w-0.5 bg-accent-purple"></div>
            {/* Dot */}
            <div className="absolute left-[-6px] top-0 h-3 w-3 rounded-full bg-accent-purple border-2 border-dark-bg"></div>

            <h3 className="text-2xl font-bold text-text-light">{exp.company}</h3>
            <p className="text-text-muted mb-4">{exp.location}</p>

            {exp.roles.map((role, roleIndex) => (
              <RoleEntry key={roleIndex} {...role} description={exp.description} highlights={exp.highlights} />
            ))}
          </div>
        ))}

        {/* Education Entry */}
        <div className="relative pl-8 pt-8">
          {/* Vertical line, continued from last experience if necessary, or start new */}
          {experience.length > 0 && <div className="absolute left-0 top-0 h-full w-0.5 bg-accent-purple"></div>}
          {/* Dot */}
          <div className="absolute left-[-6px] top-8 h-3 w-3 rounded-full bg-accent-blue border-2 border-dark-bg"></div>
          
          <h3 className="text-2xl font-bold text-text-light">{education.university}</h3>
          <p className="text-text-muted mb-4">Lima, Peru</p> {/* Assuming Lima for university */}
          <RoleEntry title={education.degree} date={education.graduation} />
          <p className="text-text-light mt-2">GPA: {education.gpa}</p>
          <p className="text-text-light">Thesis: <span className="italic">{education.thesis}</span></p>
          <p className="text-text-light">Cursos Relevantes: {education.relevantCourses.join(', ')}</p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
