import React from "react";
import Card from "../../components/Card";
import { AnimatePresence, motion } from "framer-motion";
import { works } from "../../data/work";

const Projects = () => {
  return (
    <section>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          <div className="lg:text-[16px] text-[14px] mb-[20px] sm:mb-[30px]">
            <p>
              Check out my latest projects, which describe the technologies
              used, as well as other tools I've worked with. Each project has a
              link to a GitHub repository where you can view the code and
              structure of the projects.
            </p>
          </div>
        </motion.div>
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 900 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -900 }}
            transition={{ duration: 0.6 }}
          >
            <ul className="md:h-[500px] w-full overflow-y-auto custom-scrollbar">
              {works.map((item) => (
                <li key={item.id}>
                  <Card data={item} />
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </AnimatePresence>
    </section>
  );
};

export default Projects;
