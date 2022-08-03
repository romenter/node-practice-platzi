// const { exec } = require("child_process");

// exec('node modulos/consola.js', (err, stdout, sterr) =>{
//     if (err) {
//         console.error(err.message);
//         return false;
//     }
//     console.log(stdout)
// })

const { exec, spawn } = require("child_process");

let proceso = spawn("ls", ["-la"]);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", (dato) => {
    console.log('¿Esta muerto?')
    console.log(process.killed)
  console.log(dato.toString());
});

proceso.on("exit", function () {
  console.log("Process finish");
});
