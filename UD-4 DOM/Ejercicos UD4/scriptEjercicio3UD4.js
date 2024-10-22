//  Ejercicio 3
let btnCrear = document.getElementById("idcrear");
btnCrear.addEventListener("click",insertarCheckbox);
/*let divBorrar = document.getElementById("idDiv");
divBorrar.addEventListener("click",function(){
    this.remove();
});*/
function insertarCheckbox(){
    /*let checkboxAntiguos = document.getElementsByTagName("input");
    if(checkboxAntiguos.length != 0){
        checkboxAntiguos.
    }*/
        //divBorrar.remove();
    let cantidad = parseInt(document.getElementById("idNumero").value);
    console.log(cantidad)
    let div = document.createElement("div");
    div.setAttribute("id","idDiv");
    for(let j = 0;j<cantidad; j++){
        let k = Math.random();
        let input = document.createElement("input");
        let label = document.createElement("label");
        input.setAttribute("id",`id${k}`);
        input.setAttribute("type","checkbox");
        input.setAttribute("value",k);
        label.setAttribute("for",`id${k}`);
        label.innerHTML = k+ "<br/>";
        div.appendChild(input);
        div.appendChild(label);
        document.body.appendChild(div);
    }
    /*div.addEventListener("click",function(){
        this.nextElementSibling.remove();
    });*/
}