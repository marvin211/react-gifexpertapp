
//Recibo la categoria y se hace una peticion httpt a la API
const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=yZ6z1jSc9ekb38Mpse1d385MmYzXGasg`

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {//El return va a transformar cada uno de los elementos que estan dentro de arreglo y se retorna un nuevo objeto con la informacion que interesa

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;//Como es async no regresa los gifs regresa una promesa que resuelve la coleccion de imagenes
}


export default getGifs;