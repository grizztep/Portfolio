import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-[#999999] to-white text-black"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl font-extrabold text-gray-800">Contact Me</h2>
        <p className="mt-4 text-lg text-gray-600">Let&apos;s work together! Reach out anytime.</p>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-2 text-sm text-gray-600"
      >
        Or email me directly: <span className="text-red-600 font-medium">collantes.csdev@gmail.com</span>
      </motion.p>

      {/* Social Icons */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-6 mt-10 justify-center"
      >
        <a 
          href="https://www.instagram.com/collantes.csdev/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-red-500 text-3xl transition-colors"
        >
          <FaInstagram />
        </a>
        <a 
          href="https://www.facebook.com/prtotyp" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-red-500 text-3xl transition-colors"
        >
          <FaFacebookF />
        </a>
        <a 
          href="https://www.linkedin.com/in/collantes-joseph-10736b332/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-red-500 text-3xl transition-colors"
        >
          <FaLinkedinIn />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
