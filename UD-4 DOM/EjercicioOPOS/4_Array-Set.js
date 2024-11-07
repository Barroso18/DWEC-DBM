const libros = [
    new Set([ "Juan Rulfo",  "Pedro Páramo",  "2014" ]),
    new Set([ "Juan Rulfo",  "El Llano en Llamas",  "2013" ]),
    new Set([ "Rosa Montero",  "Cuentos verdaderos",  "2024" ]),
    new Set([ "Pablo Neruda",  "Veinte poemas de amor y una canción desesperada",  "2013" ]),
    new Set([ "Almudena Grandes",  "La madre de Frankenstein",  "2020" ]),
    new Set([ "Miguel de Cervantes Saavedra",  "Don Quijote de la Mancha",  "1605" ]),
    new Set([ "Jorge Luis Borges",  "Ficciones",  "2014" ]),
    new Set([ "Rosa Chacel",  "Memorias de Leticia Valle",  "1945" ]),
    new Set([ "Pablo Neruda",  "Antología poética",  "2014" ]),
    new Set([ "Rosa Chacel",  "Saturnal",  "1972" ]),
    new Set([ "Carmen Laforet",  "La Isla de los Demonios",  "1952" ]),
    new Set([ "Jorge Luis Borges",  "El sur",  "1953" ]),
    new Set([ "Pablo Neruda",  "Confieso que he vivido",  "2010" ])
];
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


}


let buscaAutor = document.getElementById("idAutores");


let autores = new Set();
libros.forEach(element => {
    if(!autores.has(element.get("autor"))){
        autores.add(element.get("autor"));
    }
});

console.log(autores);

autores.forEach(element=>{
    let opcion = document.createElement("option");
    opcion.value = element;
    opcion.innerHTML = element;
    buscaAutor.appendChild(opcion)
})
function muestralibros(evento){
   
    let cuerpo = document.getElementById("idcuerpoTabla");
    cuerpo.innerHTML=` `;
    
    libros.forEach(element=>{
        if(element.get("autor") === evento.target.value){
            let tr = crearElemento("tr",``,cuerpo);
            //let tdTitulo = 
            crearElemento("td",`${element.get("titulo")}`,tr);
            //let tdFecha = 
            crearElemento("td",`${element.get("año")}`,tr);;
            
        }
    })
}
buscaAutor.addEventListener("change",muestralibros);