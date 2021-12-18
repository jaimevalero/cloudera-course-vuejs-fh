
const person = {
    age: 30,
    name: 'Juan',
    codeName: 'Juanito'
}

const { name, age, codeName } = person

console.log(name, age, codeName)

// Desestructurando para sacar los atributos 
const createHero = (hero) => {
    const { name, age, codeName } = hero
    return {
        name,
        age,
        codeName
    }
}

// Desestructurando para sacar los atributos , desde la propia funcion
const createHero2 = ({ name, age, codeName }) => {
    
    return {
        name,
        age,
        codeName
    }
}

// mas sucintamente
const createHero3 = ({ name, age, codeName }) =>   ({ id: 34, name,  age,  codeName  }   )



console.log(createHero(person))

console.log(createHero2(person))

console.log(createHero3(person))
