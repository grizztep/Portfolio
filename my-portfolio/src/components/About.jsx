import { motion } from "framer-motion";
import { memo } from "react";

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
  { name: "HTML", img: htmlImg },
  { name: "CSS", img: cssImg },
  { name: "JavaScript", img: jsImg },
  { name: "PHP", img: phpImg },
  { name: "Java", img: javaImg },
  { name: "MySQL", img: mysqlImg },
  { name: "C#", img: csharpImg },
  { name: "Python", img: pythonImg },
  { name: "Git", img: gitImg },
  { name: "React", img: reactImg },
  { name: "Tailwind", img: tailwindImg },
  { name: "Figma", img: figmaImg },
];

// Container animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.3
    }
  }
};

// Individual skill card variants
const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.4
    }
  }
};

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
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mb-16"
        >
          <h2 className="text-5xl font-extrabold text-gray-100 tracking-wide">About Me</h2>
          <p className="text-lg text-gray-300 mt-5 leading-relaxed">
            I'm a <span className="text-red-500">BS Computer Science</span> graduate currently looking for opportunities to apply and grow my skills. I'm also open to freelance projects that match my expertise.
          </p>
        </motion.div>

        {/* Skills Grid - Optimized with staggered animation */}
        <motion.div 
          className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Memoized SkillCard component to prevent unnecessary re-renders
const SkillCard = memo(({ skill }) => {
  return (
    <motion.div 
      className="flex flex-col items-center cursor-pointer w-28 h-32 group"
      variants={skillVariants}
      whileHover={{ 
        scale: 1.05, 
        rotate: 1,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Image Container */}
      <div className="w-full h-24 flex items-center justify-center overflow-hidden rounded-xl shadow-lg transition-all duration-300">
        <img 
          src={skill.img} 
          alt={skill.name} 
          loading="lazy"
          className="w-16 h-16 object-contain"
          style={{ willChange: 'transform' }}
        />
      </div>

      {/* Skill Name */}
      <motion.h3 
        className="mt-3 text-lg font-semibold text-gray-300 group-hover:text-red-500 transition-colors duration-300 text-center"
      >
        {skill.name}
      </motion.h3>
    </motion.div>
  );
});

SkillCard.displayName = 'SkillCard';

export default About;