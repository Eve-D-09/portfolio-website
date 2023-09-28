import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import   ArrowDown  from "../img/svg/chevron-down-svgrepo-com.svg";
import { prod } from "../languages/lang.js";
import { motion } from "framer-motion";
import { animateContainer, animateItem } from "../animate.js";
import { useInView } from "framer-motion";

const Projects = (props) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // https://codesandbox.io/s/framer-motion-useinview-cgt5kc?from-embed=&file=/src/App.js:399-446

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
        <div ref={ref}>
          <h2 style={{ 
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>{prod[props.language].PROJECTS_H2}</h2>
        </div>
        <div className="projectItem">
          <motion.p animate={{ y: 0, opacity: 1}} initial={{ y: "100%", opacity: 0 }} transition={{ delay: 0.5, duration: 0.5}}>First One</motion.p>
        </div>
        <div className="projectItem">
          <motion.p animate={{ y: 0, opacity: 1}} initial={{ y: "100%", opacity: 0  }} transition={{ delay: 0.75, duration: 0.5}}>Second One</motion.p>
        </div>
        <div className="projectItem">
          <motion.p animate={{ y: 0, opacity: 1}} initial={{ y: "100%", opacity: 0  }} transition={{ delay: 1, duration: 0.5}}>Third One</motion.p>
        </div>
        <div className="furtherLink">
        <button onClick={() => navigate("/contact")}><img src={ArrowDown} alt="arrow-down" /></button> 
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
