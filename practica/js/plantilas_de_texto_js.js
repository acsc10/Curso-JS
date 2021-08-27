'use strict'

var nombre = prompt("ingresa tu nombre");
var apellido = prompt("ingresa tu apellido");

//var texto = "mi nombre es "+ nombre + " y mi apellido es " + apellido;
var texto = `<h1>hola quetal</h1>
             <h3> mi nombre es ${nombre}</h3>
             <h3> mi apellido es ${apellido}</h3>
             `;

 document.write(texto);
