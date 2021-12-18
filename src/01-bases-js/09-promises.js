
import info from './bases/08-imp-exp';

const { heroes, owners,getHeroById,getHeroByOwner  } = info
 
console.log("inicio");


const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);
            if (hero) {
                resolve(hero); 
            }
            else {
                reject(new Error('No hero found. No existe'));
            }

        }, 1000);
    })
}

getHeroByIdAsync(2)
    .then(h => { 
        console.log(`El hero es ${h.name}`)  
    })
    .catch(console.log)
console.log("fin");
 

//inicio
//index.js:9 Cuerpo de la promesa
//index.js:13 fin
//index.js:11 Promesa resuelta