import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="h-screen flex items-center justify-center bg-black text-dirtyWhite">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="mt-4 text-lg">Let's work together! Reach out to me anytime.</p>
      </motion.div>
    </section>
  );
};

export default Contact;
