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


// https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc
//  react page transitions: https://www.youtube.com/watch?v=8voRA_DMuFM
// React Page Transitions With Framer Motion + React Router v6 (2023)