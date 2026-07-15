import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Timeline from './sections/Timeline/Timeline';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <div className="divider" />
        <Timeline />
        <div className="divider" />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
