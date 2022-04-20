import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addPersonajeFavoritos, deletePersonajeFavoritos } from "../actions/personajes";


/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */
const PaginaDetalle = () => {

    const dispatch = useDispatch();

    const personaje = useSelector(state => state.personaje.personajeSeleccionado);

    const  personajesFavoritos = useSelector(state => state.personaje.favoritos);
   
    function checkPersonaje(per) {
        return per.id === personaje.id;
    }
  
    const [favorito, setFavorito] = useState(personajesFavoritos.some(checkPersonaje));

    const onFavoritoPersonaje = (personaje) => {
        dispatch(addPersonajeFavoritos(personaje));
    }

    const onEliminarPersonaje = (personaje) =>{
        dispatch(deletePersonajeFavoritos(personaje))
    }

    return <>
    {(personaje===null)?<div className="container"><p>No haz seleccionado ningun personaje</p></div>:<div className="container"> 
        <h3>{personaje?.name}</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={personaje?.image} alt="Rick Sanchez"/>
                <div className={"detalle-header-texto"}>

                    <p>{personaje?.name}</p>
                    <p>Planeta: {personaje?.origin.name}</p>
                    <p>Genero: {personaje?.gender}</p>
                </div>
                <BotonFavorito esFavorito={favorito} onClick={setFavorito} personaje={personaje} onSeleccionarPersonaje={onFavoritoPersonaje} onEliminarPersonaje={onEliminarPersonaje}/>
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            {personaje?.episode.map((link)=>{
                return <TarjetaEpisodio link={link}/>
            })}
        </div>
    </div>}
    </>
    
}

export default PaginaDetalle