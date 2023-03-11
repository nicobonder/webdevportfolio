import React, {useState} from "react";
import RegisterSuccess from "./RegisterSuccess";
 
import Contact from "./ContactMe/Contact";
 
export default function Form(){
    const[formIsSubmitted, setFormIsSubmitted] = useState(false);
 
    const submitForm = () => {
        setFormIsSubmitted(true);
    };
   
    return (
        <div>
            {!formIsSubmitted ? <Contact submitForm={submitForm} /> : <RegisterSuccess/> }
        </div>
    )

}
