
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
      <div className="itemCarrito">

        <img src={imgURL} alt={peliculaMap.title} />

        <div className="datosItem">
          <div className="izquierda">
            <p>{peliculaMap.title}</p>
            
            <button onClick={() => deleteItemToCart(peliculaMap)}>Sacar del carrito</button>
          </div>
          <div className="contador">
            <button className="signo" onClick={decrement}>-</button>
            <span>{count} Día/as</span>
            <button className="signo" onClick={increment}>+</button>
          </div>
          <p>Total: ${total}</p>
        </div>
      </div>
    </>
  );
};