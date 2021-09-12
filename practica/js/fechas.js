'use strict'

var fecha = new Date();
console.log(fecha);
var year = fecha.getFullYear();
var mes = fecha.getMonth() + 1;
var dia = fecha.getDate();
var hora = fecha.getHours();
var minuto = fecha.getMinutes();
var segundos = fecha.getSeconds();
console.log(year);

var textHora= `
el año es: ${year},
el mes es: ${mes},
el dia es ${dia}
la hora es: ${hora},
el minuto es: ${minuto},
los segundos  son ${segundos}
`;

console.log (textHora);
