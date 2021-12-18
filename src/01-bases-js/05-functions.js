
console.log('Hola Mundo!!!!')



const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    }
]



const existe1 = heroes.filter(hero => hero.name == 'Batman'); // Devuelve un array

const existe2 = heroes.find(hero => hero.name == 'Batman'); // Devuelve un elemento

const existe3 = heroes.some(hero => hero.name === 'Batman'); // Devuelve boolean si al menos un elemento tiene el nombre Batman

// El equivalente en python es
// existe_en_python = any([x == 3 for x in [1,2,3]])
// o tambien
//
// import pandas as pd
// df = pd.DataFrame(heroes)
// exists = not df.query('name == "Batman"').empty


console.log(existe1)
console.log(existe2)
console.log(existe3)
