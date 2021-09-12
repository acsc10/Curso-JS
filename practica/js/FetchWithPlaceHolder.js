'use strict'
  //Fetch y peticiones a servicios restfull
  var usuarios = [];
  var div_usuarios = document.querySelector("#usuarios")
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(data=>data.json())
  .then(data =>{
    usuarios = data;
    listadoUsuarios(data);

  });


function listadoUsuarios(){
  usuarios.map((data, i)=>{
    let nombre = document.createElement("h3");
    nombre.innerHTML = i +" =>" + data.name;
    div_usuarios.append(nombre);
  });
    document.querySelector("#loading").style.display='none';
}


  //ejemplo Fetch youtube

  /*    const datos = [
      {"id":1, "tittle":"Iron Man", "year":2008},
      {"id":2,"tittle":"spiderMan","year":2017},
      {"id":3, "tittle":"avengers", "year":2019}
    ];

    const getDatos = function(){
      return new Promise(function(resolve, reject){
        setTimeout(function(){
        resolve(datos);
        }, 3000);

      });
    }
    getDatos().then(function(datos){
      return console.log(datos);
    });*/
