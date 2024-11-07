autores=[
    [ "Carmen Laforet", "Nada",  "1945"],
    [ "Juan Rulfo", "Pedro Páramo",  "2014"],
    [ "Juan Rulfo", "El Llano en Llamas",  "2013"],
    [ "Rosa Montero", "Cuentos verdaderos",  "2024"],
    [ "Pablo Neruda", "Veinte poemas de amor y una canción desesperada",  "2013"],
    [ "Almudena Grandes", "La madre de Frankenstein",  "2020"],
    [ "Miguel de Cervantes Saavedra", "Don Quijote de la Mancha",  "1605"],
    [ "Jorge Luis Borges", "Ficciones",  "2014"],
    [ "Rosa Chacel", "Memorias de Leticia Valle",  "1945"],
    [ "Pablo Neruda", "Antología poética",  "2014"],
    [ "Rosa Chacel", "Saturnal",  "1972"],
    [ "Carmen Laforet", "La Isla de los Demonios",  "1952"],
    [ "Jorge Luis Borges", "El sur",  "1953"],
    [ "Pablo Neruda", "Confieso que he vivido",  "2010"]
]

function crearElemento(tipo, contenido, padre) {
    // Crear el elemento del tipo especificado
    let hijo = document.createElement(tipo)
    // Indicamos el contenido
    hijo.innerHTML = contenido
    //añadir el nodo al documento
    padre.appendChild(hijo)

    hijo.addEventListener("click", function () {
        this.remove()
    })

    return hijo


}