// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";
import "./Contact.css";

import { motion } from "framer-motion"
import ParticleBackground from "../particleBackground";

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
        <div className="findMe_div">
          <a
            href="https://www.linkedin.com/in/nicobonder/"
            alt="link a Linkedin"
          >
            <svg
              id="linkedin_icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </a>
          <a href="https://github.com/nicobonder/" alt="link a github">
            <svg
              id="github_icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 
                        5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0
                        6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 
                        2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 
                        8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 
                        0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7
                        1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 
                        8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 
                        23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 
                        62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7
                        25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0
                            33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 
                            496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 
                            1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 
                            3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 
                            6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 
                            1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
          </a>
        </div>
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
       {/* <ParticleBackground /> */}
      <motion.h2
     initial={{ scale: 1.25, x: 200, opacity: 0 }}
     whileInView={{ scale: 1, x: 0, opacity: 1 }}
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
        {/* <ValidationError
          className="validationError"
          prefix=""
          field="email"
          errors={state.errors}
        /> */}
        <div className="input_wrapper">
          <textarea
            id="text"
            name="text"
            placeholder="Deja tu mensaja"
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
        <h2>Puedes encontrarme en:</h2>
        <div className="findMe_div">
          <a
            href="https://www.linkedin.com/in/nicobonder/"
            alt="link a Linkedin"
          >
            <svg
              id="linkedin_icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </a>
          <a href="https://github.com/nicobonder/" alt="link a github">
            <svg
              id="github_icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 
                        5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0
                        6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 
                        2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 
                        8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 
                        0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7
                        1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 
                        8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 
                        23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 
                        62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7
                        25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0
                            33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 
                            496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 
                            1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 
                            3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 
                            6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 
                            1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
// function App() {
//   return (
//     <Contacto />
//   );
// }
