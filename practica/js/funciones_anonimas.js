'use strict'

//funciones anonimas: es una funcion que no tiene nombre

var pelicula = function(nombre){
  return "la pelicula es" + nombre;
}

function sumame(numero1, numero2 , sumaYmuestra, sumaDoble){
  var sumar = numero1 + numero2;
  sumaYmuestra(sumar);
  sumaDoble(sumar);
}

sumame(5,5,function(dato){
  console.log("la suma es " + dato);
},
function(dato){
  console.log("la suma por dos es: "+ dato*2)
});
