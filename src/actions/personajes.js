export const searchPersonaje = (personaje) =>{
    return{
        type: "BUSCAR_PERSONAJE",
        payload:{name:personaje}
    }
}

export const seleccionarPersonaje = (personaje) => {
    return {
        type: "SELECCIONAR_PERSONAJE",
        payload: {personaje: personaje}
    }
}

export const addPersonajeFavoritos = (personaje)=> {
    return {
        type: "AGREGAR_PERSONAJE_FAVORITOS",
        payload: {personaje: personaje}
    }
}

export const deletePersonajeFavoritos = (personaje)=> {
    return {
        type: "ELIMINAR_PERSONAJE_FAVORITOS",
        payload: {personaje: personaje}
    }
}