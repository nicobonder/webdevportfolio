import React from "react";
import nico from "../../Images/nico.png";

import "./Introduction.css";

export default function Introduction(props) {
  const [english, setEnglish] = React.useState(props.english);

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

      <div className="right">
        <img src={nico} alt="Nico Bonder" title="Nico Bonder"></img>
      </div>
    </div>
  );
}
