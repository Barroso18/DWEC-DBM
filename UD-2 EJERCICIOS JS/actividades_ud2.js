//Ejercicio 1
/*
let nombre = prompt("Introduce tu nombre:");
let apellido = prompt("Introduce tu apellido:");

let valores = prompt("introduce 3 valores numericos, separados por comas");
let valoresArray = valores.split(",");
console.log(`Nombre completo ${nombre}`);
let suma = 0;

for(let i = 0; i<3;i++){
    suma += parseInt(valoresArray[i])
}
console.log(`La suma es: ${suma}`)
console.log(`La division es ${parseInt(valoresArray[0])/parseInt(valoresArray[2])}`)
*/
//Ejercicio 2
/*
let valores2 = prompt("Introduce 3 valores numericos enteros, separados por comas");
let valoresArray2 = valores2.split(",");
for(let i = 0; i<3;i++){
    if(valoresArray2[i]> 10){
        console.log(`El ${valoresArray2[i]} es mayor que 10`);
    }
}
*/

//Ejercicio 3
/*
let dia = prompt("Introduce el dia:");
let mes = prompt("Introduce mes(numero):");
dia = parseInt(dia);
mes = parseInt(mes);
if(dia ===14 && mes == 2){
    alert("ES SAN VALENTIN");
}else{
    alert(`EL ${dia} / ${mes} NO ES SAN VALENTIN`);
}
*/
//Ejercicio 4
/*for(){

}*/

//Parte de funciones
//Ejercicio 5
/*  Escribe un programa que lea un conjunto de calificaciones, separadas por “;”
        “4;7;10;8;6”
Transformándolas en calificaciones alfabética según la siguiente lista.
        • de 0 a <3     Muy deficiente
        • de 3 a <5     Insuficiente
        • de 5 a <6     Bien
        • de 6 a <9     Notable
        • de 9 a 10     Sobresaliente
*/ 
/*
let notas = prompt("Introduce las calificaciones separadas por ;");
let notasArray = notas.split(";");
evaluaNotas (notasArray);
function evaluaNotas (notasArray){
    for(let i=0; i<notasArray.length; i++){
        let nota = parseInt(notasArray[i]);
        nota = calificaciones(nota);
    }
    return notasArray;
}
function calificaciones (nota){    
    if (parseInt(nota) >=0 && parseInt(nota) <3){console.log(`${parseInt(nota)} Muy deficiente`);
    }else if (parseInt(nota) >= 3 && parseInt(nota)<5){console.log(`${parseInt(nota)} Insuficiente`);
    }else if (parseInt(nota) >= 5 && parseInt(nota)<6){ console.log(`${parseInt(nota)} Bien`);
    }else if (parseInt(nota) >= 6 && parseInt(nota)<9){ console.log(`${parseInt(nota)} Notable`);
    }else if (parseInt(nota) >= 9 && parseInt(nota) <= 10){ console.log(`${parseInt(nota)} Sobresaliente`);}
    
    return parseInt(nota);
}
*/

//Ejercicio 6


//Ejercicio 7
let numero = prompt("Introduce un valor entero:");
numero = parseInt(numero);
//IMPORTANTE LLAMAR A LA FUNCION !!!!
triangulo(numero);
function triangulo(numero){
    if(numero !== 0){
        for(let i = 0; i<numero; i++){
            let linea = "*";
            for(let j = 0; j<i; j++){
                linea += "*";
                
            }
            console.log(`${linea}\n`);
        }
    }else{
        console.log(`NO HAY TRIANGULO\n`);
    }
}

//Ejercicio 8


//Ejercicio 9


//Ejercicio 10