import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-center text-shadow text-[26px] sm:text-[40px] font-bold ">
          <span className="block md:inline"> 
            Hi<span className="text-yellow-400">,</span> I'm Pavlo
            <span className="text-yellow-400">. </span> 
          </span>
          I'm a frontend developer
          <span className="text-yellow-400">.</span>
        </h1>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
