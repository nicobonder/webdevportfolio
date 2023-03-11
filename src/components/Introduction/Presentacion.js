import React from "react"
import nico from "../../Images/nico.png"

export default function Introduction(props){
    const [english, setEnglish] = React.useState(props.english)

    function changeLanguage(){
      setEnglish(prevSetEnglish => !prevSetEnglish)
    }

    return(
        <div className="introduction">
            <div className="left">
                <p className="hello_text">Hola</p>
                <h1>Soy Nico Bonder</h1>
                <p className="developer">Web Developer</p> 
                <a href="https://wa.me/5493515184294" 
                title="Contact button with Whatsapp number">
                    <h3 id="contact">Contáctame <i className="fab fa-whatsapp"></i></h3></a>
            </div>
            
            <div className="right">
                <img 
                    src={nico} 
                    alt="Nico Bonder" 
                    title="Nico Bonder">
                </img> 
              
            </div>
        </div>
    )

}

/*
 <div className="spanish">
                    <p>English version</p>
                    <a 
                        href="views/spanish.html" 
                        title="Clic aquí para ver versión en español">
                        <h3>Click here</h3>
                    </a>
                </div>*/