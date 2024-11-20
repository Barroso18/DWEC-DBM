/*let telefono = prompt("Introduce un numero de teléfono");
let prefijo = telefono.slice(0,3);*/


// Función que evalúa el prefijo del número de teléfono
function identificarPrefijo(prefijo) {
    // Crear un Set con objetos que contienen los prefijos y lugares
    const prefijos = new Set([
        { codigo: "958", lugar: "Granada" },
        { codigo: "957", lugar: "Almería" },
        { codigo: "956", lugar: "Jaén" },
        { codigo: "955", lugar: "Córdoba" }
    ]);

    // Buscar si el prefijo coincide con algún elemento en el Set
    for (const entry of prefijos) {
        if (entry.codigo === prefijo) {
            return `El número es de ${entry.lugar}.`;
        }
    }
    

    // Si no coincide, devolver un mensaje predeterminado
    return "Ese prefijo aún no lo conozco.";
}

// Solicitar el número de teléfono al usuario
const numeroTelefono = prompt("Por favor, introduce tu número de teléfono (formato: 9 dígitos):");

// Validar si el número ingresado tiene al menos 3 dígitos para extraer el prefijo
if (numeroTelefono && numeroTelefono.length >= 3) {
    // Extraer los primeros tres caracteres del número
    const prefijo = numeroTelefono.slice(0, 3);
    // Llamar a la función y mostrar el mensaje
    const mensaje = identificarPrefijo(prefijo);
    alert(mensaje);
} else {
    alert("Número de teléfono inválido. Por favor, introduce al menos 3 dígitos.");
}
