import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = (props) => {

    return <div className="paginacion">
        <button disabled={(props.pagina===1)?true:false} className={"primary"}  onClick={()=> {props.setPagina(props.pagina - 1 )}}>Anterior</button>
        <button disabled={false} className={"primary"} onClick={()=> {props.setPagina(props.pagina + 1 );
        }}>Siguiente</button>
    </div>
}

export default Paginacion;
