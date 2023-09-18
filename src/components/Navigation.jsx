import React, { useState } from "react";
import { Link } from "react-router-dom";
import { prod } from "../languages/lang.js"

const Navigation = (props) => {
  const { language } = props;
  
  return (
    <>
      <nav >
        <ul >
          <li><Link to={"/"}>{prod[language].HOME}</Link></li>
          <li><Link to={"/about"} > {prod[language].ABOUT} </Link></li>
          <li><Link to={"/projects"} > {prod[language].PROJECTS} </Link></li>
          <li><Link to={"/contact"} >{prod[language].CONTACT} </Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
