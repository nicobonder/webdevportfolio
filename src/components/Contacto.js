import React from "react";
import { useForm, Controller } from "react-hook-form";

export default function App() {
    const { register, 
            handleSubmit,
            formState: { errors }  
        } = useForm({
            defaultValues: {
                name: "",
                email: ""
            }
        });
    /*const onSubmit = data => console.log(data);*/
   
  return (
    <form onSubmit={handleSubmit((data) => {
        console.log(data);
    })}
    >
      <input {...register("name", { 
          required: 'El nombre es necesario',
          minLength: {value: 4,
          message: "Por lo menos 4 letras"}
      })} placeholder="Nombre" />
      <p>{errors.name?.message}</p>

      <input {...register("email", { required: 'Por favor un mail' })} 
      placeholder="Email" />
      <p>{errors.email?.message}</p>

      <input {...register("text", { required: 'Por favor, ingresa un mensaje', 
      minLength: {
          value: 20,
          message: "Por lo menos 20 letras"} 
        })} 
      placeholder="Dejame tu mensaje"/>
      <p>{errors.text?.message}</p>

      <input type="submit" />
    </form>
  );
}