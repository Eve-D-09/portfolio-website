import React from "react";
import Navigation from "./Navigation";
import Languages from "./Languages";

const Header = (props) => {
  
  return (
    <div className="header">
      <h1>Eve D.</h1>
      <Languages setLanguage={props.setLanguage} language={props.language} />
      <Navigation language={props.language} />
    </div>
  );
};

export default Header;
