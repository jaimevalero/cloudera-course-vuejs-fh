const miPromesa = () => {
    return new Promise((resolve,reject)  => {
        setTimeout(() => {
            // resolve('Hola Tenemos un valor en la promesa');
            reject(new Error('Error en la promesa'))
        }, 1000);
    });
}

const medirTiempoAsync = async () => {
    try {
        console.log("Inicio")

        const respuesta  = await miPromesa()
        console.log(respuesta)
    
        console.log("Fin")
        return "Fin de medir tiempos async"
    } catch (error) {
        return "catch"
        throw(new   Error('Error en medir tiempos async'))
    }


    
}

medirTiempoAsync()
    .then(console.log)
    .catch(error => console.log(`Error atrapado: ${error}`));