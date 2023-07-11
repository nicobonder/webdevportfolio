// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";
import "./Contact.css";

import { motion } from "framer-motion"
import ParticleBackground from "../particleBackground";
import FindMe from "./FindMe";

const validation = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "Necesitas ingresar un nombre.";
  } else if (input.name.length < 3) {
    errors.name = "El nombre debe tener mínimo 3 caracteres.";
  } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(input.name)) {
    errors.name = "Solo se permiten letras";
  } if(!input.email){
    errors.email="Por favor, ingresá un email."
} else if(!/\S+@\S+\.\S+/.test(input.email)){
    errors.email="El email es inválido."
}else if (!input.text) {
    errors.text = "Por favor, ingresá tu mensaje.";
  } else if (input.text.length < 20) {
    errors.text = "El mensaje debe tener al menos 20 caracteres.";
  }
  return errors;
};

export default function Contacto() {
  const [errors, setErrors] = useState({ e: "" });
  const [input, setInput] = useState({
    name: "",
    email: "",
  });

  const [state, handleSubmit] = useForm("mqknqpqg");
  if (state.succeeded) {
    return (
      <div className="thanks_page">
        <p className="thanksContact_text">Gracias por contactarte!</p>
        {/* <Link to="/webdevportfolio" className="back_btn_thanks">
          Volver a inicio
        </Link> */}
          <div className="findMe_section">
        <h2>Puedes encontrarme en:</h2>
        <FindMe />
      </div>
      </div>
    );
  }

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <section className="myForm">
      <motion.h2
     initial={{ scale: 1.25, y: 200, opacity: 0 }}
     whileInView={{ scale: 1, y: 0, opacity: 1 }}
     transition={{ duration: 0.8, type: "tween" }}
     viewport={{ once: true }}
      >
        Escribime
      </motion.h2>
      <form className="form_data" onSubmit={handleSubmit}>
        <div className="data">
          <div className="input_wrapper">
            <label htmlFor="name"></label>
            <input
              id="name"
              type="name"
              name="name"
              placeholder="Nombre"
              value={input.name}
              onChange={handleChange}
              required={true}
              minLength="3"
            />
            {errors.name && (
              <p className="error_message">{errors.name}</p>
            )}
          </div>
          <div className="input_wrapper">
            <label htmlFor="email"></label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={input.email}
              onChange={handleChange}
              required={true}
            />
            {errors.email && (<p className="error_message">{errors.email}</p>)}
          </div>
        </div>
       
        <div className="input_wrapper">
          <textarea
            id="text"
            name="text"
            placeholder="Deja tu mensaje"
            value={input.text}
              onChange={handleChange}
            required={true}
            minLength="20"
          />
          {errors.text && (<p className="error_message">{errors.text}</p>)}
        </div>

        <div>
        {
          Object.keys(errors).length ?
          <button className="contact_btn_notSubmit" type='submit' disabled>
            Completa el formulario</button> :
          <button type="submit" disabled={state.submitting}>
            Enviar
          </button>
        }
        </div>
      </form>
      <div className="findMe_section">
      <motion.h2
              initial={{ scale: 1.05, y: -200, opacity: 0 }}
              whileInView={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: "tween" }}
              viewport={{ once: true }}
        >Puedes encontrarme en:</motion.h2>
       <FindMe />
      </div>
    </section>
  );
}
