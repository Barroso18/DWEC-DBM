//Cargar el json
/*import Swal from 'sweetalert2'

// or via CommonJS
const Swal = require('sweetalert2')*/


let libros = fetch("datos.json").then(function(){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "NO SE PUEDE CARGAR EL ARCHIVO",
      });
}).catch(function(){
    Swal.fire(
        `NO SE PUEDE CARGAR EL ARCHIVO`,
        ` puntos`,
        'success'
    )
});









let buscaAutor = document.getElementById("idAutores");
let autores = new Set();
/*libros.forEach(element => {
    if(!autores.has(element.Autor)){
        autores.add(element.Autor);
    }
});
console.log(autores);
autores.forEach(element=>{
    let opcion = document.createElement("option");
    opcion.value = element;
    opcion.innerHTML = element
    buscaAutor.appendChild(opcion)
})
function muestralibros(evento){
    
    let cuerpo = document.getElementById("idcuerpoTabla");
    cuerpo.innerHTML="";
    libros.forEach(element=>{
        if(element["Autor"] === evento.target.value){
            let tr = crearElemento("tr",``,cuerpo);
            crearElemento("td",`${element["Titulo"]}`,tr);
            crearElemento("td",`${element["Fecha"]}`,tr);
        }
    })
}
buscaAutor.addEventListener("change",muestralibros);


function crearElemento(tipo, contenido, padre) {
    // Crear el elemento del tipo especificado
    let hijo = document.createElement(tipo)
    // Indicamos el contenido
    hijo.innerHTML = contenido
    //añadir el nodo al documento
    padre.appendChild(hijo)

    hijo.addEventListener("click", function () {
        this.remove()
    })
    return hijo
}*/