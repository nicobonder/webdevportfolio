import React from 'react'
import Introduction from '../Introduction/Introduction';
import Project from '../Projects/Project'

import Particles from "react-tsparticles";
import ParticleBackground from "../particleBackground";

export default function Home(props) {
  return (
    <div className='homeSection'>
        <ParticleBackground />
        <div className='introduction_container'>
            <Introduction />
        </div>
        <div className='project_container'>
           <Project />
        </div>
    </div>
        
  )
}
