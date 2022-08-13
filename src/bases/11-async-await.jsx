// const getImagenPromesa = () => {
//   return new Promise((resolve, reject) => {
//     resolve('resuelta')
//   })
// }

// getImagenPromesa()
//   .then(console.log)

const getImagen = async() => {

  try {
    const apiKey = `gCWq0Fr4EM1Gd4OY1Ln9OJ0yB4mtJpcA`
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const {data} = await resp.json()
  
    const {url} = data.images.original
    
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
  } catch (error) {
    //Majejo del error 
    console.error(error)
  }

}

getImagen()