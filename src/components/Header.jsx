import React from "react";
import Navigation from "./Navigation";
import Languages from "./Languages";

const Header = (props) => {
  
  return (
    <>
      <h1>Eve D.</h1>
      <Languages langChange={props.languageChange} language={props.language} />
      <Navigation langChange={props.languageChange} language={props.language} />
    </>
  );
};

export default Header;
