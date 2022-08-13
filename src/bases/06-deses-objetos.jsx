//Desestructuración
const persona = {
    nombre: 'Victor',
    edad: 32,
    profesion: 'Dev'
}

// const {nombre, edad, profesion} = persona

// console.log(nombre)
// console.log(edad)
// console.log(profesion)

const useContextt = ({nombre, edad, profesion, rango = 'SSR'}) => {
    // console.log(nombre, edad, rango)

    return {
        nombreProfesion: profesion,
        anios: edad,
        latlng: {
            lat: 23455,
            lng: 2343546
        }
    }
}

const {nombreProfesion, anios, latlng: {lat, lng}} = useContextt(persona)
console.log(nombreProfesion, anios)
console.log(lat)
console.log(lng)