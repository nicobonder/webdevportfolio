// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contacto() {
  const [state, handleSubmit] = useForm("mqknqpqg");
  if (state.succeeded) {
      return <p className='thanksContact'>Gracias por contactarte</p>;
  }
  return (
      <section className='myForm'>
        <h2>Escribime</h2>
        <form onSubmit={handleSubmit}>
            <div className="data">   
                <label htmlFor="name"></label>
                <input
                    id="name"
                    type="name" 
                    name="name"
                    placeholder='Nombre'
                    required={true}
                    minLength= "4"
                />

                <label htmlFor="email"></label>
                <input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder='Email'
                    required={true}
                />
            </div>
            <ValidationError className="validationError"
                prefix="" 
                field="email"
                errors={state.errors}
            />

            <textarea
                id="text"
                name="text"
                placeholder='Deja tu mensaja'
                required={true}
                minLength= "20"
            />
            <ValidationError 
                prefix="text" 
                field="text"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Enviar
            </button>
        </form>
    </section>
  );
}
function App() {
  return (
    <Contacto />
  );
}
