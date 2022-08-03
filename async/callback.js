function hola(nombre, miCallback){
    console.log('Hola, yo asincrono')
    setTimeout(function(){
        console.log('Hola '+nombre)
        miCallback()
    }, 1000)
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios', nombre);
        otroCallback()
    }, 1000)
}

hola('Romen', function (){
    adios('Romen', function(){
        console.log('Terminando proceso...')
    })
});