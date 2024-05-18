
import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext.jsx";
import './ItemCarrito.css';

export const ItemCarrito = ({ peliculaMap }) => {
  const imgURL = `https://image.tmdb.org/t/p/w300${peliculaMap.poster_path}`
  const { deleteItemToCart } = useContext(CartContext)
  //  CONTADOR DE DIAS DE ALQUILER
  var [count, setCount] = useState(1);
  const total = 500 * count

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="item">
        <div className="izquierda">
          <img className="imagen"src={imgURL} alt={peliculaMap.title} />
        </div>
        <div className="derecha">
          <div className="datosItem">
            <h2 className="titulo">{peliculaMap.title}</h2>
            <div className="contador">
              <button className="signo" onClick={decrement}>➖</button>
              <strong>{count} Día/as</strong>
              <button className="signo" onClick={increment}>➕</button>
              <button onClick={() => deleteItemToCart(peliculaMap)}>Quitar ❌</button>
            </div>
            <br/>
            <strong className="precio">Precio: ${total}</strong>
          </div>
        </div>
      </div>
    </>
  );
};