const validation = (values) => {
   
    let errors={};
 
    if(!values.name){
        errors.name="Necesitás ingresar un nombre."
    }
    if(!values.email){
        errors.email="Por favor, ingresá un email."
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="El email es inválido."
    }
    if(!values.text){
        errors.text="Por favor, ingresá tu mensaje."
    }
    return errors;
};
 
export default validation;

