import React from "react";

export default function ProyectoCard({
    proyecto: { id, clase, link, title, name, description } }) {

    return(
        <div className={clase}>
            <a href={link}
                title={title}
                target="_blank"
                rel="noreferrer"
                ><h3>{name}</h3>
            </a>
            <p>{description}</p>
        </div>
    )
}