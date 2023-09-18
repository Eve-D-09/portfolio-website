import React from "react";
import { prod } from "../languages/lang.js"


const Projects = (props) => {
  return (
    <>
      <h2>{prod[props.language].PROJECTS_H2}</h2>
    </>
  );
};

export default Projects;
