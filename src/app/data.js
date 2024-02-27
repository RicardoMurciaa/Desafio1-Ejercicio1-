//BORRAR SI NO PUEDO USAR REACT
import React from "react";
import carte from "./cartelera"

function peli(){
    return (
        <div className="info">
            {
                carte.map((carte) => (
                    <div className="infocarte">
                        <h1>{carte.pelicula}</h1>
                        <p>{carte.precio}</p>
                        <span>{carte.horario}</span>
                        <button>Añadir carrito</button>
                    </div>
                ))
            }
        </div>
    )
}

export default peli