import React, { useState } from "react";
import { prod } from "../languages/lang.js";

const HomePage = (props) => {
  const { language } = props;
  return (
    <>
      <p>{prod[language].WELCOME}</p>
      <p>{prod[language].I_AM}</p>
      <div>
        <a href="/example.pdf" rel="noreferrer">
          {prod[language].DOWNLOAD_CV}
        </a>
      </div>
    </>
  );
};

export default HomePage;
