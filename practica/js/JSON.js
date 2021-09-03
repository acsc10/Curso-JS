'use strict'

var pelicula = {
  nombre: "batman",
  año: 2021,
  pais: "usa"
}

console.log(pelicula.nombre);


var peliculas = [
  {nombre: "superman", año:2022, pais:"colombia"},
  pelicula
];

console.log(peliculas);
var caja=document.querySelector("#peliculas");
for (var index in peliculas) {
  var p= document.createElement('p');
  console.log(p);
  p.append(peliculas[index].nombre);
  caja.append(p);
}
