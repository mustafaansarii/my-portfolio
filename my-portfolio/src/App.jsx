import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Hero from './pages/Hero';
import About from './pages/About';
import Project from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Admin from './Admin/Admin';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar is outside of Routes to ensure it's displayed on all pages */}
        

        <Routes>
          {/* Default Routes */}
          <Route
            path="/"
            element={
              <>
              <Navbar />
                <Hero />
                <div id="about">
                  <About />
                </div>
                <div id="Resume">
                  <Resume />
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
              </>
            }
          />

          {/* Admin Route */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
