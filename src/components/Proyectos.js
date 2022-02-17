import React from "react"

export default function Project(props){
    const [english, setEnglish] = React.useState()

    return(
        <section className="projectSection">
            <h2>Mis proyectos</h2>
            <div className="project">
            
            <div className="portfolioReact">
                    <a href="https://nicobonder.github.io/webdevportfolio/" 
                    title="Nico Bonder Portfolio"
                    target="_blank"><h3>Portfolio</h3></a>
                    <p>
                        Mi portfolio como Desarrollador Web, donde puedes encontrar todas las formas de contactarme y contratarme. Sí, sé que lo estás pensando. 
                        Usé React.js, CSS and some HTML.
                        También use <a target="_blank" href="https://particles.js.org/">la librería Particles.js</a>. 
                    </p>
                </div>
                
                <div className="content">
                   <a href="https://nicobonder.github.io/contentwriter/" 
                   title="Click to open this project" 
                   target="_blank"><h3>Content Writer</h3></a>
                   <p>
                        Trabajo como escritor freelance, entonces cree una sitio web donde poder mostrar los servicios que ofrezco y mi experiencia.
                        Lo cree usando HTML, CSS y JavaScript.
                        También usé las librerías <a target="_blank" href="https://michalsnik.github.io/aos/">Animate On Scroll</a> y Typed.js

                   </p>
                </div>

                <div className="alto">
                  <a href="https://altoviaje.herokuapp.com/" 
                  title="Click to open this project" 
                  target="_blank"><h3>Alto Viaje Blog</h3></a>
                  <p>
                    La página simula un blog de viajes. Tiene diferentes secciones y páginas.
                    Incluí una sección para vender mis libros usando un API de Paypal.
                    El sitio fue creado con HTML, CSS y JavaScript. Trabajé con EJS.
                    También incluí <a target="_blank" href="https://greensock.com/scrolltrigger/">la librería Scroll Trigger</a>. Me encanta como queda el avioncito moviéndose por la página! 

                  </p>
                </div>



            </div>
        </section>

    )
}