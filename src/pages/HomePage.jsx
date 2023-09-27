import React from "react";
import { prod } from "../languages/lang.js";
import { motion } from "framer-motion";

const HomePage = (props) => {
  const { language } = props;
  return (
      <motion.main
        // initial={{ opacity: 0}}
        // animate={{ opacity: 1 }}
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        //  was exit opacity 0
        className="homeContainer"
      >
        <div className="firstParagraph">
          <motion.p animate={{ y: 0}} initial={{ y: "100%" }} transition={{ delay: 0.5, duration: 0.5}}>{prod[language].WELCOME}</motion.p>
        </div>
        <div>
          <p>{prod[language].I_AM}</p>
        </div>
        <div>
          <a href="/example.pdf" rel="noreferrer">
            {prod[language].DOWNLOAD_CV}
          </a>
        </div>
      </motion.main>
    
  );
};

export default HomePage;
