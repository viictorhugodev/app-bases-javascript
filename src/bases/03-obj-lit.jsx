const persona = {
    nombre: 'Victor',
    apellido: 'Aguilar',
    edad: 32,
    direccion: {
        ciudad: 'Morelia',
        zip: 58146,
        calle: 'Jose Maria Rojo',
        colonia: 'Justo Mendoza'
    }
};


const persona2 = {...persona};
persona2.nombre = 'Hugo';

console.log(persona);
console.log(persona2);