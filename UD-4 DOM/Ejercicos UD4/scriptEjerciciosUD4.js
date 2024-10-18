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
let contenedor = new Set();
contenedor.add(parrafo1);
contenedor.add(parrafo2);
//Crear el elemento en local
//let h1 = document.createElement("h1");
// Completo el elemento en local
//h1.innerHTML = parrafo1.titulo;
//  Añadir el elemento en JS a HTML, añado a la pagina
//document.body.appendChild(h1);


/*parrafo1.hijos.forEach(e => {
    let hijo =  document.createElement("p");
    //Completo el elemento en local
    hijo.innerHTML = e;
    document.body.appendChild(hijo);
});*/
/*parrafo2.hijos.forEach(e => {
    let hijo =  document.createElement("p");
    //Completo el elemento en local
    hijo.innerHTML = e;
    document.body.appendChild(hijo);
});*/

//Utilizando una función
/*crearElemento("h1",parrafo1.titulo,document.body);
parrafo1.hijos.forEach(e => {
    crearElemento("p",e,document.body)
});
crearElemento("h1",parrafo2.titulo,document.body);
parrafo2.hijos.forEach(e => {
    crearElemento("p",e,document.body)
});*/

/*function crearElemento(tipo,contenido,padre){
    //Crear elemento del tipo especificadp
    let hijo =  document.createElement(tipo);
    //  Introduce en el elemento el contenido
    hijo.innerHTML = contenido;
    //  Añadir al padre
    padre.appendChild(hijo);
}*/
//  Optimizamos el codigo con un contenedor y un forEach
contenedor.forEach(parrafo=>{
    crearElemento("h1",parrafo.titulo,document.body);
    parrafo.hijos.forEach(e => {
        crearElemento("p",e,document.body)
    });
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