import { useState } from 'react';
import Campo_input_form from '../componenets/Campo_input_form'



function Formulario() {

    const [formdata, setFormdata] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const respuesta = await fetch('/api/customers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formdata)
            });

            if (respuesta.ok) {
                alert("¡Datos guardados exitosamente en MongoDB!");
                setFormdata({ nombre: "", apellido: "", email: "", password: "" }); // Limpiar formulario
            } else {
                alert("Hubo un error al guardar los datos.");
            }
        } catch (error) {
            console.error("Error al conectar con el servidor:", error);
            alert("Error de conexión. Verifica que el backend esté corriendo.");
        }
    };

    return (
        <>
            <div className="formulario">
                <h1>Formulario</h1>
                <form onSubmit={handleSubmit}>
                    <Campo_input_form label="Nombre" type="text" id="nombre" name="nombre" valor={formdata.nombre} onChange={handleChange} />
                    <Campo_input_form label="Apellido" type="text" id="apellido" name="apellido" valor={formdata.apellido} onChange={handleChange} />
                    <Campo_input_form label="Email" type="email" id="email" name="email" valor={formdata.email} onChange={handleChange} />
                    <Campo_input_form label="Password" type="password" id="password" name="password" valor={formdata.password} onChange={handleChange} />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>
    )
}
export default Formulario