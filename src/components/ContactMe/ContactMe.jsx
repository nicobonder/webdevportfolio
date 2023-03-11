import React from 'react'

import Contact from './Contact'
import Contacto from './Contacto'

export default function ContactMe(props) {
    const [english, setEnglish] = React.useState(props.english)

  return (
    <div className='contactMe_container'>
        {english ? <Contacto /> : <Contact />}
    </div>
  )
}
