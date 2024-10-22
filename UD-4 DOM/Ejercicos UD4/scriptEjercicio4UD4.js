//  Ejercicio 4
let deporte = document.getElementById("iddeporte");
let serie = document.getElementById("idserie");
let pelicula = document.getElementById("idpelicula");

let aceptar = document.getElementById("idaceptar");
aceptar.addEventListener("click",function (){
    let titulo  = document.createElement("h1");
    titulo.innerHTML="MIS AFICIONES ....";
    document.body.appendChild(titulo);
    let tdeporte = document.createElement("h2")
    tdeporte.innerHTML = "¿Mi deporte favorito?";
    tdeporte.setAttribute("style");
    let resdeporte = document.createElement("p")
});