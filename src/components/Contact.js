import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [formSent, setFormSent] = useState(false);
  
    return (
        <section className="contactSection">
            <h2>Contact Me</h2>
            <Formik 
                initialValues={{ name: '', email: '', text: '' }}

                validate={(values) => {
                    let errors = {};

                    if(!values.name){
                        errors.name = 'Please enter a name' 
                    } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)
                    ) {
                        errors.name = 'Please use only letters and spaces'
                    }

                    if(!values.email){
                        errors.email = 'Please enter your email'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                        errors.email = 'Invalid email adress.'
                    }

                    if(!values.text){
                        errors.text = 'Please enter your message'
                    }

                    return errors;
                }}

                onSubmit={(values, { resetForm }) => {
                    resetForm();
					console.log('Form sent');
					setFormSent(true);
					setTimeout(() => setFormSent(false), 5000);
                }}
            >
            
            {( {errors} ) => (
                <form className="myForm" action="https://formspree.io/f/mqknqepr" method="post">
                    <div className="data">
                    <label htmlFor="name">Name</label>
                        <Field
                            type="text"
                            id="name"
                            name="name" 
                            placeholder="Name"
                            
                        />
                        <ErrorMessage name="name" component={() => (<div className="error">{errors.name}</div>)} />

                        <label htmlFor="email">Email</label>
                        <Field
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            
                        />
                        <ErrorMessage name="email" component={() => (<div className="error">{errors.email}</div>)} />
                    </div>      
                    <div>                        
                        <Field name="text" as="textarea"
                        placeholder="Leave me a message"
                        />
                    </div>
                    <ErrorMessage name="text" component={() => (<div className="error">{errors.text}</div>)} />

                    <button type="submit" 
                        className="send">Submit</button>
                    {formSent && <p className="success">Form sent successfully! Thanks!</p>}
            </form>
            )}
                
            </Formik>

        </section>
    );
}
  

    export default Contact;

