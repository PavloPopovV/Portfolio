import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Footer = () => {
  return (
    <footer>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          <ul className="flex gap-4 justify-center mb-[10px] md:mb-0">
            <li>
              <a href="https://t.me/p_popov777" className="uppercase text-sm font-medium relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-yellow-400 after:bottom-0 after:left-0 after:transform after:translate-x-[-100%] after:opacity-0 after:transition-all hover:after:translate-x-0 hover:after:opacity-100" target="_blank">telegram</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/pavlo-popov-128ve980/" className="uppercase text-sm font-medium relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-yellow-400 after:bottom-0 after:left-0 after:transform after:translate-x-[-100%] after:opacity-0 after:transition-all hover:after:translate-x-0 hover:after:opacity-100" target="_blank">linkedin</a>
            </li>
            <li>
              <a href="mailto:pavlo.popov0603@gmail.com" className="uppercase text-sm font-medium relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-yellow-400 after:bottom-0 after:left-0 after:transform after:translate-x-[-100%] after:opacity-0 after:transition-all hover:after:translate-x-0 hover:after:opacity-100" target="_blank">gmail</a>
            </li>
            <li>
              <a href="https://github.com/PavloPopovV" className="uppercase text-sm font-medium relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-yellow-400 after:bottom-0 after:left-0 after:transform after:translate-x-[-100%] after:opacity-0 after:transition-all hover:after:translate-x-0 hover:after:opacity-100" target="_blank">git</a>
            </li>
          </ul>
        </motion.div>
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
