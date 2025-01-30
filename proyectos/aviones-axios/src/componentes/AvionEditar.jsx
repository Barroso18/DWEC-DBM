import React, {useEffect,useState} from "react";
import '../estilos/Informe.css';
import '../servicios/servicioAviones';
import Swal from "sweetalert2";
import ServicioAviones from "../servicios/servicioAviones.js";
import servicioAviones from "../servicios/servicioAviones";

function AvionEditar({aviones, setAviones, onClose}){
    // errores Almacena los errores del formulario
    const [errores,setErrores] = useState({});
    const fabricantes = ["BOEING","AIRBUS","ATR","CESSNA","EMBRAER","BOMBARDIER"];
    // Estado para almacenar la opción seleccionada
    const [fabricanteSeleccionado, setFabricanteSeleccionado] = useState("");
    //Almacenamos los valores del formulario
    const [form,setForm] = useState({
        id:aviones.id,
        nombre:aviones.nombre,
        fabricante:aviones.fabricante,
        descripcion:aviones.descripcion,
        url:aviones.url
    });
    //////////////////////////////////////
    // Función para gestionar los cambios en los campos del formulario
    //////////////////////////////////////
    const gestionarCambio = (e)=>{
        const {name,value} = e.target;
        setForm({
            ...form,
            [name]:value,
        });
    }

    // Manejador del evento onChange
    const handleChange = (event) => {
        setFabricanteSeleccionado(event.target.value);
        console.log("Fabricante seleccionado:", event.target.value);
    };
    //////////////////////////////////////
    // Función de validación
    //////////////////////////////////////
    const validar = ()=>{
        const nuevosErrores = {};

        // Validación para "nombre"
        if(!form.nombre.trim()){
            nuevosErrores.nombre = 'El nombre es obligatorio';
        }

        // Validacion para "fabricante"
        if(!fabricantes.includes(form.fabricante.toUpperCase())){
            nuevosErrores.fabricante = 'El fabricante escogido no existe';
        }

        // Validación para la "url"
        if(!form.url.toLocaleLowerCase().endsWith(".jpg")){
            nuevosErrores.url = 'La imagen debe ser formato .jpg';
        }

        // Validación para la "descripcion"
        if(form.descripcion.length === 0 || form.descripcion.length >100){
            nuevosErrores.descripcion = 'La descripción debe tener entre 1 y 100 caracteres';
        }

        setErrores(nuevosErrores);

        // Retorna true si no hay errores, de lo contrario retorna false
        return Object.keys(nuevosErrores).length === 0;
    };

    //Funcion para generar autoincrement del id
    /*const autoIncremental = () =>{
        const [aviones, setAviones] = useState([]);
        useEffect(() => {
        ServicioAviones.getAll()
            .then((response) => {
            setAviones(response.data);
            })
            .catch((error) => {
            //Creamos una alerta en caso de que no responda el fichero
            Swal.fire({
                title: "¿Tienes Internet?",
                text: "No consigo descargar las aficiones :(",
                icon: "question"
            });
            });
        }, []);
        if(aviones.length === 0 || aviones === null){
            return 0;
        }else{
            return (aviones[aviones.length-1].id)+1;
        }
    }*/


    //Función para manejar el envío del formulario
    const enviaFormulario = (e) =>{
        e.preventDefault();

        // Validar antes de enviar
        if(validar()){
            console.clear();
            console.log('Formulario enviado', form);

            const editarAvion = {
                nombre: form.nombre,
                descripcion: form.descripcion,
                fabricante: form.fabricante,
                url: form.url
            }

            // Enviar por Axios al Json de BD
            servicioAviones.update(nuevoAvion.id,editarAvion)
            .the(response =>{
                Swal.fire("Avión Actualizado correctamente");
                // Limpiar el formulario despues de agregar
                setForm({
                    nombre: '',
                    descripcion: '',
                    fabricante: '',
                    url: ''
                });
                // Le ponemos el id correcto de la BD
                //nuevoAvion.id = response.data.id

                //Actualizar el estado local de aviones
                servicioAvionesl.getAll()
                    .then((response)=>{
                        setAviones(response.data)
                    })

                // Cerramos el modal
                onclose();
            })
            .catch(error =>{
                Swal.fire("ERROR, Al crear el avión");
            });
        }
    };
    return(
        <form onSubmit={enviaFormulario}>
            {/* Campo de texto para nombre */}
            <label htmlFor="nombre">Nombre del Avión a Añadir</label>
            <input
                id="nombre"
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={gestionarCambio}
                placeholder="Escribe el nombre del avión"
            />
            {errores.nombre && <p className="error">{errores.nombre}</p>}
            {/* Campo de texto para descripción */}
            <label htmlFor="descripcion">Descripción del avión</label>
            <textarea
                id="descripcion"
                name="descripcion"
                value={form.descripcion}
                onChange={gestionarCambio}
                placeholder="Escribe una breve descripción del avión"
            />
            {errores.descripcion && <p className="error">{errores.descripcion}</p>}
            {/* Seleccion para fabricante */}
            <select
                value={fabricanteSeleccionado}
                onChange={handleChange}>
                <option value="">-- Selecciona --</option>
                {fabricantes.map((fabricante, index) => (
                    <option key={index} value={fabricante.toUpperCase()}>
                        {fabricante}
                    </option>
                ))}
            </select>
            {errores.fabricante && <p className="error">{errores.fabricante}</p>}
            {/* Campo de texto para url */}
            <label htmlFor="url">Url de la foto del avión(formato .jpg)</label>
            <input
                id="url"
                type="text"
                name="url"
                value={form.url}
                onChange={gestionarCambio}
                placeholder="Escribe la url de la foto del avión"
            />
            {errores.url && <p className="error">{errores.url}</p>}
            {/* Botón de envío */}
            <button type="submit">Enviar</button>
        </form>
    );
}

export default AvionEditar;