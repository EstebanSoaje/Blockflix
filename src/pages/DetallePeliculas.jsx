import { useState, useEffect } from "react"
import {get} from "../utils/conexionAPI.js"
import { useParams } from "react-router-dom"
import {Header} from "../components/Header.jsx"
import {Contador} from "../components/Contador.jsx"
import "./DetallePeliculas.css"

export const DetallePeliculas = () => {
   
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
        <div>
            <img src={imgURL} alt={pelicula.title} className="ImgPelicula"/>
        </div>
        <div>
            <div className="detallePelicula">
                <h3>Titulo: {pelicula.title}</h3> 
                <p>
                    <strong>Generos: </strong>{pelicula.genres.map((genre)=>genre.name).join("  -  ")} 
                </p>
                <p>
                    <strong>Descripción: </strong>{pelicula.overview}
                </p>
            </div> 
            <Contador /> 
        </div>
    </div>

    </>

   )

}