import './App.css';
import Home from './Home/Home'
import About from './About/About'
import Skills from './Skills/Skills'
import Nav from './Nav/Nav'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;