import { useDispatch } from 'react-redux';
import './filtros.css';
import { searchPersonaje } from '../../actions/personajes';


const Filtros = (props) => {

    const dispatch = useDispatch()

    const handlerBuscador = (e)=>{
        e.preventDefault();
        dispatch(searchPersonaje(props.buscador))
    }

    return <form className="filtros" onSubmit={(e)=>handlerBuscador(e)}>
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" value={props.buscador} onChange={(e) => {props.setBuscador(e.target.value)}} autoFocus={true}/>
    </form>
}

export default Filtros;
