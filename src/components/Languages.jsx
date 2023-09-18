import React, { useState, useEffect } from 'react';
import { prod, supportedLang } from "../languages/lang.js";

// https://www.robinwieruch.de/react-pass-props-to-component/

const Languages = () => {
    // console.log(navigator.languages);
   
    const [ language, setLanguage ] = useState("en");
    //  useState(navigator.languages);
    // const [ originalLang, setOriginalLang ] = useState("en");

    // useEffect(() => {
    //     supportedLang.forEach((lang) => {
    //         if ( navigator.languages.includes(lang)) {
    //             setLanguage(lang);
    //             setOriginalLang(lang);
    //             // console.log(lang);
    //             console.log(prod[language]);
    //         }
    //     })
    // }, [supportedLang])

    return ( <>
          <select onChange={(e) => {setLanguage(e.target.value)}} >
            {supportedLang.map((lang) => {
                return <option  key={lang} value={lang}>{lang}</option>
            })}
          </select>
        
          {/* <p>{prod[language].HOME}</p>
          <p>{prod[language].ABOUT}</p>
          <p>{prod[language].PROJECTS}</p>
          <p>{prod[language].CONTACT}</p>
          <p>{prod[language].WELCOME}</p> */}
    </> );
}
 
export default Languages;

//  <p onMouseEnter={() => {setLanguage("fr")}}></p>
//  <p onMouseLeave={() => {setLanguage(originalLang)}}></p>