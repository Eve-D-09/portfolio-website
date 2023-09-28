import React, { useState } from "react";
import { Link } from "react-router-dom";
import { prod } from "../languages/lang.js";
import MenuIcon from "../img/svg/menu-dots-circle-svgrepo-com.svg";
// import { ReactComponent as MenuIcon } from "../img/svg/menu-dots-circle-svgrepo-com.svg";

const Navigation = (props) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const { language } = props;

  const closeMenu = () => setIsOpen(false);
  
  return (
    <div className="navigation">
      <div>
        <button onClick={() => setIsOpen(!isOpen)}><img src={MenuIcon} alt="menu-icon" /></button>
      </div>
      { isOpen  && (
        <nav >
        <button onClick={() => setIsOpen(!isOpen)}><img src={MenuIcon} alt="menu-icon" /></button>
        <ul >
          <li><Link to={"/"} className="navLinks" onClick={closeMenu}>{prod[language].HOME}</Link></li>
          <li><Link to={"/about"} className="navLinks" onClick={closeMenu}> {prod[language].ABOUT} </Link></li>
          <li><Link to={"/projects"} className="navLinks" onClick={closeMenu}> {prod[language].PROJECTS} </Link></li>
          <li><Link to={"/contact"} className="navLinks" onClick={closeMenu}>{prod[language].CONTACT} </Link></li>
        </ul>
      </nav>
      )}
      
    </div>
  );
};

export default Navigation;


// https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc
//  react page transitions: https://www.youtube.com/watch?v=8voRA_DMuFM
// React Page Transitions With Framer Motion + React Router v6 (2023)