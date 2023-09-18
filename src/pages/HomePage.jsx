import React, { useState } from "react";
import { prod } from "../languages/lang.js"

const HomePage = (props) => {
     const { language } = props;
  return (
    <>
      {/* <h2>Welcome, my name is EVE</h2>
      <p>I am front-end developer</p>
      <p>Download my CV</p> */}
      <p >{prod[language].WELCOME}</p>
      <p >{prod[language].I_AM}</p>
      <div>
      <a href="/example.pdf"  rel="noreferrer">{prod[language].DOWNLOAD_CV}</a>
      </div>
    </>
  );
};

export default HomePage;
