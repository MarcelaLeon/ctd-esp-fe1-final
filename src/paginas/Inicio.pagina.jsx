import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useState, useEffect } from "react";
import { searchPersonaje } from "../services/personajesServices";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {

    const [pagina, setPagina] = useState(1);
    const [buscador, setBuscador] = useState('');
    const [personajes, setPersonajes] = useState([]);

    const actualizarPagina = (page) => {
      setPersonajes([]);
      setPagina(page)
    }

    useEffect(() => {
        searchPersonaje(buscador).then((data) => {
          setPersonajes(data);
        });
      }, [buscador]);

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger">Test Button</button>
        </div>
        <Filtros buscador={buscador} setBuscador={setBuscador}/>
        <Paginacion pagina={pagina} setPagina={setPagina} actualizarPagina={actualizarPagina}/>
        <GrillaPersonajes pagina={pagina} personajes={personajes} setPersonajes={setPersonajes} />
        <Paginacion pagina={pagina} setPagina={setPagina} actualizarPagina={actualizarPagina}/>
    </div>
}

export default PaginaInicio