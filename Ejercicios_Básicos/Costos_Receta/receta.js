function receta(){
    unidad= prompt("Ingresa la cantidad de Hamburguesas de Patacón:");
var unidad, carne, huevos, miga_de_pan, sal, ajo, soya, platano ;

carne= unidad*55.5;
huevos= unidad*0.223;
miga_de_pan = unidad*62.5;  
sal =unidad*0.08;
ajo= unidad*0.432;
soya= unidad*1;
platano=unidad*1;
document.write("se necesita para una Hamburguesa lo siguente:<br>" + carne +" gramos de Carne<br>" + huevos +" Huevos<br>"+ miga_de_pan+" gramos de Miga de Pan <br>"
+sal +" gramos de Sal <br> "+ ajo+ " cabezas de Ajo <br>" + soya+ " oz de Soya <br>" + platano+ " unidad de Platano verde");

}

function costos(){
    unidad = Number(prompt("1 Hamburguesa"));
var unidad, carne, huevos, miga_de_pan, sal, ajo, soya, platano ;
carne= unidad*0.2666;
huevos= unidad*0.700;
miga_de_pan = unidad*0.06;  
sal =unidad*0.44;
ajo= unidad*0.70;
soya= unidad*0.12;
platano= unidad*0.900;
total= carne+huevos+miga_de_pan +sal+ajo+soya+platano;
document.write("los costos para preparar 1 Hamburguesa son de: "+ total);
}