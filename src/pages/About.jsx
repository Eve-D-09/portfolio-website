import React from "react";
import { useNavigate } from "react-router-dom";
import   ArrowDown  from "../img/svg/chevron-down-svgrepo-com.svg";
import { prod } from "../languages/lang.js";
import { motion } from "framer-motion";

const About = (props) => {
  const navigate = useNavigate();
  // const { language } = props;
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
      <div>
        <h2>{prod[props.language].ABOUT_H2}</h2>
      </div>
      <div>
        <p>{prod[props.language].ABOUT_TEXT}</p>
      </div>
      <div className="furtherLink">
           <button onClick={() => navigate("/projects")}><img src={ArrowDown} alt="arrow-down" /></button> 
        </div>
    </motion.div>
  );
};

export default About;
