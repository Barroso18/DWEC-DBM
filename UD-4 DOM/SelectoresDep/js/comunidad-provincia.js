let provincias = new Map([
    ["Andalucia",["Cádiz","Córdoba","Granada","Sevilla","Huelva","Jaen","Málaga"]],    
    ["Madrid",["Madrid Capital","Vallecas"]],
    ["Galicia",["Lugo","Orense","Pontevedra"]]
]);


provincias.keys().forEach(e =>{
    let selecAut = document.getElementById("id_autonomia");
    //e[1]
    crearElemento("option",e,selecAut);
});

function crearElemento(tipo, contenido, padre) {
    // Crear el elemento del tipo especificado
    let hijo = document.createElement(tipo)
    // Indicamos el contenido
    hijo.innerHTML = contenido
    //añadir el nodo al documento
    padre.appendChild(hijo)

    hijo.addEventListener("selected", function () {
        this.remove()
    })

    return hijo


}