//Explicacion 4.6 Array Functions

var array = ['a', 'bb', 'bc', 'd'];
array.forEach( function(e,i) {
    alert('Elemento.' + e +' en la posición' + i);
    });
array.every( e => e.length == 1 );  // false
array.some( e => e.length == 2 );   // true
var nuevoArr = array.map( e => e.length );  // [1 , 2 , 2 , 1]
var nuevoArr = array.filter( e => e[0] == 'b' );    // [bb’,’bc’]
let valor = array.find( e => e[0] == 'b'); //’bb’
    
let edades = [14,15,17,18,20,98,56,99];
edades.find((e)=> e===99);
edades.find((e)=> e===111);
edades.findIndex((e)=> e===99);
    
// Explicacion set
let ganadores = ['Márquez', 'Rossi', 'Márquez', 'Lorenzo', 'Rossi', 'Márquez', 'Márquez'];
let ganadoresNoDuplicados = new Set(ganadores);
// {'Márquez, 'Rossi', 'Lorenzo'}
// volvemos a convertirlo en un Array.
let ganadoresNoDuplicados2 = Array.from(new Set(ganadores)); // ['Márquez, 'Rossi','Lorenzo']

ganadoresNoDuplicados.has("Agustin");

    