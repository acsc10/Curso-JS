'use strict'

// condicionales

 var edad = 18;

 if (edad > 18) {
   document.write("es mayor de edad");
 }else{
   document.write("aun no pasa la mayoria de edad");
 }
document.write("----------------------------------");
 var imprime = "";
 switch (edad) {
   case 18: imprime="mayor de edad" ;
   break;
   case 18:imprime = "eres menor de edad";
   break;
   default: imprime="no registra"

 }
 document.write(imprime);
