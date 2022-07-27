import React from "react";
import ProyectoCard from "../ProyectoCard";
import projects from '../projectData';

export default function Project(){

    const [english, setEnglish] = React.useState()

    return(
        <section className="projectSection">
            <h2>Mis proyectos</h2>
            <div className="project grid">
                {
                    projects.map(proyecto => ( //projects es la array en projectData, ProyectoCard es la card de proyectos individuales
                        <div>
                            <ProyectoCard key={proyecto.id} proyecto={proyecto} /> 
                        </div>
                    ))
                }

            </div>
        </section>

    );
}