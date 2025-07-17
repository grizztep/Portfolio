import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";
import { Menu, X } from "lucide-react"; // Icon for mobile menu
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles/index.css";
import { ChevronUp } from "lucide-react"; // Import the icon

function App() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Collantes | Portfolio";

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const percentage = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg- text-black">
      {/* Glassmorphism Navbar */}
      <motion.nav
        className="w-full py-4 px-8 bg-black shadow-lg border-b border-white/10"
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-xl font-bold text-red-500">Collantes.dev</a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6">
            {["home", "about", "projects", "contact"].map((section) => (
              <Link 
                key={section} 
                to={section} 
                smooth={true} 
                duration={500}
                spy={true}
                className="relative cursor-pointer text-white text-lg font-medium hover:text-red-500 transition group"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {/* Underline Animation */}
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.3 }}
            className="w-full bg-black shadow-lg md:hidden"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {["home", "about", "projects", "contact"].map((section) => (
                <Link 
                  key={section} 
                  to={section} 
                  smooth={true} 
                  duration={500}
                  spy={true}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-lg font-medium hover:text-red-500 transition"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Sections */}
      <Home />
      <About />
      <Projects />
      <Contact />

      {/* Scroll-to-Top Button */}
      {scrollPercentage > 10 && (
        <motion.button 
          onClick={() => scroll.scrollToTop()} 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}  // Button scales up slightly on hover
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-xl transition-all"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            {/* First Wave Layer */}
            <motion.div 
              className="absolute bottom-0 left-0 w-full bg-red-500 opacity-70 wave"
              style={{ height: `${scrollPercentage}%` }}
              animate={{ y: [5, -5, 5] }}  
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />

            {/* Second Wave Layer (slower) */}
            <motion.div 
              className="absolute bottom-0 left-0 w-full bg-red-400 opacity-50 wave"
              style={{ height: `${scrollPercentage}%` }}
              animate={{ y: [-5, 5, -5] }}  
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />

            <ChevronUp className="absolute inset-0 m-auto text-white w-6 h-6" />
          </div>
        </motion.button>
      )}
    </div>
  );
}

export default App;
