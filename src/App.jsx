import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Screens from "./components/Screens";
import { supportedLang } from "./languages/lang";
import { AnimatePresence } from "framer-motion";
import "../src/styles/index.css";
import { Router } from "react-router-dom";

const App = () => {
  // console.log(navigator.languages);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    supportedLang.forEach((lang) => {
      if (navigator.languages.includes(lang)) {
        setLanguage(lang);
      }
    });
  }, []);

  return (
    <>
      <Header setLanguage={setLanguage} language={language} />
      <AnimatePresence>
        <Screens language={language} key={Router.pathname}/>
      </AnimatePresence>
    </>
  );
};

export default App;

//  add AnimatePresence mode={"wait"} for delayed page loading
