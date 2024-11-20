let fecha = new Date();
const MESES = [ "Enero", "Febrero","Marzo","Abril","Mayo","Junio","Julio",
    "Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let mesActual = MESES[fecha.getMonth()]; 
alert(`Hoy es día ${fecha.getDate()} de ${mesActual} de ${fecha.getFullYear()} y en estos momentos son las ${fecha.getHours()}:${fecha.getMinutes()}`);