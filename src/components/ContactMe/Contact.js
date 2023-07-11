// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// import ParticleBackground from "../particleBackground";

import "./Contact.css";
import { useState } from "react";
import FindMe from "./FindMe";

const validation = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "Please, enter your name.";
  } else if (input.name.length < 3) {
    errors.name = "The name must have a minimum of 3 characters.";
  } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(input.name)) {
    errors.name = "Letters only, please.";
  }
  if (!input.email) {
    errors.email = "Please, enter your email.";
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = "It should be a valid email.";
  } else if (!input.text) {
    errors.text = "Please, leave a message.";
  } else if (input.text.length < 20) {
    errors.text = "The message must have a minimum of 20 characters.";
  }
  return errors;
};

export default function Contact() {
  const [errors, setErrors] = useState({ e: "" });
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  const [state, handleSubmit] = useForm("mqknqpqg");

  if (state.succeeded) {
    return (
      <div className='thanks_page'>
        <p className='thanksContact_text'>Thanks for your message!</p>
        {/* <Link to='/webdevportfolio' className='back_btn_thanks'>Back to Home</Link> */}
        <div className='findMe_section'>
          <h2>You can also find me at:</h2>
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
    <section className='myForm'>
      {/* <ParticleBackground /> */}

      <motion.h2
        initial={{ scale: 1.25, y: -200, opacity: 0 }}
        whileInView={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "tween" }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>
      <form className='form_data' onSubmit={handleSubmit}>
        <div className='data'>
          <div className='input_wrapper'>
            <label htmlFor='name'></label>
            <input
              id='name'
              type='name'
              name='name'
              placeholder='Name'
              value={input.name}
              onChange={handleChange}
              required={true}
              minLength='3'
            />
            {errors.name && <p className='error_message'>{errors.name}</p>}
          </div>
          <div className='input_wrapper'>
            <label htmlFor='email'></label>
            <input
              id='email'
              type='email'
              name='email'
              placeholder='Email'
              value={input.email}
              onChange={handleChange}
              required={true}
            />
            {errors.email && <p className='error_message'>{errors.email}</p>}
          </div>
        </div>

        <div className='input_wrapper'>
          <textarea
            id='text'
            name='text'
            placeholder='Leave your message'
            value={input.text}
            onChange={handleChange}
            required={true}
            minLength='20'
          />
          {errors.text && <p className='error_message'>{errors.text}</p>}
        </div>

        <div>
          {Object.keys(errors).length ? (
            <button className='contact_btn_notSubmit' type='submit' disabled>
              Complete the form
            </button>
          ) : (
            <button type='submit' disabled={state.submitting}>
              Send
            </button>
          )}
        </div>
      </form>
      <div className='findMe_section'>
        <motion.h2
          initial={{ scale: 1.05, y: -200, opacity: 0 }}
          whileInView={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "tween" }}
          viewport={{ once: true }}
        >
          You can also find me at:
        </motion.h2>
        <FindMe />
      </div>
    </section>
  );
}
