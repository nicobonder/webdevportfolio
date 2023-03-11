import React from 'react'

import Presentacion from '../Introduction/Presentacion';
import Proyectos from '../Projects/Proyectos';

import Particles from "react-tsparticles";
import ParticleBackground from "../particleBackground";

export default function Inicio(props) {
  return (
    <div className='homeSection'>
        <ParticleBackground />
        <div className='introduction_container'>
            <Presentacion />
        </div>
        <div className='project_container'>
            <Proyectos />
        </div>
    </div>
        
  )
}
