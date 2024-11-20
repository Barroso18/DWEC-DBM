let numsocios = prompt("Introduzca el numero de socios");
while(Number.isNaN(numsocios)){
    numsocios = prompt("Error Introduzca un numero de socios");
}
numsocios = Number.parseInt(numsocios);
for(let i =0; i<numsocios;i++){
    agregaSocio();
}
function agregaSocio(){

}







/*
//  Solucion

// Función para validar una dirección de correo electrónico
function validarEmail(email) {
    // Comprobar si contiene al menos un '@'
    return email.indexOf("@") !== -1;
}

// Array para almacenar los datos de los socios
const socios = [];

// Solicitar el número de socios
const numeroSocios = parseInt(prompt("Introduce el número de socios:"), 10);

if (!isNaN(numeroSocios) && numeroSocios > 0) {
    // Recorrer tantas veces como el número de socios
    for (let i = 1; i <= numeroSocios; i++) {
        const nombre = prompt(`Introduce el nombre del socio ${i}:`);
        let email = "";

        // Pedir email hasta que sea válido
        do {
            email = prompt(`Introduce el correo electrónico del socio ${i}:`);
            if (!validarEmail(email)) {
                alert("Correo electrónico no válido. Por favor, introduce un correo con '@'.");
            }
        } while (!validarEmail(email));

        // Almacenar los datos en el array
        socios.push({ nombre, email });
    }

    // Mostrar los datos de los socios
    alert("Datos de los socios registrados:");
    socios.forEach((socio, index) => {
        alert(`Socio ${index + 1}:\nNombre: ${socio.nombre}\nEmail: ${socio.email}`);
    });
} else {
    alert("Por favor, introduce un número válido de socios.");
}
*/