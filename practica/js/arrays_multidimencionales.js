'use strict'

var categorias = ["accion", "terror", "romance"];
var peliculas = ["spiderMan", "iromMan", "inocente"];
var cine = [categorias, peliculas];
//console.log(cine);
peliculas.push("superman");
//console.log(peliculas);
var nuevaPelicula = prompt("ingresa una pelicula");
peliculas.push(nuevaPelicula); //agregamos un elemento a un array
peliculas.pop(); //eliminamos el ultimo elemento de un array
//eliminar una posicion especifica de un arrays
var indice = peliculas.indexOf("iromMan");
if(indice > -1){
  peliculas.splice(indice , 1);
}else{
  alert("no encontrado");
}
console.log(peliculas);
//convertir un array a cadena
var peliculas_string = peliculas.join();
console.log(peliculas_string);
//convertir una cadena a un arrays
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");
console.log(cadena_array);
peliculas.sort();
console.log(peliculas); //ordenamos un array alfabeticamente
cadena_array.reverse();
console.log(cadena_array); //voltemamos el orden del array
document.write("<ul>");
//otra manera de recorrer el array
for (let lenguaje in cadena_array) {
  document.write("<li>"+ cadena_array[lenguaje]+ "</li>");
}
document.write("</ul>");
document.write(cadena_array);
var busqueda = peliculas.find(function(pelicula){
 return pelicula=="spiderMan";
});

var busqueda2 = peliculas.find(pelicula=>pelicula =="spiderMan");//buscamos en un array
var busqueda3 = peliculas.findIndex(pelicula=>pelicula=="inocente");
console.log(busqueda2);
console.log(busqueda3);


var precios = [30,40,23,44];
var busqueda = precios.some(precio=>precio>40);
console.log(busqueda);
