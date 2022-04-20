import { useState } from 'react';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import {useDispatch} from "react-redux";
import { seleccionarPersonaje , addPersonajeFavoritos, deletePersonajeFavoritos} from '../../actions/personajes';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = ({personaje}) => {
  
    const  personajesFavoritos = useSelector(state => state.personaje.favoritos);
   
    function checkPersonaje(per) {
        return per.id === personaje.id;
    }
  
    const [favorito, setFavorito] = useState(personajesFavoritos.some(checkPersonaje));
    const dispatch = useDispatch();

    const onFavoritoPersonaje = (personaje) => {
        dispatch(addPersonajeFavoritos(personaje));
    }

    const onEliminarPersonaje = (personaje) =>{
        dispatch(deletePersonajeFavoritos(personaje))
    }

    const onSeleccionarPersonaje = (personaje) => {
        dispatch(seleccionarPersonaje(personaje));
        
    }

    return <div className="tarjeta-personaje">

        <Link to="/detalle">
            <img src={personaje?.image} alt={personaje?.name} onClick={()=>onSeleccionarPersonaje(personaje)}/>
        </Link>
        
        <div className="tarjeta-personaje-body">
            <span>{personaje?.name}</span>
            <BotonFavorito esFavorito={favorito} onClick={setFavorito} personaje={personaje} onSeleccionarPersonaje={onFavoritoPersonaje} onEliminarPersonaje={onEliminarPersonaje}/>
        </div>
    </div>
}

export default TarjetaPersonaje;