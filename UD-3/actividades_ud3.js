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
