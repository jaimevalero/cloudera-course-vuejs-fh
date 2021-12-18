

import info from './bases/08-imp-exp';

const { heroes, owners,getHeroById,getHeroByOwner  } = info


console.log(getHeroById(2)) 
// {id: 2, name: 'Spiderman', owner: 'Marvel'}
 

console.log(getHeroByOwner('DC'))
// (3) [{…}, {…}, {…}]

