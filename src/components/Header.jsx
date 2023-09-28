import React from "react";
import Navigation from "./Navigation";
import Languages from "./Languages";

const Header = (props) => {
  return (
    <div className="headerContainer">
      <div className="firstBox">
        <h1>Eve D.</h1>
      </div>
      <div className="secondBox">
        <Languages setLanguage={props.setLanguage} language={props.language} />
        <Navigation language={props.language} />
      </div>
    </div>
  );
};

export default Header;
