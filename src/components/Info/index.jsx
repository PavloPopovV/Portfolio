import React from "react";
import Button from "../../ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import cv from "../../assets/img/cv.webp";
import pdf from "../../assets/pdf/Pavlo_Popov_cv.pdf";

const Info = () => {
  return (
    <div className="md:overflow-hidden md:flex items-center justify-between gap-[40px]">
      <AnimatePresence mode="wait">
        <div className="w-full md:mb-0 mb-[40px]">
          <motion.div
            initial={{ opacity: 0, x: -900 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 900 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="uppercase text-[28px] md:text-[40px] text-shadow mb-[5px] md:mb-[10px] ">
              Resume
            </h2>
            <div className="mb-[30px] md:mb-[30px]">
              <p className="lg:text-[16px] text-[14px] pl-[2px]">
                Hi, I've been studying programming for over a year and now I'm
                actively practicing website and application development. In my
                portfolio, which can be found at the link below, I have
                collected several projects where I demonstrate my skill level
                and experience. I also have a commercial background in website
                development, which has given me the opportunity to get
                experience with customer engagement and teamwork.
              </p>
            </div>
            <Button text="download my cv" url={pdf} addClass=""/>
          </motion.div>
        </div>
        <div className="mb-[10px] mb:mb-0 md:overflow-hidden h-full md:h-[500px] w-full md:overflow-y-auto custom-scrollbar">
          <motion.div
            initial={{ opacity: 0, x: 900 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -900 }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-gray border-[1px] rounded-sm ">
              <img src={cv} alt="resume image" className="object-cover" />
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Info;
