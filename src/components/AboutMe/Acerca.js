import React from "react";
import shape from "../../Images/shape.png";
import myPDF from "../../Images/CV_Nicolas_Bonder_es.pdf";

import { motion } from "framer-motion"

import "./About.css";

export default function Acerca() {
  return (
    <section className="about_section">
      {/* <ParticleBackground /> */}
      <div className="about">
        <div className="left2">
          <motion.h2
            initial={{ scale: 1.25, x: -200, opacity: 0 }}
            whileInView={{ scale: 1, x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
        >¿Quién soy?</motion.h2>
          <p className="about_left2_p">
            En 2022 comencé a estudiar para convertirme en Desarrollador Web.
            Durante varios meses estudié como autodidacta y en agosto comencé el
            curso de Full Stack Developer en Soy Henry. En el curso aprendí a
            usar tecnologías como JavaScript, Redux, React.js, Node, Sequelize y
            PostgreSQL. <br />
            <br />
            Soy Licenciado en Administración, pero hace algunos años
            me di cuenta que quería hacer algo más creativo. Como amo leer y
            escribir, los últimos años estuve trabajando como escritor de
            contenido freelance. <br />
            <br />
            Creo que con desarrollo web puedo aportarle a
            una empresa toda mi creatividad y puedo colaborar con los clientes
            desde un punto de vista diferente, aportando los conocimientos que
            traigo gracias a mi experiencia en otras carreras.
          </p>
          <img className="shape" src={shape} alt="Orange abstract figure"></img>
        </div>

        <div className="right2">
          <motion.h2
          initial={{ scale: 1.25, x: -200, opacity: 0 }}
          whileInView={{ scale: 1, x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >Información</motion.h2>
          <div className="info">
            <div className="column1">
              <p>Nombre:</p>
              <p>Dirección:</p>
              <p>Código Postal:</p>
              <p>Email:</p>
            </div>
            <div className="column2">
              <p>Nicolás Bonder</p>
              <p>Monte Cristo, Córdoba (Arg)</p>
              <p>5125</p>
              <p>nicolasbonder@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about_skills_section">
        <motion.h2
         initial={{ scale: 1.25, x: -200, opacity: 0 }}
         whileInView={{ scale: 1, x: 0, opacity: 1 }}
         transition={{ duration: 0.8, type: "spring" }}
         viewport={{ once: true }}
        >Habilidades</motion.h2>
        <div className="my_Skills">
          <div className="soft_Skills">
            <h3>Blandas</h3>
            <ul className="skills_list">
              <li>Comunicación clara y precisa, escrita y oral</li>
              <li>Trabajo en equipo</li>
              <li>Autogestión</li>
              <li>Capacidad y voluntad de aprendizaje</li>
              <li>Responsabilidad y capacidad para adueñarme del puesto</li>
              <li>Curiosidad</li>
            </ul>
          </div>

          <div className="tech_Skills">
            <h3>Tecnologías que manejo</h3>
            <ul className="skills_list">
            <li>JavaScript</li>
              <li>React.js</li>
              <li>Redux</li>
              <li>Node</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind</li>
              <li>Framer Motion</li>
              <li>Sequelize</li>
              <li>PostgreSQL</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="cvEn">
        <h3>
          <a href={myPDF} download="CV_Nicolas_Bonder_es.pdf">
            Descarga mi CV
          </a>
        </h3>
      </div>
    </section>
  );
}
