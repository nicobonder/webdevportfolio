import React from 'react'

import Presentacion from '../Introduction/Presentacion';
import Proyectos from '../Projects/Proyectos';
import Acerca from '../AboutMe/Acerca'
import Contacto from '../ContactMe/Contacto'

//import Particles from "react-tsparticles";
import ParticleBackground from "../particleBackground";

export default function Inicio(props) {
  return (
    <div className='homeSection'>
        <ParticleBackground />
        <div id='introduction_container' className='introduction_container'>
          <Presentacion />
        </div>
        <div id='project_container' className='project_container'>
           <Proyectos />
        </div>
        <div id='about_container' className='about_container'>
          <Acerca />
        </div>
        <div id='contact_container' className='contact_container'>
          <Contacto />
        </div>
    </div>
        
  )
}
