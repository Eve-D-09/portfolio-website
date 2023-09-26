import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Screens from "./components/Screens";
import { supportedLang } from "./languages/lang";

const App = () => {
  // console.log(navigator.languages);
  const [language, setLanguage] = useState("en");
  

  useEffect(() => {
    supportedLang.forEach((lang) => {
          if (navigator.languages.includes(lang)) {
            setLanguage(lang);
            
          }
        });
  }, [])

  return (
    <>
      <h2>My portfolio-website</h2>
      <Header setLanguage={setLanguage} language={language} />
      <Screens  language={language} />
    </>
  );
};

export default App;
