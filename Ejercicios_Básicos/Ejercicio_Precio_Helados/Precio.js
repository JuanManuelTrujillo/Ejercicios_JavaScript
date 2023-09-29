var sabor=prompt("Ingrese el sabor de helado:");
var precio
if (sabor === "Oreo"){
    precio = 1500-1500*0.5
document.write("Este tipo de helado tiene un descuento del 5%:"+precio)
}
else if(sabor =="Fresa"){
    precio = 2000
    document.write("Precio de:"+precio)
}
else if(sabor =="Vainilla"){
    precio = 3000
    document.write("Precio de:"+precio)
}
else if(sabor =="Brawnie"){
    precio = 5000-5000*0.10
    document.write("Este tipo de helado tiene un descuento del 10%:"+precio)
}
else{
    document.write("Lo sentimos no tenemos ese sabor")
}
