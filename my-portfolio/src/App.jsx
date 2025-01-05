import { useState } from 'react';
import './App.css';
import Hero from './pages/Hero';
import About from './pages/About';
import Project from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Navbar/>
      
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="Resume">
        <Resume/>
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
