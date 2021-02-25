//ejercicio dia de la semana 

let dia=prompt("Ingrese un dia de la semana");
dia= dia.toLowerCase();
if (dia =="lunes" || dia=="martes"|| dia=="miercoles"|| dia=="miércoles" || dia=="jueves"|| dia=="viernes") {
    alert("Es un dia entre semana");
}
else{
    if (dia=="sabado"|| dia=="sábado"|| dia=="domingo") {
        alert("Es un fin de semana");
    }else{
        alert("la informacion no es valida");
    }
   
}