import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-black text-dirtyWhite">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-red-500">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">I'm Joseph Collantes</p>
      </motion.div>
    </section>
  );
};

export default Home;
