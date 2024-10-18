//  Ejercicio 2 
let btnInsertar = document.getElementById("idInsertar");
btnInsertar.addEventListener("click",insertarAleatorio);
let ol = document.querySelector("ul");
function insertarAleatorio(){
    let i = Math.random();
    let li = document.createElement("li");
    li.innerHTML = `Nuevo elemento : ${i}`;
    ol.appendChild(li);
    //  Añadimos el evento click y le decimos que borre su contenido
    li.addEventListener("click",function(){
        this.remove();
    });
}