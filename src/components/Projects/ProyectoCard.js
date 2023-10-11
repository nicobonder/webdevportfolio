import React from "react";

export default function ProyectoCard({
    proyecto: { id, clase, link, title, name, description, github } }) {

    return(
        <div className={clase}>
            <a href={link}
                title={title}
                target="_blank"
                rel="noreferrer"
                ><h3>{name}</h3>
            </a>
            <p>{description}</p>
            <div className="linksDiv">
                <a className="liveBtn" href={link} target="_blank" rel="noreferrer">Live</a>
                <a className="githubBtn" href={github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
        </div>
    )
}