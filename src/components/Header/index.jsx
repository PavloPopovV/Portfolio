import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../../ui/Logo";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <header className="md:overflow-hidden mb-[30px] md:mb-0">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-between items-center">
            <Logo />
            <Navigation />
          </div>
        </motion.div>
      </AnimatePresence>
    </header>
  );
};

export default Header;
