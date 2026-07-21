import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "C", "Python"]
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "SQLite"]
    },
    {
      title: "Libraries & Tools",
      skills: ["OpenCV", "NumPy", "Pandas", "Streamlit"]
    },
    {
      title: "Core Concepts",
      skills: ["OOP", "Data Structures", "Computer Vision", "Machine Learning"]
    }
  ];

  return (
    <section className="container section" id="skills" style={{ paddingBottom: '100px' }}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills & Technologies
      </motion.h2>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '2rem' 
      }}>
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            style={{ 
              padding: '2rem', 
              background: '#fff', 
              borderRadius: '24px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
              border: '1px solid #eaeaea'
            }}
          >
            <h3 style={{ 
              marginBottom: '1.5rem',
              fontSize: '1.3rem',
              fontWeight: 800
            }}>
              {category.title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {category.skills.map((skill, i) => (
                <span key={i} style={{
                  padding: '0.5rem 1rem',
                  background: '#f5f5f5',
                  color: 'var(--text-primary)',
                  borderRadius: '12px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  border: '1px solid #e0e0e0'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'var(--text-primary)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = '#f5f5f5';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
