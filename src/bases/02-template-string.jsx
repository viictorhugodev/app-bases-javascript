const nombre = 'Victor';
const apellido = 'Aguilar'

// const nombreCompledo = nomnbre + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un text: ${getSaludo(nombre)}`)