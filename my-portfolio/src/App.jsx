import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";
import { Menu, X } from "lucide-react"; // Icon for mobile menu
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles/index.css";

function App() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Grizz | Portfolio";

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
    <div className="bg-dirtyWhite text-black">
      {/* Glassmorphism Navbar */}
      <motion.nav
        className="w-full py-4 px-8 bg-black shadow-lg border-b border-white/10"
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-xl font-bold text-red-500">Otep.dev</a>

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
          className="fixed bottom-6 right-6 w-14 h-14 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-xl transition-all hover:bg-red-500"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            {/* Water Fill Effect */}
            <motion.div 
              className="absolute bottom-0 left-0 w-full bg-blue-500"
              style={{ height: `${scrollPercentage}%` }}
              initial={{ height: "0%" }}
              animate={{ height: `${scrollPercentage}%` }}
              transition={{ duration: 0.3 }}
            />
            <span className="absolute inset-0 flex items-center justify-center font-bold">↑</span>
          </div>
        </motion.button>
      )}
    </div>
  );
}

export default App;
