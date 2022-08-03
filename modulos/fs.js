const fs = require("fs");

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    //Archivo leido
    cb(data.toString());
  });
}

leer(__dirname + "/archivo.txt", console.log);

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, (err) => {
    if (err) {
      console.error("No se ha escrito", err);
    } else {
      console.log("Escrito correctamente");
    }
  });
}

function deleteFile(route, cb) {
    fs.unlink(route, cb)
}

deleteFile(__dirname + '/archivo1.txt', console.log)
