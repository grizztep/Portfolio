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
import gitImg from "../assets/skills/git.png";
import reactImg from "../assets/skills/react.png";
import tailwindImg from "../assets/skills/tailwind.png";
import figmaImg from "../assets/skills/figma.png";

const skills = [
  { name: "HTML", img: htmlImg, level: 90 },
  { name: "CSS", img: cssImg, level: 90 },
  { name: "JavaScript", img: jsImg, level: 80 },
  { name: "PHP", img: phpImg, level: 80 },
  { name: "Java", img: javaImg, level: 90 },
  { name: "MySQL", img: mysqlImg, level: 90 },
  { name: "C#", img: csharpImg, level: 60 },
  { name: "Python", img: pythonImg, level: 90 },
  { name: "Git", img: gitImg, level: 80 },
  { name: "React", img: reactImg, level: 50 },
  { name: "Tailwind", img: tailwindImg, level: 90 },
  { name: "Figma", img: figmaImg, level: 50 },
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
            I’m a <span className="text-red-500">BS Computer Science</span> graduate currently looking for opportunities to apply and grow my skills. I’m also open to freelance projects that match my expertise.
          </p>
        </motion.div>

        {/* Skills Grid - Optimized */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
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
          loading="lazy"
          className="w-16 h-16 object-contain"
        />

        {/* Progress Bar on Hover */}
        <div className="absolute bottom-0 left-0 w-full h-6 bg-gray-700 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
          <div
            className="h-full bg-red-500 text-white text-xs font-semibold flex items-center justify-center transition-all duration-500"
            style={{ width: `${skill.level}%` }}
          >
            {skill.level}%
          </div>
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
