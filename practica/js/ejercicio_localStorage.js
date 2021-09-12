'use strict'

var formulario = document.querySelector("#form_peliculas");
formulario.addEventListener("submit", function(){
  console.log("añadir pelicula");
  var titulo = document.querySelector("#add_pelicula").value;
  if (titulo.length > 0) {
      localStorage.setItem(titulo, titulo);
  }else{
    alert("ingresa un nombre valido");
  }



});

var ul = document.querySelector("#pelicula_list");
for (var indice in localStorage) {
  if (typeof localStorage[indice] =="string") {
    var li = document.createElement("li");
    li.append(localStorage[indice]);
    ul.append(li);
  }

}
