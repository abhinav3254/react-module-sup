import React, { useState } from 'react';
import './App.css';
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Nav from './components/Nav/Nav'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

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
        <Footer />
      </Router>
    </>
  );
}

export default App;