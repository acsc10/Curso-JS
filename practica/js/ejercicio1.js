'use strict'
//programa que pida dos numero y diga cual es el mayor el menor o si son iguales;

alert("bienvenido a mi programa");
var numero1= 0;
var numero2= 0;
   while(numero1 <=0 || isNaN(numero1)){
     numero1 = Number(prompt("ingresa el primer numero",1));
   }
    while(numero2 <=0 || isNaN(numero2)){
      numero2 = Number(prompt("ingresa el segundo numero",1));
    }



  if(numero1 > numero2){
    document.write("El numero 1 =>"+ numero1 + " es mayor que el numero 2=>" + numero2);
  }else{
    if(numero1 < numero2){
        document.write("el numero 1 =>"+ numero1 + " es menor que el numero 2 =>" + numero2 );
    }else{
      document.write("son iguales");
    }

  }
