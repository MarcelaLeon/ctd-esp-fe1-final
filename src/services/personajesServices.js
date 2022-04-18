export const getPersonajes = async ( pagina ) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`);
    const data = await response.json();
    return data;
}


export const searchPersonaje = async (personaje)=>{

    let params = "?"
    if (personaje){
        params += `name=${personaje}`
    }
    const response = await fetch(`https://rickandmortyapi.com/api/character/${params}`)
    const data = await response.json()
    return data.results;
}




