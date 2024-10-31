//  Ejercicio 2
let cuerpo = document.body
cuerpo.addEventListener("mousemove",muestraPosicion);
function muestraPosicion(evento){
    let posX = document.getElementById("idX")
    let posY = document.getElementById("idY")
    posX.innerHTML= "Posición X: "+ evento.clientX;
    posY.innerHTML= "Posición Y: "+ evento.clientY;
}