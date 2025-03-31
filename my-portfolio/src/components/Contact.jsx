import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-b from-[#999999] to-white text-black"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-4xl font-extrabold text-gray-800">Contact Me</h2>
        <p className="mt-4 text-lg text-gray-600">Let's work together! Reach out to me anytime.</p>
      </motion.div>
    </section>
  );
};

export default Contact;
