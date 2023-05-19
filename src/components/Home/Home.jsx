import React from 'react'
import Introduction from '../Introduction/Introduction';
import Project from '../Projects/Project'
import About from "../AboutMe/About"
import Contact from "../ContactMe/Contact"

//import Particles from "react-tsparticles";
import ParticleBackground from "../particleBackground";

export default function Home(props) {
  return (
    <div className='homeSection'>
        <ParticleBackground />
        <div id='introduction_container' className='introduction_container'>
          <Introduction />
        </div>
        <div id='project_container' className='project_container'>
           <Project />
        </div>
        <div id='about_container' className='about_container'>
          <About />
        </div>
        <div id='contact_container' className='contact_container'>
          <Contact />
        </div>
    </div>
        
  )
}
