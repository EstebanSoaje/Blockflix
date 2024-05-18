import "./GrillaCarrito.css"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../Context/CartContext.jsx"
import { ItemCarrito } from "./ItemCarrito.jsx"

export const GrillaCarrito = () => {
    const [cartOpen, setCartOpen] = useState(false)
    const [productsLength, setProductsLength] = useState(0)
    
    const { cartItems } = useContext(CartContext);
    
    useEffect(() => {
        setProductsLength(
            cartItems.reduce((previus, current) => previus + current.amount, 0)
        );
    }, [cartItems]);
    
    const totalFinal = 200 * productsLength
    const total = cartItems.reduce(
        (previus, current) => previus + current.amount * current.price,
        0
    );
    return (
        <>
            {cartItems && (
                <div className="carrito">
                    <h2>Tu selección de peliculas</h2>

                    {cartItems.length === 0 ? (
                        <p className="carritoVacio">Tu carrito esta vacio</p>
                    ) : (
                        <div className="listaPelis">
                            {cartItems.map((pelicula) => (
                                <ItemCarrito key={pelicula.id} peliculaMap={pelicula} />
                            ))}
                        </div>
                    )}
                    <div className="alquilar">
                        <h2 className="total">Total: ${totalFinal}</h2>
                        <button onClick={() => alert("¿Estas seguro de que querés alquilar este carrito?")}>Alquilar carrito✅</button>
                    </div>
                </div>
            )}

        </>
    )
}