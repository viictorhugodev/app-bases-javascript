const personajes = ['Goku','Vegeta','Trunks']
const [,,p3] = personajes

const retornaArreglo = () => {
  return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo()
console.log(letras, numeros)

//Tarea
const useStatee = (valor) => {
  return [ valor, () => {console.log('Hola Mundo')} ]
}

const [nombre, setNombre] = useStatee('Goku')
