import React, { useRef }from "react";
import { useNavigate } from "react-router-dom";
import ArrowDown from "../img/svg/chevron-down-svgrepo-com.svg";
import { prod } from "../languages/lang.js";
import { motion, useInView } from "framer-motion";
import Music from "../img/svg/headphones-svgrepo-com.svg";
import Rover from "../img/svg/mars-curiosity-svgrepo-com.svg";
import Minion from "../img/svg/minion.svg";
import Mars from "../img/svg/mars-satellite.svg";

const About = (props) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="aboutContainer"
    >
      <div className="aboutWrapper">
        <div ref={ref} className="aboutBox">
          <h2 style={{ 
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>{prod[props.language].ABOUT_H2}</h2>
        </div>
        <div className="aboutBox">
          <p>{prod[props.language].ABOUT_TEXT_P1}</p>
        </div>
        <div className="aboutBox">
          <p>{prod[props.language].ABOUT_TEXT_P2}</p>
        </div>
        <div className="aboutBox">
          <img src={Minion} alt="minion" />
          <img src={Music} alt="minion" />
          <img src={Mars} alt="minion" />
          <img src={Rover} alt="minion" />
        </div>
        <div className="aboutBox">
          <p>{prod[props.language].ABOUT_TEXT_P3}</p>
        </div>
        <div className="furtherLink">
          <button onClick={() => navigate("/projects")}>
            <img src={ArrowDown} alt="arrow-down" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
