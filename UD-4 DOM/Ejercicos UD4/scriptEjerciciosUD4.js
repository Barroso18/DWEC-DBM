//EJERCICIO 1
// Fuente de informacion
const parrafo1 = {
    titulo: "Primer bloque de párrafos",
    hijos:[
        "Este es el primer párrafo","Este es el segundo párrafo","Este es el tercer párrafo"]
};
const parrafo2 = {
    titulo: "Segundo bloque de párrafos 2",
    hijos:["Este es el primer párrafo","Este es el segundo párrafo","Este es el tercer párrafo"]
};
const estructura = new Set();
estructura.add(parrafo1);
estructura.add(parrafo2);
//Crear el elemento en local
let h1 = document.createElement("h1");
// Completo el elemento en local
h1.innerHTML = parrafo1.titulo;
//  Añadir el elemento en JS a HTML, añado a la pagina
document.body.appendChild(h1);

let hijo = null;
parrafo1.hijos.forEach(e => {
    hijo =  document.createElement("p");
    //Completo el elemento en local
    hijo.innerHTML = e;
    document.body.appendChild(hijo);
});