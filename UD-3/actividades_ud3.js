//Ejericio 1 
/*let alerta2 = function(){
    //let ventana = window.open("https://github.com/");
    //let ventana = window.open();
    let ventana = window.open("","_blank","toolbar=1,scrollbars=1,resizable=1,width=40,heigth=100");
    ventana.document.write("HOLA TE ESTOY OBSERVANDO");
}

let idB= setTimeout(alerta2,7000);
console.log(`El identificacior del setInterval es ${idB}`);*/


//Ejericio 2
/*
let contadora = 60;
let tiempo = function(){
    if(contadora === 60){
        console.log("01:00");
        contadora--;
    }
    if(contadora === 0){
        console.log("Tu tiempo ha terminado");
        clearInterval(idA);
    }else if(contadora< 10 && contadora>0){
        console.log(`00:0${contadora}`);
        contadora--;
    }
    else{
        console.log(`00:${contadora}`);
        contadora--;
    }
    
}
let idA = setInterval(alerta,2000);
*/

//Ejercicio 3
/*
let t = new Date();
document.title = t;
setInterval(()=>{document.title= new Date()},1000);
*/

//Ejercicio 4
/*
let alerta2 = function(){
    let t = new Date();
    let ventana = window.open("","_blank","toolbar=1,scrollbars=1,resizable=1,width=100,heigth=100");
        ventana.document.write(t);
}
let idB= setTimeout(alerta2,7000);
*/

//Explicacion del foreach
/*let edades = [14,15,17,18,20,98,56];
for(let i=0;i<edades.length;i++){
    console.log(edades[i]);
}
//el mismo codigo del for se puede reducir al foreach siguiente
edades.forEach(function(elemento){console.log(elemento)})
// o mas resumido
edades.forEach((e)=>console.log(e))
*/
//Ejercicio 5
//  pepe,jesus,sara
/*
let socios = prompt("Introduce los nombres de los socios separados por , ");
let nombresSocios = socios.split(",");
console.log(nombresSocios.slice());
//nombresSocios.forEach((e)=>console.log(e));
//Longitud del array
console.log(nombresSocios.length);
*/
//Mostrar el nombre de los socios ordenados por orden alfabético
/*let alfabetico = nombresSocios;
alfabetico.sort();
console.log(alfabetico);*/

//Mostrar el nombre de los socios en orden inverso al introducido
/*
let inverso = nombresSocios;
inverso.reverse();
console.log(inverso);
//Aqui hace el inverso al sort y no se porque
*/

//Ejercicio 6
//  David,10
//  Pepe,8
//  Sara,9
//  Lucas,5
//  Ivan,6
/*
let alumnosMap;
let arrayMap = new Array();
for(let i = 0; i<5;i++){
    let alumnos = prompt("Introduce los nombres y notas de los alumnos separados por , ");
    let alumnosSep = alumnos.split(',');
    alumnosMap = new Map([['nombre',alumnosSep[0]],['nota',alumnosSep[1]]]);
    arrayMap.push(alumnosMap);
}
//Mostrar cada alumno con su nota
arrayMap.forEach(element => {
    console.log(element.get('nombre')+": "+element.get('nota'));
});
//Mostrar la media de los alumnos
let media = 0;
arrayMap.forEach(element => {
    media +=parseInt(element.get('nota'));
});
media = media/arrayMap.length;
console.log(`La media es ${media}`);
*/

//Ejercicio 7

let nombres = new Array();
let edades = new Array();
for(let i = 0; i<6;i++){
    let persona = prompt("Introduce el nombre y la edad separado por ,");
    let personaSep = persona.split(',');
    nombres[i] = personaSep[0];
    edades[i] = personaSep[1];
}
function borrarPorIndice(){}

