import React from "react";
import { prod } from "../languages/lang.js";

const About = (props) => {
  // const { language } = props;
  return (
    <>
      <h2>{prod[props.language].ABOUT_H2}</h2>
      <p>{prod[props.language].ABOUT_TEXT}</p>
    </>
  );
};

export default About;
