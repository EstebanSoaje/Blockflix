import { useState, useEffect } from "react"
import React from 'react';
import './ItemCarrito.css';
import { Carta } from "./Carta";


export const ItemCarrito = ({ peliculaMap }) => {
  const imgURL = `https://image.tmdb.org/t/p/w300${peliculaMap.poster_path}`
  var [count, setCount] = useState(1);
  const total = 500 * count
  


    
      return (
        <li className="item-carrito">
                <img className="imagen" src={imgURL} alt={peliculaMap.title} />
            
            <div className="info">
                <h4>{peliculaMap.title}</h4>
           
            <p>
               <button className="boton" onClick={() => restarDia()}>-</button>
                 Alquilar por {count} días
              <button className="boton" onClick={() => sumarDia()}>+</button>
            </p>
            <p>${total}</p>
            <button className="boton" onClick={() => <Carta eliminarDelCarrito/> }>Eliminar</button>
            </div>
            
        </li>
      );};