import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
      <div className="noise-overlay"></div>
      
      <div className="container">
        <nav className="nav">
          <ul style={{ padding: 0 }}>
            <li><a href="#">Home</a></li>
            <li><a href="#experience">About Me</a></li>
          </ul>
          <ul style={{ padding: 0 }}>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </nav>
      </div>

      <Hero />
      
      <div style={{ backgroundColor: '#ffffff', borderTopLeftRadius: '40px', borderTopRightRadius: '40px', marginTop: '5rem', paddingBottom: '4rem' }}>
        <div style={{ paddingTop: '5rem' }}>
          <Experience />
          <Projects />
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default App;
