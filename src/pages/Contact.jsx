import React from "react";
import { prod } from "../languages/lang.js";
import Footer from "../components/Footer.jsx";

const Contact = (props) => {
  return (
    <>
      <h2>{prod[props.language].CONTACT_H2}</h2>
      <form>
        <div>
          <label>{prod[props.language].FORM_LABEL_NAME}</label>
          <input type="text"  name="firstName" placeholder="" required/>
        </div>
        <div>
          <label>{prod[props.language].FORM_LABEL_SURNAME}</label>
          <input type="text"  name="lastName" placeholder="" required/>
        </div>
        <div>
          <label>{prod[props.language].FORM_LABEL_EMAIL}</label>
          <input type="text" name="email" placeholder="" required/>
        </div>
        <div>
          <label>{prod[props.language].FORM_LABEL_MESSAGE}</label>
          <input type="textarea" name="message" placeholder="" required/>
        </div>
        <div className="submitButton">
           <button type="submit"  >{prod[props.language].FORM_BUTTON_SEND}</button>
        </div>
      </form>
      <div>
        <div>
          <p>ieva.dirmiene@gmail.com</p>
        </div>
        <div>
          <p>+32 489 04 72 93</p>
        </div>
        <div>
          <p>Belgium, Brussels</p>
        </div>
        <div>
          Social media Icons
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
