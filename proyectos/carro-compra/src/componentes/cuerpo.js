import { useState } from "react";

/*function Cuerpo(){
    return(
        <div>Hola David Barroso</div>
    );
}*/
const imageUrls = [
    {url:"./imagenes/bici.jpg",nombre: "Bici",precio:4000},
    {url:"./imagenes/casco.jpg",nombre: "Casco",precio:20},
    {url:"./imagenes/guantes.jpg",nombre: "Guantes",precio:25},
    {url:"./imagenes/culotte.jpg",nombre: "Culotte",precio:66},
    {url:"./imagenes/zapatillas.jpg",nombre: "Zapatillas",precio:40}
];
const Cuerpo =(total,setTotal, productos,setProductos)=>{
    const [total,setTotal] = useState(0);
    const AnadirProducto = (nombre,precio)=>{
        setTotal(total+precio); //Actualiza el total
        setProductos([...productos,nombre]);
    }
    let estilos = "rojo"
    return(
        <div className="container">
            {imageUrls.map((item,index)=>(
                <div key={index}>
                    <img src={item.url} alt="imagen"/>
                    <h3>{item.nombre}</h3>
                    <p>Precio: {item.precio} Euros</p>
                    <button onclick={()=>AnadirProducto(item.nombre,item.precio)}>
                        Añadir al carrito
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Cuerpo;