let libros = [
    {"Autor": "Carmen Laforet", "Titulo": "Nada", "Fecha": "1945"},
    {"Autor": "Juan Rulfo", "Titulo": "Pedro Páramo", "Fecha": "2014"},
    {"Autor": "Juan Rulfo", "Titulo": "El Llano en Llamas", "Fecha": "2013"},
    {"Autor": "Rosa Montero", "Titulo": "Cuentos verdaderos", "Fecha": "2024"},
    {"Autor": "Pablo Neruda", "Titulo": "Veinte poemas de amor y una canción desesperada", "Fecha": "2013"},
    {"Autor": "Almudena Grandes", "Titulo": "La madre de Frankenstein", "Fecha": "2020"},
    {"Autor": "Miguel de Cervantes Saavedra", "Titulo": "Don Quijote de la Mancha", "Fecha": "1605"},
    {"Autor": "Jorge Luis Borges", "Titulo": "Ficciones", "Fecha": "2014"},
    {"Autor": "Rosa Chacel", "Titulo": "Memorias de Leticia Valle", "Fecha": "1945"},
    {"Autor": "Pablo Neruda", "Titulo": "Antología poética", "Fecha": "2014"},
    {"Autor": "Rosa Chacel", "Titulo": "Saturnal", "Fecha": "1972"},
    {"Autor": "Carmen Laforet", "Titulo": "La Isla de los Demonios", "Fecha": "1952"},
    {"Autor": "Jorge Luis Borges", "Titulo": "El sur", "Fecha": "1953"},
    {"Autor": "Pablo Neruda", "Titulo": "Confieso que he vivido", "Fecha": "2010"}
];
let buscaAutor = document.getElementById("idAutores");
//console.log(autor.value);
let autores = new Set();
libros.forEach(element => {
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
    let filas = document.getElementsByTagName("tr");
    /*for(let i=0; i<filas.length;i++){
        //if(i!=0){
            filas[i].remove();
        //}
    }*/
   // filas.
    //forEach(element=>{element.remove()})
    let tabla = document.getElementById("idTabla");
    let rowcabecera = document.createElement("tr")
    let cabTitulo = document.createElement("th")
    let cabFecha = document.createElement("th")
    cabTitulo.innerHTML = "Titulo"
    cabFecha.innerHTML = "Fecha"
    rowcabecera.appendChild(cabTitulo)
    rowcabecera.appendChild(cabFecha)
    tabla.append(rowcabecera)
    libros.forEach(element=>{
        if(element["Autor"] === evento.target.value){
            let tr = document.createElement("tr");
            let tdTitulo = document.createElement("td");
            let tdFecha = document.createElement("td");
            tdTitulo.innerHTML = element["Titulo"]
            tdFecha.innerHTML = element["Fecha"]
            tr.appendChild(tdTitulo)
            tr.appendChild(tdFecha)
            //resultado.add(element)
            
            tabla.appendChild(tr)
        }
    })
    //console.log(resultado);
}
buscaAutor.addEventListener("change",muestralibros);