function otraFuncion() {
  seRompe();
}

function seRompe() {
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (err) {
      console.error("Error en funcion asincrona");
      cb(err);
    }
  });
}

try {
  //otraFuncion();
  seRompeAsincrona((err) => {
    console.log(err.message);
  });
} catch (err) {
  console.error("Vaya algo se rompio");
  console.error(err.message);
}

console.log("Esto esta al final");
