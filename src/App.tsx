import useScrollReveal from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SobreMi from './components/SobreMi';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Navbar />
      <main id="contenido">
      <HeroSection />
      <Projects />
      <SobreMi />
      <Experience />
      <Skills />
      <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
