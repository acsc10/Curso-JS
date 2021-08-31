'use strict'
//https://uniwebsidad.com/libros/javascript/capitulo-6/modelo-basico-de-eventos-2
window.addEventListener('load',()=>{

  var boton = document.querySelector("#boton");
  var input = document.querySelector("#campo_nombre");
  //var boton2 = document.querySelector("#boton2");
  function cambiarColor(){

    var bg = boton.style.background;
    if(bg=='blue'){
      boton.style.background ="red";
    }else{
    boton.style.background ="blue";
    }

  }

  /**function cambiarColor(){

    var bg = boton2.style.background;
    if(bg=='blue'){
      boton2.style.background ="red";
    }else{
    boton2.style.background ="blue";
    }

  }*/

  boton.addEventListener('click',function(){
    cambiarColor();
  })

  //mouse over

  /**boton.addEventListener('mouseover', function(){
    boton.style.background="#ccc";
  });*/

  //mouse count
  boton.addEventListener('mouseout', function(){
    boton.style.background = "#ccc";
  });


  //onfocus
  input.addEventListener('focus', function(){ //detecta cuando entamos dentro del input
    input.style.background = "#pink";
    console.log("dentro del input");
  });

  //onblur
  input.addEventListener('blur', function(){ //detecta cuando entamos dentro del input y te sales
    input.style.background = "#pink";
    console.log("fuera del input");
  });

  //keydown
  input.addEventListener('keydown', function(event){ //detecta si estamos pulsando una tecla
    input.style.background = "pink";
    console.log("pulsando tecla " + String.fromCharCode(event.keyCode));
  });

  input.addEventListener('keypress', function(event){ //detecta si estamos pulsando una tecla
    input.style.background = "pink";
    console.log("presionando la tecla " + String.fromCharCode(event.keyCode));
  });

});
