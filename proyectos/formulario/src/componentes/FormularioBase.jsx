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
        //console.log(`Valores del Formulario: ${form}`)
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
            id="apellidos"
            type="text"
            name="apellidos"
            value={form.apellidos}
            onChange={gestionarCambio}
            placeholder="Escribe tus apellidos"
            />

            {/*Botón de envio*/}
            <input type="submit">Enviar</input>
        </form>
    );
}

export default FormularioBase;