const PIEDRA = 'piedra'
const PAPEL = 'papel'
const TIJERA = 'tijera'

const CONDICIONGANAR = [`${PIEDRA}-${TIJERA}`,`${TIJERA}-${PAPEL}`,`${PAPEL}-${PIEDRA}`]

const opciones = [PIEDRA,PAPEL,TIJERA]

let infoJugador = new Map([
    ["nombre", ""],
    ["ganadas", 0],
    ["perdidas", 0],
    ["empatadas", 0],
]);

function obtenerEleccionComputadora(){
    //Math.random()
    let i = Math.floor(Math.random()*3);
    return opciones[i];
}

function determinarGanador(jugador,computadora){
    if(jugador == computadora){
        infoJugador.set("empatadas",infoJugador.get("empatadas")+1)
        return "Es un empate";
    }else if(CONDICIONGANAR.find((elemento)=> elemento === `${jugador}-${computadora}`)){// CONDICIONGANAR.find() -> `${jugador}-${computadora}`
        infoJugador.set("ganadas",infoJugador.get("ganadas")+1)
        return "¡Ganaste!";
    }else{
        infoJugador.set("perdidas",infoJugador.get("perdidas")+1)
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
        console.log(`Eleccion ${infoJugador.get("nombre")}:  ${opciones[eleccionJugador]} , eleccion computadora: ${eleccionComputadora}`);
        console.log(resultado);

    }
}

/***** PARTIDA *****/
//Solicitar nombre jugador
infoJugador.set("nombre",prompt("¿Cómo te llamas?"))
do{
    jugar()    
}while(confirm("Desea continuar"));

// Informacion de la partida
console.log(`Adios ${infoJugador.get("nombre")}`);
console.log(`---> Partidas ganadas:  ${infoJugador.get("ganadas")}`);
console.log(`---> Partidas perdidas: ${infoJugador.get("perdidas")}`);
console.log(`---> Partidas empatadas: ${infoJugador.get("empatadas")}`);