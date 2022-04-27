import React from "react";

export default function Translate(props){
    const [english, setEnglish] = React.useState(props.english)

    function changeLanguage(){
        setEnglish(prevSetEnglish => !prevSetEnglish)
    }

    return(
        <div onClick={changeLanguage} className="spanish">
        <p>Versión en español</p>
        <a 
            href="" 
            title="Clic aquí para ver versión en español">
            <h3>Clic aquí</h3>
        </a>
    </div>
    )
}