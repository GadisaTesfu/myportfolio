import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Intro from './components/body/Intro';
import Header from './components/header/Header';
import Skill from './components/body/Skill';
import Project from './components/body/Project';
import Footer from './components/footer/Footer';
import './App.css';
import './assets/css/style.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
