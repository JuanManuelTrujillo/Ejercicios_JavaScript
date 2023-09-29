//Crea un script que ingresé las medidas de triángulo y me diga su clasificación
var ladoA =prompt("Ingrese la medida del lado A:");
var ladoB =prompt("Ingrese la medida del lado B:");
var ladoC =prompt("Ingrese la medida del lado C:");

if(ladoA === ladoB && ladoB == ladoC ){
    document.write("Triangulo Equilatero ya que tiene todos sus lados iguales");
}else if(ladoA === ladoB || ladoB === ladoC || ladoA == ladoC){
    document.write("Triangulo Isosceles");    
}else{
    document.write("Triangulo escaleno");
}
