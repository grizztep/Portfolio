import { motion } from "framer-motion";

// Import skill images
import htmlImg from "../assets/skills/html.png";
import cssImg from "../assets/skills/css.png";
import jsImg from "../assets/skills/javascript.png";
import phpImg from "../assets/skills/php.png";
import javaImg from "../assets/skills/java.png";
import mysqlImg from "../assets/skills/mysql.png";
import csharpImg from "../assets/skills/csharp.png";
import pythonImg from "../assets/skills/python.png";
import nodeImg from "../assets/skills/nodejs.png";
import firebaseImg from "../assets/skills/firebase.png";
import gitImg from "../assets/skills/git.png";
import reactImg from "../assets/skills/react.png";
import tailwindImg from "../assets/skills/tailwind.png";
import figmaImg from "../assets/skills/figma.png";
import viteImg from "../assets/skills/vite.png";

const skills = [
  { name: "HTML", img: htmlImg, description: "Structures content for web pages." },
  { name: "CSS", img: cssImg, description: "Styles web pages with layouts and animations." },
  { name: "JavaScript", img: jsImg, description: "Adds interactivity and dynamic content to websites." },
  { name: "PHP", img: phpImg, description: "Handles backend logic for web applications." },
  { name: "Java", img: javaImg, description: "Great for enterprise and cross-platform apps." },
  { name: "MySQL", img: mysqlImg, description: "Manages and organizes structured databases." },
  { name: "C#", img: csharpImg, description: "Ideal for desktop apps and game development." },
  { name: "Python", img: pythonImg, description: "Versatile for web, AI, and automation." },
  { name: "Node.js", img: nodeImg, description: "Runs JavaScript on the server for fast apps." },
  { name: "Firebase", img: firebaseImg, description: "Google's platform for databases and auth." },
  { name: "Git", img: gitImg, description: "Tracks and manages code changes efficiently." },
  { name: "React", img: reactImg, description: "Builds fast and dynamic user interfaces." },
  { name: "Tailwind", img: tailwindImg, description: "Utility-first CSS for rapid styling." },
  { name: "Figma", img: figmaImg, description: "Designs UI/UX prototypes with collaboration." },
  { name: "Vite", img: viteImg, description: "Optimizes frontend development with speed." }
];

const About = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white"
    >
      <div className="w-full max-w-5xl flex flex-col items-center">
        {/* About Me Intro */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mb-16"
        >
          <h2 className="text-5xl font-extrabold text-gray-100 tracking-wide">About Me</h2>
          <p className="text-lg text-gray-300 mt-5 leading-relaxed">
            I'm a passionate developer skilled in modern web technologies. 
            I specialize in crafting <span className="text-red-500 font-semibold">interactive, high-performance</span> applications with clean and efficient code.
          </p>
        </motion.div>

        {/* Skills Grid - Optimized */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill }) => {
  return (
    <motion.div 
      className="relative flex flex-col items-center cursor-pointer w-28 h-32 group will-change-transform"
      whileHover={{ scale: 1.1, rotate: 1 }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {/* Image Container */}
      <div className="relative w-full h-24 flex items-center justify-center overflow-hidden rounded-xl shadow-lg transition-all duration-300">
        <img 
          src={skill.img} 
          alt={skill.name} 
          loading="lazy" // Optimized performance
          className="w-16 h-16 object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-300"
        />
        <div 
          className="absolute inset-0 flex items-center justify-center text-white text-xs font-semibold text-center p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 min-h-[60px] w-[120px] whitespace-normal"
        >
          {skill.description}
        </div>
      </div>

      {/* Skill Name with Red Hover Effect */}
      <motion.h3 
        className="mt-3 text-lg font-semibold text-gray-300 group-hover:text-red-500 transition-colors duration-300 text-center"
      >
        {skill.name}
      </motion.h3>
    </motion.div>
  );
};

export default About;
