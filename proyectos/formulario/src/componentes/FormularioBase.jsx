import React, { useState } from "react";
//import './FormularioBase.css';

function FormularioBase(){
    const [form, setForm] = useState({
        nombre:'',
        apellido:''
    })
    const gestionarCambio = (evento)=>{
        console.log(evento.target);
        const {name,value,type,checked} = evento.target;
        setForm({
            ...form,
            [name]:value,
        });
    }
    const enviarFormulario = (evento) =>{
        evento.preventDefault();
        console.log(`Valores del Formulario: ${form}`)
    }
    return(
        <form onSubmit={enviarFormulario}>
            {/*Campo de texto para nombre*/}
            <label htmlFor="nombre">Nombre</label>
            <input
                id="nombre"
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={gestionarCambio}
                placeholder="Escribe tu nombre"
            />
             {/*Campo de texto para apellido*/}
             <label htmlFor="apellido">Apellido</label>
            <input
                id="apellido"
                type="text"
                name="apellido"
                value={form.apellido}
                onChange={gestionarCambio}
                placeholder="Escribe tu apellido"
            />

            {/*Botón de envio*/}
            <input type="submit">Enviar</input>
        </form>
    );
}

export default FormularioBase