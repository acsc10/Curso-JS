'use strict'
window.addEventListener('load',function(){
  console.log("dom cargado");



    var formulario=  document.querySelector('#formulario');
    var dashed = document.querySelector('.dashed');
    dashed.style.display="none";


    formulario.addEventListener('submit', function(){
       console.log("evento submit capturado");

        var nombre  = document.querySelector('#nombre').value;
        var apellidos  = document.querySelector('#apellidos').value;
        var edad  = parseInt(document.querySelector('#edad').value);

        if(nombre.trim()== null || nombre.trim().length == 0){
          alert("el nombre no es valido");
          var nombre  = document.querySelector('#nombre');
            nombre.style.background="pink";
          return false;
        }else{
          var nombre  = document.querySelector('#nombre');
            nombre.style.background="white";
        }


        if(apellidos.trim()== null || apellidos.trim().length == 0){
          alert("el apellido no es valido");
          var nombre  = document.querySelector('#apellidos');
            nombre.style.background="pink";
          return false;
        }else{
          var apellidos  = document.querySelector('#apellidos');
            apellidos.style.background="white";
        }

        if (edad==null || edad <=0 || isNaN(edad)){
          //edad.style.background = "pink";
          var edad  = document.querySelector('#edad');
          alert("ingresa una edad valida");
          edad.style.background="pink";
          return;
        }else{
          var edad  = document.querySelector('#edad');
            edad.style.background="white";
        }

        var nombre  = document.querySelector('#nombre').value;
        var apellidos  = document.querySelector('#apellidos').value;
        var edad  = parseInt(document.querySelector('#edad').value);
        dashed.style.display="block";
        console.log(apellidos);
        var p_nombre  = document.querySelector('#p_nombre span');
        var p_apellidos  = document.querySelector('#p_apellidos span');
        var p_edad  = document.querySelector('#p_edad span');
        console.log(p_apellidos);
        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;


        /*
        var datos_usuario = [nombre, apellidos, edad];

       for (var indice in datos_usuario) {
         var parrafo = document.createElement('p');
         parrafo.append(datos_usuario[indice]);

             dashed.append(parrafo);
       }*/








    });


});
