'use strict'
//browser objet model

console.log(window.innerHeight);
console.log(window.innerWidth); //La Windowpropiedad de solo lectura innerWidthdevuelve el ancho interior de la ventana en píxeles. Esto incluye el ancho de la barra de desplazamiento vertical, si está presente.
console.log(screen.height);
console.log(screen.width);//Obtenga el ancho total de su pantalla:

console.log(window.location.href);

function redirect(url){
  window.location.href= url;

}

function abrirVentana(url){
  window.open(url, "", "width=400", "height=400"); //abrimos una nueva ventana
}
