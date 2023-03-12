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
     {/* <div className="introduction_svg_containter">
      <svg width="550" height="550" id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs><linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">  
          <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>                            
          <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
          </linearGradient></defs><path fill="url(#sw-gradient)" 
          d="M11.4,-18.4C13.9,-14,14.3,-9.4,14.9,
          -5.3C15.6,-1.3,16.5,2.2,15,4.2C13.4,6.2,9.4,6.8,6.5,12.5C3.6,18.1,1.8,28.9,-1.1,30.4C-3.9,
          31.9,-7.9,24.1,-14.4,19.6C-20.9,15.1,-30,13.9,-33.1,9.5C-36.2,5.2,-33.3,-2.4,-30.9,-10.2C-28.6,
          -17.9,-26.6,-26,-21.6,-29.6C-16.5,-33.2,-8.2,-32.3,-1.9,-29.8C4.5,-27.2,9,-22.9,11.4,-18.4Z" 
        transform="translate(50 50)" stroke-width="0" 
        >
        </path>
        </svg>

     </div> */}
        <img src={nico} alt="Nico Bonder" title="Nico Bonder"></img>
      </div>
    </div>
  );
}
