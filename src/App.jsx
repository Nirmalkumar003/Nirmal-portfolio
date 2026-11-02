
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";

import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "./styles/global.css";

function App() {
  return (
    <div className="app">
      <ParticleBackground />

      <Navbar />

      <main className="main-content">
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
