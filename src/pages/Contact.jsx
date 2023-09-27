import React, { useState } from "react";
import { prod } from "../languages/lang.js";
import Footer from "../components/Footer.jsx";
import Form from "../components/Form.jsx";
import SocialMedia from "../components/SocialMedia.jsx";
import { motion } from "framer-motion";

const Contact = (props) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a49d9e6d-0845-4620-a512-8c4635823416");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };
  return (
    <motion.main
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="contactContainer"
    >
      <div>
        <h2>{prod[props.language].CONTACT_H2}</h2>
      </div>
      <div>
        <Form onSubmit={onSubmit} setLanguage={props.setLanguage}  language={props.language} />
      </div>
      <div>
        <SocialMedia />
        <Footer setLanguage={props.setLanguage} language={props.language} />
      </div>
    </motion.main>
  );
};

export default Contact;
