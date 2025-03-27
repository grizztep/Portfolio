import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles/index.css";

function App() {
  useEffect(() => {
    document.title = "Grizz | Portfolio";
  }, []);

  return (
    <div className="bg-dirtyWhite text-black">
      <nav className="fixed w-full bg-black text-dirtyWhite py-4 shadow-lg">
        <div className="container mx-auto flex justify-center space-x-6">
          <Link className="cursor-pointer hover:text-lightGray" to="home" smooth={true} duration={500}>Home</Link>
          <Link className="cursor-pointer hover:text-lightGray" to="about" smooth={true} duration={500}>About</Link>
          <Link className="cursor-pointer hover:text-lightGray" to="projects" smooth={true} duration={500}>Projects</Link>
          <Link className="cursor-pointer hover:text-lightGray" to="contact" smooth={true} duration={500}>Contact</Link>
        </div>
      </nav>

      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
