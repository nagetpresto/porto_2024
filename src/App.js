import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';

function App() {
  return (
    <>
    <Header/>
    
    <main className='main'> 
      <Home />
      <About/>
      <Experience/>
    </main>
    </>
  );
}

export default App;
