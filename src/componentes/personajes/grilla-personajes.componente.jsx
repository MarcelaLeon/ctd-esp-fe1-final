import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
//import { getPersonaje } from '../../actions/personajes';
import { getPersonajes } from '../../services/personajesServices.js';


/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = (props) => {
    
    useEffect(() =>{ 
        getPersonajes(props.pagina).then((data) => 
        {props.setPersonajes(data.results)}
        );
        
    },[props.pagina])


    return <div className="grilla-personajes">
        {props.personajes?.map((personaje, index)=>{
            return <TarjetaPersonaje personaje={personaje} key={index}/>
        })}
    </div>
    
}


export default GrillaPersonajes;
 
