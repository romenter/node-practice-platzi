//para acceder a las variables de entorno process.env.
let nombre = process.env.NOMBRE || 'Sin nombre';
//podemos asignar las variables antes de ejecutar nuestro node:
//NOMBRE=Romen node conceptos/entornos.js
//NOMBRE es la variable que vamos a asignar
// || es 'o', es uno u otro, en caso de que no tenga variable nombre, me devuelve esto.
let web = process.env.WEB || 'Sin nombre';
console.log('Hola '+ nombre)

console.log('Hola '+ nombre)
console.log('mi web es '+ web)
//Si queremos definir 2 variables de entorno, simplemente separamos, asi:
//NOMBRE=Romen WEB=romen.com node conceptos/entornos.jsnp