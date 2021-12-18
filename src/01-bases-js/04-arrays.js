
console.log('Hola Mundo!!!!')

const arreglo = [1,2,3,4,5,6,7,8,9,10]

const arreglo2 = [...arreglo]
arreglo.push(11)

arreglo2.push(12)

const arreglo3 = arreglo2.map(item => item * 2)

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)