import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import   ArrowDown  from "../img/svg/chevron-down-svgrepo-com.svg";
import { prod } from "../languages/lang.js";
import { motion } from "framer-motion";
import { animateContainer, animateItem } from "../animate.js";
import { useInView } from "framer-motion";
import MarsProject from "../img/images/mars-project.jpg";
import MusicProject from "../img/images/music-project.jpg";
import ReplicaProject from "../img/images/replica-project.jpg";
import MinionProject from "../img/images/minion-project.jpg";

const Projects = (props) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  //  activating animation with hooks:
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
          <p>Mars Messengers - made with NASA API</p>
          <img src={MarsProject} alt="project-screenshot" />
          <div className="projectLinks">
            <a href="http://www.marsmessengers.co.uk">Demo</a>
            <a href="http://www.github.com">Source</a>
          </div>
          
        </div>
        <div className="projectItem">
          <p >Music Preview API - made with Deezer</p>
          <img src={MusicProject} alt="project-screenshot" />
          <div className="projectLinks">
            <a href="https://app.netlify.com/sites/keen-trifle-16df64/overview">Demo</a>
            <a href="http://www.github.com">Source</a>
          </div>
        </div>
        <div className="projectItem">
          <p>Replica Project - Partytrick</p>
          <img src={ReplicaProject} alt="project-screenshot" />
          <div className="projectLinks">
            <a href="">Demo</a>
            <a href="http://www.github.com">Source</a>
          </div>
        </div>
        <div className="projectItem">
          <p>Minion project - made with SVG</p>
          <img src={MinionProject} alt="project-screenshot" />
          <div className="projectLinks">
            <a href="https://app.netlify.com/sites/eve-svg-hw-365e3a/overview">Demo</a>
            <a href="http://www.github.com">Source</a>
          </div>
        </div>
        <div className="furtherLink">
          <button onClick={() => navigate("/contact")}><img src={ArrowDown} alt="arrow-down" /></button> 
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
