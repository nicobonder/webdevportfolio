import React from "react"

export default function Contact(){
    const[formData, setFormData] = React.useState(
        {
            name: "",
            email: "",
            text: ""
        }
    )

    function handleChange(event) {
        const {name, value, type} = event.target
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
    }

    return(
        <section className="contactSection">
            <h2>Contactame</h2>
            <form onSubmit={handleSubmit}>
                <div className="data">
                    <input
                        type="text"
                        placeholder="Nombre"
                        onChange={handleChange}
                        name="name"
                        value={formData.name}
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                    />
                </div>      
                <textarea
                    value={formData.text}
                    placeholder="¿Cómo puedo ayudarte?"
                    onChange={handleChange}
                    name="text"
                />

                <button className="send">Enviar</button>

            </form>

        </section>
    )
}