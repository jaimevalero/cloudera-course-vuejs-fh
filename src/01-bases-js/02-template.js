







const nombre = 'Juan'
const apellido = 'Perez'

let nombreCompleto = nombre + ' ' + apellido

nombreCompleto = `${nombre} ${apellido}`
console.log(nombreCompleto)

function getSaludo(nombre) {
    return 'Hola ' + nombre
}

console.log(`Este es un saludo ${getSaludo(nombre)}`)

console.log(getSaludo(nombre))