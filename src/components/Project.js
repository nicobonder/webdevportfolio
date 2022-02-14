import React from "react"

export default function Project(props){
    const [english, setEnglish] = React.useState()

    return(
        <section className="projectSection">
            <h2>My projects</h2>
            <div className="project">
               
                <div className="portfolioReact">
                    <a href="" 
                    title="Nico Bonder Portfolio"
                    target="_blank"><h3>Portfolio</h3></a>
                    <p>
                        My personal portfolio as Web Developer where you have all the ways to contact me and hire me. Yes, I know you are thinking about it.
                        I used React.js, CSS and some HTML.
                        I also used the <a target="_blank" href="https://particles.js.org/">Particles.js Library</a>. 
                    </p>
                </div>

                <div className="content">
                   <a href="https://nicobonder.github.io/contentwriter/" 
                   title="Click to open this project" 
                   target="_blank"><h3>Content Writer</h3></a>
                   <p>
                        I work as a content writer, so I made a web where I can show my services and my expertise. 
                        I created it using HTML, CSS and JavaScript.
                        I also used the <a target="_blank" href="https://michalsnik.github.io/aos/">Animate On Scroll Library</a> and the Typed.js Library.
                   </p>
                </div>

                <div className="alto">
                  <a href="https://altoviaje.herokuapp.com/" 
                  title="Click to open this project" 
                  target="_blank"><h3>Alto Viaje Blog</h3></a>
                  <p>
                    This site emulate a travel blog. It has different sections and pages. 
                    I also included a section to sell my books using a Paypal API.
                    The site was created using  HTML, CSS and JavaScript. I worked with EJS.
                    I included <a target="_blank" href="https://greensock.com/scrolltrigger/">the Scroll Trigger Library</a>. I love the airplane moving through the page!
                  </p>
                </div>

            </div>
        </section>

    )
}