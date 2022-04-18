import { useState } from 'react';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import {useDispatch} from "react-redux";
import { seleccionarPersonaje , addPersonajeFavoritos, deletePersonajeFavoritos} from '../../actions/personajes';


/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = ({personaje}) => {

   
    const [favorito, setFavorito] = useState(false);
    const dispatch = useDispatch();

    const onSeleccionarPersonaje = (personaje) => {
        dispatch(seleccionarPersonaje(personaje));
        dispatch(addPersonajeFavoritos(personaje));
    }
    const onEliminarPersonaje = (personaje) =>{
        dispatch(deletePersonajeFavoritos(personaje))
    }

    return <div className="tarjeta-personaje">
       
        <img src={personaje?.image} alt={personaje?.name}/>
        <div className="tarjeta-personaje-body">
            <span>{personaje?.name}</span>
            <BotonFavorito esFavorito={favorito} onClick={setFavorito} personaje={personaje} onSeleccionarPersonaje={onSeleccionarPersonaje} onEliminarPersonaje={onEliminarPersonaje}/>
        </div>
    </div>
}

export default TarjetaPersonaje;