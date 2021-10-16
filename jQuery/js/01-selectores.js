

$(document).ready(function(){
  console.log("we are ready");

  //selectores id

  var rojo=  $("#rojo").css("background","red").css("color","white");
  $("#amarillo").css("background","yellow");
  $("#azul").css("background","blue");

  //selectores de clase

  $(".zebra").css("border", "5px dashed black");

  //selectores de etiquetas
  var parrafos = $("p").click(function(){
    $(this).removeClass("zebra");
  });


//selectores de atributos
$('[title="Google"]').css('background','blue').css('color','green');

//otros

$('p,a').addClass('margen_superior');

console.log("esto esta funcionando");

});
