const PIEDRA = 'piedra'
const PAPEL = 'papel'
const TIJERA = 'tijera'
const CONDICIONGANAR = [`${PIEDRA}-${TIJERA}`,`${TIJERA}-${PAPEL}`,`${PAPEL}-${PIEDRA}`]
const opciones = [PIEDRA,PAPEL,TIJERA]
jugar()
function obtenerEleccionComputadora(){
    //Math.random()
    let i = Math.floor(Math.random()*3);
    return opciones[i];
}

function determinarGanador(jugador,computadora){
    if(jugador == computadora){
        return "Es un empate";
    }else if(CONDICIONGANAR.find((elemento)=> elemento === `${jugador}-${computadora}`)){// CONDICIONGANAR.find() -> `${jugador}-${computadora}`
        return "¡Ganaste!";
    }else{
        return "La computadora gana";
    }
}

function jugar(){
    let eleccionJugador = -1;
    let eleccionComputadora = -1;
    do{
        eleccionJugador = parseInt(prompt("Selecciona: piedra(0), papel(1), tijera(2)"));
    }while(eleccionJugador >2 || eleccionJugador <0){
        eleccionComputadora = obtenerEleccionComputadora();
        let resultado = determinarGanador(opciones[eleccionJugador],eleccionComputadora);
        console.log(`Eleccion jugador ${opciones[eleccionJugador]} , eleccion computadora ${eleccionComputadora}`);
        console.log(resultado);

    }
}
