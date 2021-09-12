'use strict'
  //Fetch y peticiones a servicios restfull

  var div_usuarios = document.querySelector("#usuarios");
  var div_usuario = document.querySelector("#usuario");

  getUsuarios()
  .then(data =>data.json())
  .then(users =>{
    listadoUsuarios(users.data);

    return getUsuario();
  })
  .then(data => data.json())
  .then(user => {
   listarUsuario(user.data);

   return getInfo();
 }).
 then(data => {
   console.log(data);
 });
function getUsuarios(){
  return fetch('https://reqres.in/api/users');
}

function getUsuario(){
  return fetch('https://reqres.in/api/users/2');
}

function getInfo(){

  var profesor = {
    nombre: "andres",
    apellido: "sanchez",
    edad: 23
  };
  return new Promise((resolve, reject) =>{
    var profesor_string ="";
    setTimeout(function(){
       profesor_string = JSON.stringify(profesor);
       if(typeof profesor_string !="string" || profesor_string !="" ){
          return resolve(profesor_string);
       }else{
         return reject("error");
       }



    },3000);



  } )



}

  function listadoUsuarios(usuarios){
    usuarios.map((user, i)=>{
      let nombre = document.createElement("h3");
      nombre.innerHTML = i +". " + user.first_name;
      div_usuarios.appendChild(nombre);
    });
      document.querySelector("#loading").style.display='none';
  }


  function listarUsuario(user){

      let nombre = document.createElement("h4");
      let avatar = document.createElement("img");

      nombre.innerHTML =  user.first_name;
      avatar.src = user.avatar;
      avatar.width ="100";
      div_usuario.appendChild(nombre);
      div_usuario.appendChild(avatar);
      document.querySelector("#usuario_loading").style.display='none';
  }
