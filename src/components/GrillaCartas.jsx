import { useState, useEffect } from "react"
import {get} from "../utils/conexionAPI.js"
import {Carta} from "./Carta.jsx"
import "./GrillaCartas.css"

export const GrillaCartas = () => {

    const [peliculas,setPeliculas]= useState([])

    useEffect(()=>{
        get("/discover/movie").then((data)=>{
            // console.log(data);
            setPeliculas(data.results)
        })
    },[])

    return (
        <ul className="grillaCartas">
            {peliculas.map((pelicula)=>(
                <Carta key={pelicula.id} peliculaMap={pelicula}/>
            ))}
        </ul>
    )
}