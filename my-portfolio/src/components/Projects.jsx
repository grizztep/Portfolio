import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="h-screen flex items-center justify-center bg-lightGray text-black">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold">My Projects</h2>
        <p className="mt-4 text-lg">Here are some of my works.</p>
      </motion.div>
    </section>
  );
};

export default Projects;
