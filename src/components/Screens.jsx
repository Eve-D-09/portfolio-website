import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";

const Screens = (props) => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage  language={props.language}/>} />
        <Route path="/home" element={<HomePage  language={props.language}/>} />
        <Route path="/about" element={<About language={props.language}/>} />
        <Route path="/projects" element={<Projects language={props.language} />} />
        <Route path="/contact" element={<Contact language={props.language}/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default Screens;
