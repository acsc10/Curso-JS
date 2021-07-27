'use strict'
//operadores

var numero1 = 10;
var numero2 = 5;

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var producto = numero1 * numero2;
var division = numero1 / numero2;
document.write(suma + "<br>");

document.write(resta+ "<br>");
document.write(producto + "<br>");
document.write(division+ "<br>");


var numero3 = "20";

suma = Number(numero3) + 10; //convertimos una cadena en un numero
document.write(suma+ "\n");

var cadena = String(suma) + 7; //convertimos un entero a una cadena
 document.write(cadena);

 //saber el tipo de dato de una variables

  document.write(typeof resta + "\n");
  document.write(typeof cadena);
