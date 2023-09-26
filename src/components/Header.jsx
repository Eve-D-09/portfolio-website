import React from "react";
import Navigation from "./Navigation";
import Languages from "./Languages";

const Header = (props) => {
  
  return (
    <>
      <h1>Eve D.</h1>
      <Languages setLanguage={props.setLanguage} language={props.language} />
      <Navigation language={props.language} />
    </>
  );
};

export default Header;
