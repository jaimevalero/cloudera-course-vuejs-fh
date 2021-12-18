

import info from '../data/heroes';

const { heroes, owners }  = info;


const getHeroById = (id) => {
    return heroes.find(hero => hero.id === id);
}

// Igual, pero mas sucinto
const getHeroById2 = (id) => heroes.find(hero => hero.id == id ); // Devuelve un array


const getHeroByOwner = (owner) => {
    return heroes.filter(hero => hero.owner === owner);
}

// Igual, pero mas sucinto
const getHeroByOwner2 = (owner) => heroes.filter(hero => hero.owner == owner ); // Devuelve un array



//console.log(getHeroById(2)) 
// {id: 2, name: 'Spiderman', owner: 'Marvel'}
//console.log(getHeroById2(2)) 
// {id: 2, name: 'Spiderman', owner: 'Marvel'}

//console.log(getHeroByOwner('DC'))
// (3) [{…}, {…}, {…}]
//console.log(getHeroByOwner2('DC'))
// (3) [{…}, {…}, {…}]

export default { heroes, owners,getHeroById,getHeroByOwner  }
