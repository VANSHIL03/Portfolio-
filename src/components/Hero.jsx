import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const [activeSkillIndex, setActiveSkillIndex] = useState(null);
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);

  // Scroll animations
  const { scrollY } = useScroll();
  
  // As you scroll down from 0 to 400px:
  // - The giant text moves from centered (-50%) to the left (-150%)
  const textX = useTransform(scrollY, [0, 500], ["-50%", "-120%"]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  // - The foreground content (image, cards) blurs and fades out
  const foregroundBlur = useTransform(scrollY, [0, 300], ["blur(0px)", "blur(20px)"]);
  const foregroundOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const foregroundY = useTransform(scrollY, [0, 400], [0, -100]);

  const heroSkills = [
    { name: "Python", desc: "Versatile language used for AI, data analysis, and backend." },
    { name: "Java", desc: "Robust object-oriented language for scalable apps." },
    { name: "ML/OpenCV", desc: "Computer vision and machine learning for image processing." },
    { name: "SQL", desc: "Database management, architecture, and data retrieval." }
  ];

  return (
    <section className="container section" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', paddingBottom: '10vh' }}>
      
      {/* Huge Background Text - Moves to the side on scroll */}
      <motion.div 
        className="bg-giant-text"
        style={{ 
          x: textX, 
          opacity: textOpacity,
          position: 'absolute',
          top: '50%',
          left: '50%',
          y: '-60%',
          fontSize: '25vw',
          fontWeight: 900,
          color: 'var(--accent-yellow)',
          zIndex: 0,
          whiteSpace: 'nowrap',
          letterSpacing: '-5px',
          pointerEvents: 'none'
        }}
      >
        VANSHIL
      </motion.div>

      {/* Foreground container - Blurs on scroll */}
      <motion.div style={{ filter: foregroundBlur, opacity: foregroundOpacity, y: foregroundY, width: '100%', zIndex: 1 }}>
        
        {/* Floating Cards and Center Image container */}
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          
          {/* Left Floating Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="glass-card"
            onClick={() => setIsProjectsExpanded(!isProjectsExpanded)}
            style={{ position: 'absolute', left: '10%', top: '20%', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(255,255,255,0.4)', cursor: 'pointer', maxWidth: '200px', zIndex: 3 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: 'var(--accent-yellow)', minWidth: '50px', height: '50px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.5rem' }}>
                V
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800 }}>3+</h4>
                <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Completed<br/>Projects</p>
              </div>
            </div>
            
            <AnimatePresence>
              {isProjectsExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <p style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                    Specializing in computer vision and full-stack web applications.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Profile Cutout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative', width: '450px', height: '550px', zIndex: 2 }}
          >
            <img 
              src="/profile.png" 
              alt="Vanshil Gupta"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'bottom',
                filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))'
              }}
            />
          </motion.div>

          {/* Right Floating Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="glass-card"
            style={{ position: 'absolute', right: '10%', top: '30%', padding: '1.5rem', background: 'rgba(255,255,255,0.4)', width: '220px', zIndex: 3 }}
          >
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', fontWeight: 700, fontSize: '1rem' }}>
              {heroSkills.map((skill, index) => (
                <li 
                  key={index}
                  style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
                  onClick={() => setActiveSkillIndex(activeSkillIndex === index ? null : index)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s', color: activeSkillIndex === index ? '#000' : 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent-yellow)' }}>■</span> 
                    {skill.name}
                  </div>
                  
                  <AnimatePresence>
                    {activeSkillIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: 1.4, paddingLeft: '1.2rem' }}>
                          {skill.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Bottom Text & Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ textAlign: 'center', marginTop: '3rem', zIndex: 3, position: 'relative' }}
        >
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '2rem' }}>
            Software Engineer,<br/>
            Applied Differently.
          </h1>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#projects" className="brutalist-button">View Projects</a>
            <a href="#experience" className="brutalist-button">About Me</a>
          </div>
          
          <div style={{ position: 'absolute', bottom: '10%', left: '5%', textAlign: 'left', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            Computer Science Student.<br/>
            That's Vanshil.
          </div>
          <div style={{ position: 'absolute', bottom: '10%', right: '5%', textAlign: 'left', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', maxWidth: '200px' }}>
            Building systems that merge creativity, technical excellence, and long-term value.
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
