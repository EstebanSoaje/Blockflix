import "./Carta.css"
import { Link } from "react-router-dom"


export const Carta = ({ peliculaMap }) => {
    const imgURL = `https://image.tmdb.org/t/p/w300${peliculaMap.poster_path}`
    

    return (
        <li className="carta">
            <Link to={`/pelicula/${peliculaMap.id}`}>
                <img src={imgURL} alt={peliculaMap.title} />
            </Link>
            <div className="info">
                <h5>{peliculaMap.title}</h5>
                <small>{peliculaMap.release_date}</small>
            </div>
            
        </li>

    )
}

