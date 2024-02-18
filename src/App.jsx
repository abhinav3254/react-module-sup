import React, { useState } from 'react';
import './App.css';
import Home from './Home/Home'
import About from './About/About'
import Skills from './Skills/Skills'
import Nav from './Nav/Nav'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
    // console.log(`app language :- ${selectedLanguage}`);
  };


  return (
    <>
      <Router>
        <Nav onSelectLanguage={handleSelectLanguage} />
        <div className='nav-sep'>
          <Routes>
            <Route path="/" element={<Home selectedLanguage={selectedLanguage} />} />
            <Route path="/about" element={<About selectedLanguage={selectedLanguage} />} />
            <Route path="/skills" element={<Skills selectedLanguage={selectedLanguage} />} />
            <Route path="/projects" element={<Projects selectedLanguage={selectedLanguage} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;