import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import profilePic from "../assets/profile.jpg"; // Make sure this is a high-quality image

const Home = () => {
  const fullText = "Hi, I'm Joseph";
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section id="home" className="h-screen flex flex-col md:flex-row items-center justify-center bg-black text-dirtyWhite px-6 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl">
        
        {/* Left - Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            {text.includes("Joseph") ? (
              <>
                Hi, I'm <span className="text-red-500">Joseph</span>
              </>
            ) : (
              text
            )}
            {showCursor && !isTypingComplete && <span className="text-red-500">|</span>}
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-4 text-lg text-gray-400"
          >
            Programmer | Building Seamless Digital Solutions
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a href="#contact" className="px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-600 transition">
              Hire Me
            </a>
            <a href="#projects" className="px-6 py-3 border-2 border-red-500 text-red-500 text-lg font-semibold rounded-lg hover:bg-red-500 hover:text-white transition">
              View Projects
            </a>
          </motion.div>
        </motion.div>

        {/* Right - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-48 sm:w-56 md:w-72 lg:w-80 h-auto">
            <motion.img
              src={profilePic}
              alt="Profile"
              className="w-full h-auto object-cover rounded-full shadow-lg border-4 border-red-500 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
