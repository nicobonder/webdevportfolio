import React from "react";
import { useForm, Controller } from "react-hook-form";

export default function App() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit((data) => {
        console.log(data);
    })}
    >
      <input {...register("name", { required: true })} placeholder="Nombre" />
      {errors.name?.type === 'required' && "Name is required"}

      <input {...register("email", { required: true })} placeholder="Email" />
      {errors.email?.type === 'required' && "Email is required"}

      <input {...register("text", { required: true })} placeholder="Dejame tu mensaje"/>
      {errors.text?.type === 'required' && "Please, enter your message"}

      <input type="submit" />
    </form>
  );
}