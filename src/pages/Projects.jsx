import React from "react";
import { prod } from "../languages/lang.js";
import { motion } from "framer-motion";
import { animateContainer, animateItem } from "../animate.js";

const Projects = (props) => {
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="projectsContainer"
    >
      <motion.div variants={animateContainer} initial="hidden" animate="show">
        <div>
          <h2>{prod[props.language].PROJECTS_H2}</h2>
        </div>
        <div>
          <motion.p variants={animateItem}>First One</motion.p>
        </div>
        <div>
          <motion.p variants={animateItem}>Second One</motion.p>
        </div>
        <div>
          <motion.p variants={animateItem}>Third One</motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
