'use strict'


var numeros =[];

//conseguir elemento por su id
for (var i = 0; i <= 5; i++) {
  numeros[i] = parseInt(prompt("ingresa un numero", 0));
}
document.write("<h2>contenido del array</h2>");
numeros.forEach((numero, index) =>{
  document.write("<li>" + numero + "</li>");
})
console.log(numeros);

numeros.sort(function(a,b){ //ordenamos un array
  return a-b;
});
console.log(numeros);

//conseguir elemento por sus etiquetas
