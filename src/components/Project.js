import React from "react";
import ProyectoCard from "../ProyectoCard";
import projectsEn from "../projectDataEn";

export default function Project(){

    const [english, setEnglish] = React.useState()

    return(
        <section className="projectSection">
            <h2>My projects</h2>
            <div className="project">
                {
                    projectsEn.map(proyecto => ( //projectsEn es la array en projectDataEn, ProyectoCard es la card de proyectos individuales
                        <div>
                            <ProyectoCard key={proyecto.id} proyecto={proyecto} /> 
                        </div>
                    ))
                }

            </div>
        </section>

    );
}
