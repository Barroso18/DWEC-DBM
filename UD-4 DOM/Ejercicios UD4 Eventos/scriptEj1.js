//  Ejercicio 1
let boton = document.getElementById("idBoton");
//  idBoton
let cuerpo = document.body;
/*  boton.addEventListener("click",() => {

    
});*/
function cambiaColores(){
    let rojo=Math.floor(Math.random()*256);
    let verde=Math.floor(Math.random()*256);
    let azul=Math.floor(Math.random()*256); 
    cuerpo.setAttribute("style",`background-color:rgb(${rojo},${verde},${azul});`);
}
//cuerpo.addEventListener("click",acciones);
cuerpo.onclick=acciones;
function acciones(evento){
    //console.log(evento.target.id)
    if(evento.target.id === "idcuerpo"){
        //poner color blanco
        cuerpo.setAttribute("style",`background-color:white`);
    }else{
        //color aleatorio
        cambiaColores();
    }
    
}
