import React from "react";
import { motion } from "framer-motion"
import nicobonder from "../../Images/nicobonder_img.png";

import "./Introduction.css";

export default function Introduction(props) {
  const [/*english*/, setEnglish] = React.useState(props.english);

  function changeLanguage() {
    setEnglish((prevSetEnglish) => !prevSetEnglish);
  }

  return (
    <div className="introduction">
      <div className="left">
        <p className="hello_text">Hello</p>
        <h1>I am Nico Bonder</h1>
        <p className="developer">Web Developer</p>
        <a
          href="https://wa.me/5493515184294"
          title="Contact button with Whatsapp number"
        >
          <h3 id="contact">
            Contact Me <i className="fab fa-whatsapp"></i>
          </h3>
        </a>
      </div>

      <motion.div className="right"
                 initial={{ scale: 1.25, x: -200, opacity: 0 }}
                 whileInView={{ scale: 1, x: 0, opacity: 1 }}
                 transition={{ duration: 0.8, type: "spring" }}
                 viewport={{ once: true }}
            >
        <img src={nicobonder} alt="Nico Bonder" title="Nico Bonder"></img>
      </motion.div>
    </div>
  );
}
