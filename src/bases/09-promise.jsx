import { getHeroeById } from './bases/08-functions';

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById(2)
    // console.log(heroe)
    resolve()
  }, 3000);
})

promesa
  .then(() => {
    console.log('Then de la promesa')   
  })
  .catch(error => console.log(error) )