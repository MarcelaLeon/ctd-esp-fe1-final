const initialState = {
  busqueda: "",
  favoritos: [],
  personajeFavorito: null
}

const reducer = (state= initialState, action) => {

  switch(action.type){
    case 'BUSCAR_PERSONAJE':
      return {...state, busqueda:action.payload.name};
    case "SELECCIONAR_PERSONAJE":
        return {
            ...state,
            personajeFavorito: action.payload.personaje,
        }
    case "AGREGAR_PERSONAJE_FAVORITOS":
      return {
          ...state,
          favoritos: [action.payload.personaje, ...state.favoritos.filter(personaje => personaje.name !== action.payload.personaje.name)]
      }
      case "ELIMINAR_PERSONAJE_FAVORITOS":
        return {
            ...state,
            favoritos: [...state.favoritos.filter(personaje => personaje.name !== action.payload.personaje.name)]
        }
    default:
      return {...state};
  }
}

export default reducer;