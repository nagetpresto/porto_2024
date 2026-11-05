import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import { useState } from 'react';
import Project from './components/project/Project';
import Skill from './components/skills/Skill';
import Education from './components/education/Education';
import Training from './components/training/Training';

function App() {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <>
    <Header activeNav={activeNav} setActiveNav={setActiveNav}/>
    
    <main className='main'> 
      <Home  activeNav={activeNav} setActiveNav={setActiveNav}/>
      <About/>
      <Experience/>
      <Education/>
      <Training/>
      <Project/>
      <Skill/>
      <Contact/>
    </main>
    </>
  );
}

export default App;
