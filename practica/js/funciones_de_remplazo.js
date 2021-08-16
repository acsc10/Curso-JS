'use strict'

var numero=44;
var texto1 = " esto es un curso de JavaScript comprado en udemy";
var texto2 = "es un muy buen curso";

var cadena = texto1.replace("JavaScript", "Php"); //remplazamos

console.log(cadena);
cadena = texto1.slice(14, 23); //corta la cadena desde la posision indicada hasta la indecada
console.log(cadena);
cadena = texto1.split(" "); //separamos una cadena por espacios
console.log(cadena);
cadena = texto1.trim();
console.log(cadena);
