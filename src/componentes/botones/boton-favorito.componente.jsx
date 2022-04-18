import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito = ({esFavorito, onClick, personaje,onSeleccionarPersonaje, onEliminarPersonaje}) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"
   

    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} onClick={()=>{
            if(esFavorito){
                onClick(!esFavorito); 
                onEliminarPersonaje(personaje)
            }else{
                onClick(!esFavorito); 
                onSeleccionarPersonaje(personaje)}
            }}/>
    </div>
}

export default BotonFavorito;