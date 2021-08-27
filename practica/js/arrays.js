'use strict'

//Arrays - Arreglos - matrices

var nombre ="andres";
var nombres=["andres","camilo", "sanchez", "campo", "wilnel", "edina", "diaz"];
var lenguajes = new Array("php","js","Go","java","php");
var elemento = 1000;
while(elemento >= nombres.length){
    alert("ingresa un numero menor que " + nombres.length);
  var elemento = parseInt(prompt("imgrese el elemento a buscar",0));
  document.write(nombres[elemento]);
}

document.write("<h1>lenguajes de promgramacion 2021</h1>");
document.write("<ul>");
for(var i = 0; i < lenguajes.length; i++){
  document.write("<li>"+lenguajes[i] + "</li>");

}
document.write("</ul>");

document.write("<ul>");
document.write("<h1>lenguajes de promgramacion 2021</h1>");

lenguajes.forEach((elemento,index,arr)=>{  //otra manera de recorrer el array los dos ultimos parametrs son opcionales
  document.write("<li>" +index +" - "+elemento+"</li>");
});
document.write("</ul>");
