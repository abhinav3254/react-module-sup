import './App.css';
import Home from './Home/Home'
import About from './About/About'
import Skills from './Skills/Skills'
import Nav from './Nav/Nav'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;