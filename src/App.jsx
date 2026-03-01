import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import "./styles/globals.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Testimonials />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
