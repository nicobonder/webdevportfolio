import React from "react"
import nico from "../Images/nico.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { whatsapp } from '@fortawesome/free-solid-svg-icons'

export default function Introduction(props){
    const [english, setEnglish] = React.useState(props.english)

    function changeLanguage(){
      setEnglish(prevSetEnglish => !prevSetEnglish)
    }

    return(
        <div className="introduction">
            <div className="left">
                <p className="hello">Hello</p>
                <h1>I am Nico Bonder</h1>
                <p className="developer">Web Developer</p> 
                <a href="https://wa.me/5493515184294" 
                    title="Contact button with Whatsapp number">
                    <h3 id="contact">Contact Me <i className="fab fa-whatsapp"></i>
                    </h3>
                </a>
            </div>
            
            <div className="right">
                <img 
                    src={nico} 
                    alt="Nico Bonder 's picture" 
                    title="Nico Bonder 's picture">
                </img> 
                
            </div>
        </div>
    )

}

/*<div className="spanish">
                    <p>Versión en español</p>
                    <h3 className="translateButton" onClick={changeLanguage}>Clic aquí</h3>
                </div>   
                */