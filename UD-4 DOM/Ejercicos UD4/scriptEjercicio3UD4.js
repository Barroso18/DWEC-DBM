//  Ejercicio 3
let btnCrear = document.getElementById("idcrear");
btnCrear.addEventListener("click",insertarCheckbox);
function insertarCheckbox(){
    let cantidad = parseInt(document.getElementById("idNumero").value);
    console.log(cantidad)
    for(let j = 0;j<cantidad; j++){
        let k = Math.random();
        let input = document.createElement("input");
        let label = document.createElement("label");
        input.setAttribute("id",`id${k}`);
        input.setAttribute("type","checkbox");
        input.setAttribute("value",k);
        label.setAttribute("for",`id${k}`);
        label.innerHTML = k+ "<br/>";
        document.body.appendChild(input);
        document.body.appendChild(label);
    }
}