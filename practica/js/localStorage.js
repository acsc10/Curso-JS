'use strict'

//localStorage

//comprobar disponibilidad
if(typeof(Storage) != "undefined"){
  console.log("localStorage disponible");
}else{
  console.log("indisponible");
}

 //guardar datos en el localStorage
 localStorage.setItem("titulo", "curso udemy");

 //recuperar elemento del localStorage
console.log(localStorage.getItem("titulo"));
  document.write("<h1>" +localStorage.getItem("titulo") + "</h1>" );

  //guardar objeto

  var usuario = {
    "nombre":"andres",
    "apellidos":"sanchez",
    "edad": 23
  }
//debe ser convertido a un jsonString para poder guardar en el localStorage
localStorage.setItem("usuario", JSON.stringify(usuario));

//recuperar objeto


 var objeto = JSON.parse(localStorage.getItem("usuario"));
 console.log(objeto.nombre);

document.querySelector("#datos_usuario").append(objeto.nombre + " " + objeto.apellidos);

localStorage.removeItem("usuario");
localStorage.clear();
