function suma(a,b){
    //console.log(arguments);
    let total = a+b;
    return total;
}
let sumaAnonima = function (a,b){
    //console.log(arguments);
    let total = a+b;
    return total;
}

let sumaFlecha = (a,b) => {return a+b;}

let sumaFlecha2 = (a,b) => {//Función flecha en la cual hay varias lineas de código
    let total = a+b;
    return total;
}