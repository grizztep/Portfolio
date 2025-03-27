import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="h-screen flex items-center justify-center bg-dirtyWhite text-black">
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 text-lg">I'm passionate about web development and always eager to learn new technologies.</p>
      </motion.div>
    </section>
  );
};

export default About;
