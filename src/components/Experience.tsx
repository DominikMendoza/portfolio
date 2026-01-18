import React from 'react';
import { personalData } from '../data';
import { motion } from 'framer-motion';

interface TimelineEvent {
  type: 'company' | 'role';
  title: string;
  subtitle: string; // Company location or role date
  description?: string[];
  highlights?: string[];
  date: string; // For sorting
  companyName?: string; // For role events
}

const Experience: React.FC = () => {
  const { experience } = personalData;

  // Flatten and sort all experience events chronologically
  const timelineEvents: TimelineEvent[] = [];

  experience.forEach(exp => {
    // Add company start as an event
    timelineEvents.push({
      type: 'company',
      title: exp.company,
      subtitle: exp.location,
      date: exp.roles[0].date.split(' – ')[0], // Use start date of first role for company entry
    });

    // Add each role as a separate event
    exp.roles.forEach(role => {
      timelineEvents.push({
        type: 'role',
        title: role.title,
        subtitle: role.date,
        description: exp.description, // Reusing company description for all roles for now
        highlights: exp.highlights,
        date: role.date.split(' – ')[0],
        companyName: exp.company,
      });
    });
  });

  // Sort events chronologically (simplistic date parsing for example)
  timelineEvents.sort((a, b) => {
    // A more robust date parsing would be needed for complex date strings
    const dateA = new Date(a.date.replace('Present', '2100'));
    const dateB = new Date(b.date.replace('Present', '2100'));
    return dateA.getTime() - dateB.getTime();
  });

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
        {timelineEvents.map((event, index) => (
          <div key={index} className="relative pl-12 pb-8 last:pb-0">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 h-full w-0.5 bg-[var(--color-accent-purple)]"></div>
            
            {/* Dot for event */}
            <div 
              className={`absolute left-0 top-0 h-6 w-6 rounded-full border-2 border-[var(--color-dark-bg)] flex items-center justify-center
                ${event.type === 'company' ? 'bg-[var(--color-accent-blue)]' : 'bg-[var(--color-accent-purple)]'}
              `}
            >
              {/* Optional: inner dot or icon */}
            </div>

            <div className="ml-4">
              <h3 className={`text-xl font-bold ${event.type === 'company' ? 'text-[var(--color-accent-blue)] text-2xl' : 'text-[var(--color-text-light)]'}`}>
                {event.title}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)]">{event.subtitle}</p>
              {event.companyName && <p className="text-xs text-[var(--color-text-muted)] italic">{event.companyName}</p>}

              {(event.description && event.type === 'role') && ( // Only show description for role events
                <ul className="list-disc list-inside text-[var(--color-text-light)] pl-4 mt-2">
                  {event.description.map((item, descIndex) => (
                    <li key={descIndex}>{item}</li>
                  ))}
                </ul>
              )}
              {event.highlights && (
                <ul className="list-disc list-inside text-[var(--color-text-light)] pl-4 mt-2">
                  {event.highlights.map((item, highlightIndex) => (
                    <li key={highlightIndex} className="text-[var(--color-accent-purple)] font-medium">{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
