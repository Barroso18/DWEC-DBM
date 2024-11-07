const libros = [
    new Map([
        ["autor", "Juan Rulfo"],
        ["titulo", "Pedro Páramo"],
        ["año", "2014"]
    ]),
    new Map([
        ["autor", "Juan Rulfo"],
        ["titulo", "El Llano en Llamas"],
        ["año", "2013"]
    ]),
    new Map([
        ["autor", "Rosa Montero"],
        ["titulo", "Cuentos verdaderos"],
        ["año", "2024"]
    ]),
    new Map([
        ["autor", "Pablo Neruda"],
        ["titulo", "Veinte poemas de amor y una canción desesperada"],
        ["año", "2013"]
    ]),
    new Map([
        ["autor", "Almudena Grandes"],
        ["titulo", "La madre de Frankenstein"],
        ["año", "2020"]
    ]),
    new Map([
        ["autor", "Miguel de Cervantes Saavedra"],
        ["titulo", "Don Quijote de la Mancha"],
        ["año", "1605"]
    ]),
    new Map([
        ["autor", "Jorge Luis Borges"],
        ["titulo", "Ficciones"],
        ["año", "2014"]
    ]),
    new Map([
        ["autor", "Rosa Chacel"],
        ["titulo", "Memorias de Leticia Valle"],
        ["año", "1945"]
    ]),
    new Map([
        ["autor", "Pablo Neruda"],
        ["titulo", "Antología poética"],
        ["año", "2014"]
    ]),
    new Map([
        ["autor", "Rosa Chacel"],
        ["titulo", "Saturnal"],
        ["año", "1972"]
    ]),
    new Map([
        ["autor", "Carmen Laforet"],
        ["titulo", "La Isla de los Demonios"],
        ["año", "1952"]
    ]),
    new Map([
        ["autor", "Jorge Luis Borges"],
        ["titulo", "El sur"],
        ["año", "1953"]
    ]),
    new Map([
        ["autor", "Pablo Neruda"],
        ["titulo", "Confieso que he vivido"],
        ["año", "2010"]
    ])
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
