
/*function Cuerpo(){
    return(
        <div>Hola David Barroso</div>
    );
}*/
const Cuerpo =()=>{
    const imageUrls = {};
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