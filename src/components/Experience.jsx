import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Experience() {
  const containerRef = useRef(null);
  
  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Title moves from right (50%) to left (-20%) as you scroll
  const titleX = useTransform(scrollYProgress, [0, 1], ["50%", "-20%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const experiences = [
    {
      title: "Bachelor of Technology (B.Tech) CSE",
      institution: "Guru Gobind Singh Indraprastha University (GGSIPU)",
      date: "2025 - Present",
      description: "Pursuing Computer Science and Engineering. Developing problem-solving and analytical skills through coursework and academic projects."
    },
    {
      title: "Senior Secondary (Class XII)",
      institution: "St. John's School Marhauli (Varanasi)",
      date: "2025",
      description: "CISCE Board"
    },
    {
      title: "Secondary (Class X)",
      institution: "St. John's School Marhauli (Varanasi)",
      date: "2023",
      description: "ICSE Board"
    }
  ];

  return (
    <section className="section" id="experience" ref={containerRef} style={{ overflow: 'hidden' }}>
      
      {/* Scroll-driven title animation */}
      <motion.h2 
        className="section-title"
        style={{ 
          x: titleX,
          opacity: titleOpacity,
          whiteSpace: 'nowrap',
          fontSize: '6vw',
          color: 'rgba(0,0,0,0.05)',
          WebkitTextStroke: '1px var(--text-primary)',
          textAlign: 'center',
          marginBottom: '4rem'
        }}
      >
        EDUCATION & EXPERIENCE
      </motion.h2>
      
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: index * 0.2, type: 'spring', bounce: 0.3 }}
            style={{ 
              padding: '2rem 0', 
              borderBottom: index !== experiences.length - 1 ? '2px solid #eaeaea' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>{exp.title}</h3>
              <span style={{ 
                background: 'var(--accent-yellow)', 
                padding: '0.3rem 1rem', 
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: '0.9rem',
                border: '1px solid #111'
              }}>
                {exp.date}
              </span>
            </div>
            <h4 style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '1.1rem' }}>{exp.institution}</h4>
            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '700px' }}>
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
