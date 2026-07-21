import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Face Recognition Attendance System",
      description: "Developed a face recognition application to identify and verify users using computer vision and deep learning techniques. Implemented real-time face detection.",
      technologies: ["Python", "OpenCV", "Face Recognition", "NumPy"]
    },
    {
      title: "AI Photo & Video Analyzer",
      description: "Built an AI-powered application to analyze images and videos for object detection, scene understanding, and visual insights. Designed an intuitive interface.",
      technologies: ["Python", "OpenCV", "AI/ML"]
    },
    {
      title: "AQI Database & Monitoring System",
      description: "Developed a system to store, manage, and visualize Air Quality Index (AQI) data from multiple sources. Built dashboards to display trends.",
      technologies: ["Python", "SQL", "Pandas"]
    }
  ];

  return (
    <section className="container section" id="projects" style={{ backgroundColor: 'var(--text-primary)', color: '#fff', padding: '100px 0', margin: '4rem 0', borderRadius: '40px' }}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ color: 'var(--accent-yellow)' }}
        >
          Featured Projects
        </motion.h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '3rem' 
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              style={{
                background: '#1a1a1a',
                padding: '2.5rem',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #333'
              }}
            >
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem', color: '#fff' }}>
                {project.title}
              </h3>
              <p style={{ color: '#a0a0a0', lineHeight: 1.6, flexGrow: 1, marginBottom: '2rem' }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {project.technologies.map((tech, i) => (
                  <span key={i} style={{
                    padding: '0.4rem 1rem',
                    background: 'rgba(229, 255, 0, 0.1)',
                    color: 'var(--accent-yellow)',
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    fontWeight: 700
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
