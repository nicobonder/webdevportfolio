import React from 'react'
import About from './About'
import Acerca from './Acerca'

export default function AboutMe(props) {
    const [english, setEnglish] = React.useState(props.english)

  return (
    <div className='aboutMe_container'>
        {english ? <Acerca /> : <About />}
    </div>
  )
}
