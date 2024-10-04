let contadora = 0;
/*let alerta = function(){
    alert("Hola, han pasado 7 segundos");
}*/
let alerta = function(){
    console.log(`Hola, ${contadora}`);
    contadora++
}

//let idA = setTimeout(alerta,7000);
//let idA = setInterval(alerta,2000);
//console.log(`El identificacior del setInterval es ${idA}`);
//Con el clearInterval(idA) finaliza el intervalo




let alerta2 = function(){
    //let ventana = window.open("https://github.com/");
    //let ventana = window.open();
    let ventana = window.open("","_blank","toolbar=1,scrollbars=1,resizable=1,width=40,heigth=100");
    ventana.document.write("HOLA TE ESTOY OBSERVANDO");
}

let idB= setTimeout(alerta2,7000);
console.log(`El identificacior del setInterval es ${idB}`);
