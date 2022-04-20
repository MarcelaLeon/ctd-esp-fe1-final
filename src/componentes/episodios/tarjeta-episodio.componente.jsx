import './tarjeta-episodio.css';
import { getEpisodio } from '../../services/personajesServices';
import { useEffect, useState } from 'react';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaEpisodio = ({link}) => {

    const [datos, setDatos] = useState({});

    useEffect(()=>{
        getEpisodio(link).then((response)=>{
            setDatos(response);
        })
    },[])

    return <div className="tarjeta-episodio">
            <h4>{datos.name}</h4>
            <div>
                <span>{datos.episode}</span>
                <span>Lanzado el: {datos.air_date}</span>
            </div>
    </div>
}

export default TarjetaEpisodio;