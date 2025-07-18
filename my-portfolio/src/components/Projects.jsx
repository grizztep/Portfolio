import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="h-screen flex flex-col items-center justify-center px-6 py-12 
                 bg-gradient-to-b from-gray-800 via-gray-500 to-[#999999] text-black"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-5xl font-extrabold text-gray-100 drop-shadow-md">My Projects</h2>
        <p className="mt-4 text-lg text-gray-300">I’m currently in the process of gathering the source codes for my past projects. They will be displayed here once everything is organized.</p>
      </motion.div>
    </section>
  );
};

export default Projects;
