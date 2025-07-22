import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Eye, Code, Play, Pause } from "lucide-react";

import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";

const projectList = [
  {
    id: 1,
    title: "Non-Monetary Remuneration Monitoring",
    image: project1,
    description: "A web-based system designed to manage employee overtime records and compensatory time-off (CTO) balances. It automates the issuance of CTO certificates, significantly reducing manual HR workload and enhancing the accuracy and efficiency of HR operations at DOST-FPRDI.",
    technologies: ["PHP", "Bootstrap", "Laravel", "MySQL"],
    category: "Web Application"
  },
  {
    id: 2,
    title: "Early Warning System",
    image: project2,
    description: "A predictive web platform that utilizes a regression model trained on five years of historical dengue data, alongside environmental factors, to forecast potential outbreaks. Integrated with an SMS alert system to deliver real-time notifications, enabling early response and preventive action.",
    technologies: ["Python", "Flask", "Firebase"],
    category: "Web Application"
  },
  {
    id: 3,
    title: "Catering Reservation System",
    image: project3,
    description: "A desktop application for managing catering service reservations. It simplifies booking workflows, tracks orders, and maintains organized records, offering a streamlined solution for both customers and service providers.",
    technologies: ["Java", "NetBeans", "MySQL"],
    category: "Desktop Application"
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectList.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projectList.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projectList.length) % projectList.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 
                 bg-gradient-to-b from-gray-800 via-gray-500 to-[#999999] text-black"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-5xl font-extrabold text-gray-100 drop-shadow-md mb-4">
          My Projects
        </h2>
        <p className="text-lg text-gray-300">
          Explore my featured work and creative solutions
        </p>
      </motion.div>

      {/* Main Showcase Container */}
      <div 
        className="relative w-full max-w-5xl mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project Display Area */}
        <div className="relative h-[450px] mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -300, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute inset-0"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 overflow-hidden shadow-2xl h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={projectList[currentIndex].image}
                      alt={projectList[currentIndex].title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="px-3 py-1 bg-white/90 text-gray-800 rounded-full text-sm font-semibold backdrop-blur-sm">
                        {projectList[currentIndex].category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-3xl font-bold text-gray-100 mb-4">
                        {projectList[currentIndex].title}
                      </h3>
                      
                      <p className="text-gray-200 text-base leading-relaxed mb-6">
                        {projectList[currentIndex].description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-gray-300 text-sm font-semibold mb-3 uppercase tracking-wide">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {projectList[currentIndex].technologies.map((tech, index) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 + index * 0.1 }}
                              className="px-3 py-1 bg-white/20 text-gray-100 rounded-lg text-sm border border-white/30 backdrop-blur-sm"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-3 bg-white text-gray-800 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                        >
                          <Eye className="w-4 h-4" />
                          View Project
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-3 bg-white/20 text-gray-100 rounded-full font-semibold hover:bg-white/30 transition-colors border border-white/30"
                        >
                          <Code className="w-4 h-4" />
                          Source Code
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 rounded-full p-3 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 rounded-full p-3 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        
      </div>
    </section>
  );
};

export default Projects;