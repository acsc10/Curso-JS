'use strict'

window.addEventListener('load', ()=>{
  //timers
  function intervalo(){
    var tiempo = setInterval(function(){
      console.log("setInterval ejecutado");
     var encabezado = document.querySelector("h1");
     console.log(encabezado.style.fontSize);
     if(encabezado.style.fontSize=="18px"){
        encabezado.style.fontSize="50px";
     }else{
       encabezado.style.fontSize="18px";
     }


    }, 1000);
    return tiempo;
  }


var tiempo = intervalo();


   var stop = document.querySelector("#stop");
   var start = document.querySelector("#iniciar");
   stop.addEventListener('click', function(){
     clearInterval(tiempo);
   });

   start.addEventListener('click', function(){
     intervalo();
   });

});
