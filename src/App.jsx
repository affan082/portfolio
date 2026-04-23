import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import About from './components/home/About';
import Skills from './components/home/Skills';
import Projects from './components/home/Projects';
import Contact from './components/home/Contact';

const LandingPage = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  </>
);

function App() {
  return (
    <Router>
      <div className="bg-background min-h-screen text-text font-sans selection:bg-primary selection:text-black">
        <Routes>
          <Route path="/" element={<LandingPage />} />          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
