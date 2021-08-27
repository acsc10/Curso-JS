'use strict'

//document objet model

var elemento = document.getElementById("caja");
console.log(elemento);
elemento.innerHTML= "TEXTO DESDE JS";
elemento.style.color="blue";
elemento.style.background = "black";
elemento.style.padding = "12px";

var misDiv = document.getElementsByTagName("div");

var contenido = misDiv[2].textContent;
console.log(misDiv);
console.log(contenido);
var seccion = document.querySelector("#miSeccion");

for (var valor in misDiv) {
    if (typeof misDiv[valor].textContent =="string" ){
      var parrafo = document.createElement("p");
      var texto = document.createTextNode("creado desde js" + misDiv[valor].textContent);
      parrafo.append(texto);  //El método append agrega los caracteres al final de builder mientras que insert los agrega en un punto específico.
      seccion.append(parrafo);
    }

}
console.log("-------------------------------");
var misDivRojos = document.getElementsByClassName("rojo");
var misDivAmarillos = document.getElementsByClassName("amarillo");
console.log(misDivRojos);
for (var div in misDivRojos) {
  if(misDivRojos[div].className=="rojo"){
console.log("entra al si");
    misDivRojos[div].style.background ="red";
  }

}


//querySelector

var id = document.querySelector('#encabezado');
console.log(id);

Document.querySelectorAll()
//El método querySelectorAll() de un Element devuelve una NodeList estática (no viva) que representa una lista de elementos
//del documento que coinciden con el grupo de selectores indicados.
