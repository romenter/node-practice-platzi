function asincrona(callback){
    setTimeout(()=>{
        try{
            let a = 3 + z;
            callback(null, a)
        } catch(e){
            callback(e)
        }
    },1000)
}

try{
    asincrona((err, dato)=>{
        if (err){
            // console.error('Tenemos un error');
            // console.error(err);
            throw err
            // return false
        }
        console.log('Todo bien', dato)
    })
}catch (e){
    console.error('Hemos capturado un error')
}

