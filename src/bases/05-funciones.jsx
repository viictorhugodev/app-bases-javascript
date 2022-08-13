//Funciones JS
const saludar = function (nombre) {
    return `Hola ${nombre}`
}

//Funciones Flecha
const saludar2 = nombre => `Hola ${nombre}`
const saludar3 = () => `Hola Mundo`

// console.log(saludar('Victor'))

console.log(saludar2('Vegeta'))
console.log(saludar3())

const getUser = () => ({
    uid: '123',
    username: 'Victor124'
})

const user = getUser()

console.log(user)

function getUsuarioActivo(nombre) {
    return {
        uid: '123456',
        username: nombre
    }
}

const getUsuarioActivo1 =  nombre => ({
    uid: '246',
    username: nombre
})

const usuarioActivo = getUsuarioActivo1('VictorHugo')
console.log(usuarioActivo)