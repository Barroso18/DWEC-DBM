const autores = new Map([
    ["Juan Rulfo", ["Pedro Páramo,2024", "El Llano en Llamas,2013"]],
    ["Rosa Montero", ["Cuentos verdaderos,2024"]],
    ["Pablo Neruda", ["Veinte poemas de amor y una canción desesperada,2013", "Antología poética,2014", "Confieso que he vivido,2010"]],
    ["Almudena Grandes", ["La madre de Frankenstein,2020"]],
    ["Miguel de Cervantes Saavedra", ["Don Quijote de la Mancha,1605"]],
    ["Jorge Luis Borges", ["Ficciones,2014", "El sur,1953"]],
    ["Rosa Chacel", ["Memorias de Leticia Valle,1945", "Saturnal,1972"]],
    ["Carmen Laforet", ["La Isla de los Demonios,1952"]]
]);



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


let autoresres = new Set();
autores.forEach(element => {
    if(!autoresres.has(element.get("autor"))){
        autoresres.add(element.get("autor"));
    }
});

console.log(autoresres);

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


