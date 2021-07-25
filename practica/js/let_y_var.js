/*let te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando.
a diferencia de la palabra clave var la cual define una variable global o local en una función sin importar el ámbito del bloque.*/

var numero = 40;
console.log(numero);

if(true){
  var numero = 50;
  console.log(numero);
}

console.log(numero);

console.log("---------------*****-----------------");

var saludo = "hola";
console.log(saludo);

if(true){
  let saludo = "hello";
  console.log(saludo);
}

console.log(saludo);
