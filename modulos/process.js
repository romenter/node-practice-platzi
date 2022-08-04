//const process = require('process');

process.on("beforeExit", () => {
  console.log("El proceso a acabado");
});

process.on("exit", () => {
  console.log("El proceso acabo");
  setTimeout(() => {
    console.log("Esto no se vera");
  }, 0);
});

process.on("uncaughtException", (err, origen) => {
  console.error("Se pitio un error");
  console.error(err);;
});

//functionInexistente();

console.log("No sale si no se arregla error");

//process.on('uncaughtRejection')

setTimeout(() => {
    console.log("Esto si se vera");
  }, 0)