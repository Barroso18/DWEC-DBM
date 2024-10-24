//  Ejercicio 4

let deporte,serie,pelicula;
let aceptar = document.getElementById("idaceptar");
aceptar.addEventListener("click",function (){
    deporte = document.getElementById("iddeporte").value;
    serie = document.getElementById("idserie").value;
    pelicula = document.getElementById("idpelicula").value;
    let titulo  = document.createElement("h1");
    titulo.innerHTML="MIS AFICIONES ....";
    document.body.appendChild(titulo);
    let tdeporte = document.createElement("h2");
    let resdeporte = document.createElement("p");
    tdeporte.innerHTML = "¿Mi deporte favorito?";
    tdeporte.setAttribute("style","color:red");
    resdeporte.innerHTML = deporte;//.getAttribute("value")
    let tserie = document.createElement("h2");
    let resserie = document.createElement("p");
    tserie.innerHTML = "¿Mi serie favorito?";
    tserie.setAttribute("style","color:red");
    resserie.innerHTML = serie;//.getAttribute("value")
    document.body.appendChild(tdeporte);
    document.body.appendChild(resdeporte);
    document.body.appendChild(tserie);
    document.body.appendChild(resserie);
});


function crearElemento(tipo,contenido,padre){
    //Crear elemento del tipo especificadp
    let hijo =  document.createElement(tipo);
    //  Introduce en el elemento el contenido
    hijo.innerHTML = contenido;
    //  Añadir al padre
    padre.appendChild(hijo);
    //  Añadimos el evento click y le decimos que muestra por consola su contenido
    hijo.addEventListener("click",function(){
        console.log(this.innerHTML);
    });
    //  Añadimos el evento click y le decimos que borre su contenido
    hijo.addEventListener("click",function(){
        this.remove();
    });
}