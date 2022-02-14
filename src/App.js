/*Dividir el App en: pressentacion, about, project y contact*/

import React from "react";
import './App.css';

import Introduction from './components/Introduction';
import Presentacion from './components/Presentacion';
import About from './components/About'
import Acerca from './components/Acerca'
import Project from './components/Project'
import Proyectos from './components/Proyectos'
import Contact from './components/Contact'
import Contacto from './components/Contacto'

import Particles from "react-tsparticles";
import ParticleBackground from "./components/particleBackground";


export default function App(props) {
    const [english, setEnglish] = React.useState(props.english)

    function changeLanguage(){
        setEnglish(prevSetEnglish => !prevSetEnglish)
    }

    return (
      <div className="App">
        <ParticleBackground />
        <div className="spanish">
            <p>{english ? "English version" : "Versión en español"}</p>
          
            <h3 className="translateButton" onClick={changeLanguage}>{english ? "Click here" : "Clic aquí"}</h3>
          
        </div>
        {english ? <Presentacion /> : <Introduction />}
        {english ? <Acerca /> : <About />}
        {english ? <Proyectos /> : <Project />} 
        {english ?<Contacto /> : <Contact />}
      </div>
    );
};
  
