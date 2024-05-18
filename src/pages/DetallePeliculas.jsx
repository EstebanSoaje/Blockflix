import { useState, useEffect, useContext } from "react"
import {get} from "../utils/conexionAPI.js"
import { useParams } from "react-router-dom"
import {Header} from "../components/Header.jsx"
import "./DetallePeliculas.css"
import {CartContext} from "../Context/CartContext.jsx"

export const DetallePeliculas = () => {
   const { addItemToCart } = useContext(CartContext)
    const [pelicula,setPelicula]= useState (null)
    const {peliculaId} = useParams();

    useEffect(()=>{
        get(`/movie/${peliculaId}`).then((data)=>{
            // console.log(data);
            setPelicula(data)
        })
    },[peliculaId]);

   
   //si no existe id ingresado
   if (!pelicula){
    return null
   }

   const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`;

   return(
    <>
    <Header/>
    <div className="contenedorPelicula">
        <img src={imgURL} alt={pelicula.title} className="ImgPelicula"/>
        <div className="detallePelicula">
            <h3>Titulo: {pelicula.title}</h3> 
            <p>
                <strong>Generos: </strong>{pelicula.genres.map((genre)=>genre.name).join("  -  ")} 
            </p>
            <p>
                <strong>Descripción: </strong>{pelicula.overview}
            </p>
            <button onClick={() => addItemToCart(pelicula)}>Agregar al carrito</button>
        </div>
        
    </div>
    </>

   )

}