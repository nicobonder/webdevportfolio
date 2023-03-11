import React from "react"
import shape from '../../Images/shape.png'
import myPDF from '../../Images/CV_Nicolas_Bonder_esp.pdf'

export default function Acerca(){
    return(
        <section>
            <div className="about">
                <div className="left2">
                    <h2>¿Quién soy?</h2>
                    <p>En 2021 comencé a estudiar para convertirme en Desarrollador Web. 
                    Hice The Web Developer Bootcamp dictado por Colt Steele en Udemy.
                   <br /> Ahora estoy practicando y trato de aprender algo nuevo cada día.
                    <br />                 
                    <br />
                    Soy Licenciado en Administración, pero hace algunos años me di cuenta que quería hacer algo más creativo. 
                    Como amo leer y escribir, los últimos años estuve trabajando como escritor de contenido freelance.
                    <br />
                    <br />
                    Creo que el desarrollo web es una muy buena carrera para usar toda mi creatividad para hacer cosas nuevas 
                    y ayudar a los clientes desde un punto de vista diferente.
                    
                    </p>
                        
                </div>
                
                <div className="right2">
                    <h2>Información</h2>
                    <div className="info">
                        <div className="column1">
                            <p>Nombre:</p>
                            <p>Dirección:</p>
                            <p>Código Postal:</p>
                            <p>Email:</p>
                            
                        </div>
                        
                        <div className="shape">
                            <img src={shape} 
                            alt="Orange abstract figure">
                            </img>
                        </div>

                        <div className="column2">
                            <p>Nicolás Bonder</p>
                            <p>Monte Cristo, Córdoba (Arg)</p>
                            <p>5125</p>
                            <p>nicolasbonder@gmail.com</p>
                            
                        </div>
                        
                    </div>
                    <div className="softSkills">
                        <h2>Habilidades blandas</h2>
                        <ul>
                            <li>Comunicación clara y precisa, escrita y oral</li>
                            <li>Trabajo en equipo</li>
                            <li>Autogestión</li> 
                            <li>Capacidad y voluntad de aprendizaje</li>
                            <li>Responsabilidad y capacidad para adueñarme del puesto</li>
                            <li>Curiosidad</li>
                        </ul>
                    </div> 
                
                </div>
            </div>
            <div className="cvEn">
                <h3>
                <h3><a href={myPDF} 
                download="CV_Nicolas_Bonder_esp.pdf">Descarga mi CV</a>
                </h3>
                </h3>
            </div>
        
        
        </section>

    )
}