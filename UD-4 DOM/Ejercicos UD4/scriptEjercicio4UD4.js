//  Ejercicio 4

let deporte,serie,pelicula,resdeporte,resserie,respelicula = null;
let aceptar = document.getElementById("idaceptar");
aceptar.addEventListener("click",function (){
    deporte = document.getElementById("iddeporte");
    serie = document.getElementById("idserie");
    pelicula = document.getElementById("idpelicula");
    resdeporte = crearElemento("p",deporte.value,document.getElementById("resdeportes"));
    resserie = crearElemento("p",serie.value,document.getElementById("resseries"));
    respelicula = crearElemento("p",pelicula.value,document.getElementById("respeliculas"));
    deporte.value ="";
    deporte.focus();
    resdeporte.classList.add("azul");
    resdeporte.previousElementSibling.classList.add("verde");
    //  resdeporte.parentElement.previousElementSibling.classList.add("verde");
    //let tdeporte = document.createElement("h2");
    //let resdeporte = document.createElement("p");
    //tdeporte.innerHTML = "¿Mi deporte favorito?";
    //tdeporte.setAttribute("style","color:red");
    //resdeporte.innerHTML = deporte;//.getAttribute("value")
    //let tserie = document.createElement("h2");
    //let resserie = document.createElement("p");
    /*tserie.innerHTML = "¿Mi serie favorito?";
    tserie.setAttribute("style","color:red");
    resserie.innerHTML = serie;//.getAttribute("value")
    document.body.appendChild(tdeporte);
    document.body.appendChild(resdeporte);
    document.body.appendChild(tserie);
    document.body.appendChild(resserie);*/
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
    return hijo;
}