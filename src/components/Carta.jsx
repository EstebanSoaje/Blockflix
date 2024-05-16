import "./Carta.css"
import { Link } from "react-router-dom"
import React, { useState } from 'react'

export const Carta = ({ peliculaMap }) => {
    const imgURL = `https://image.tmdb.org/t/p/w300${peliculaMap.poster_path}`
    // var [count, setCount] = useState(1);
    // const total = 500 * count
    
    // const increment = () => {
    //     setCount(count + 1);
    // };

    // const decrement = () => {
    //     if (count > 1) {
    //         setCount(count - 1);
    //     }
    // };

    // const rentMovie = (peliculaMap, count) => {
    //     alert(`${peliculaMap.title} se agregó al carrito por ${count} días.`);
    //     setCount(count = 1);
    // };

    return (
        <li className="carta">
            <Link to={`/pelicula/${peliculaMap.id}`}>
                <div className="carta__imagen">
                    <img src={imgURL} alt={peliculaMap.title} />  
                </div> 
            </Link>
            {/* <div className="info">
                <h3>{peliculaMap.title}</h3>
                <small>{peliculaMap.release_date}</small>
            </div> */}
            
            {/* <div className="contador">
                <button className="signo" onClick={decrement}>-</button>
                <span>{count} Día/as</span>
                <button className="signo" onClick={increment}>+</button>
            </div>
            <p className="precio">${total}</p>
            <button className="carrito" onClick={() => rentMovie(peliculaMap, count)}>Agregar al carrito</button> */}
        </li>
    )
}