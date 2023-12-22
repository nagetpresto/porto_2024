import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import { useState } from 'react';

function App() {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <>
    <Header activeNav={activeNav} setActiveNav={setActiveNav}/>
    
    <main className='main'> 
      <Home  activeNav={activeNav} setActiveNav={setActiveNav}/>
      <About/>
      <Experience/>
      <Contact/>
    </main>
    </>
  );
}

export default App;
