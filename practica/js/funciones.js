'use strict'

function hola(){
  //document.write("hola");
  console.log("bienvenido");
//  alert("hola");
}

//console.log("hola mundo");
//hola();
hola();


//parametros

function listadoFrutas(fruta1, fruta2, ...restoDeFrutas){//recibe todos los parametros en un array
  console.log("fruta1: " +fruta1);
  console.log("fruta2: " +fruta2);
  console.log(restoDeFrutas);
}

listadoFrutas("manzana","peras", "uvas", "naranjas");
var frutas=["mamon","mango"];
listadoFrutas(frutas,"peras", "uvas", "naranjas");
listadoFrutas(...frutas,"peras", "uvas", "naranjas"); //spread
