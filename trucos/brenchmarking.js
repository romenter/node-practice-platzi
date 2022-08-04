console.time('programa')
let suma = 0;
console.time('bucle')
for (let i = 0; i < 100000; i++) {
  suma += 1;
}
console.timeEnd('bucle')
console.time('bucle2')
for (let i = 0; i < 100000000; i++) {
  suma += 1;
}
console.timeEnd('bucle2')

console.time('asincrona')
function asinc () {
    return new Promise ((resolve) => {
        console.log('Termina el proceso')
        resolve()
    })
}
console.timeEnd('asincrona')

console.timeEnd('programa')