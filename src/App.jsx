import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Screens from "./components/Screens";
import { supportedLang } from "./languages/lang";

const App = () => {
  // console.log(navigator.languages);
  const [language, setLanguage] = useState("en");
  const [originalLang, setOriginalLang] = useState("en");

  const languageChange = () => {
    supportedLang.forEach((lang) => {
      if (navigator.languages.includes(lang)) {
        setLanguage(lang);
        setOriginalLang(lang);
        // console.log(lang);
      }
    });
  };

  return (
    <>
      <h2>My portfolio-website</h2>
      <Header langChange={languageChange} language={language} />
      <Screens langChange={languageChange} language={language} />
    </>
  );
};

export default App;
