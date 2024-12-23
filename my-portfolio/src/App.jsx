import { useState } from 'react'
import './App.css'
import Hero from './pages/Hero'
import About from './pages/About'
import Project from './pages/Projects'
import Contact from './pages/Contact'
import skills from './pages/Skills'
import Skills from './pages/Skills'
function App() {
  return (
    <div>
      <Hero />
      <About />
      <Skills/>
      <Project/>
      <Contact/>
      
      
    </div>
  );
}

export default App;