import {BrowserRouter,Routes,Route,Link } from "react-router-dom"
import {LandingPage} from './pages/LandingPage.jsx'
import {DetallePeliculas} from "./pages/DetallePeliculas.jsx"
import {Carrito} from "./pages/Carrito.jsx"
import {Login} from "./pages/Login.jsx"
import {CartProvider} from "./Context/CartContext.jsx"

import "./App.css"

export const App = () => {

  return(
  <CartProvider>
    <BrowserRouter> 
     {/* <ul className="listaVinculos">
      <li><Link to = "/"><p>Ir al Landing Page</p></Link></li>
      <li><Link to = "/pelicula/:peliculaId"><p>Ir a detalle pelicula</p></Link></li>
     </ul> */}

      <Routes>
        <Route path = "/" element = {<LandingPage/>}/>
        <Route path = "/pelicula/:peliculaId" element = {<DetallePeliculas/>}/>
        <Route path = "/cart" element = {<Carrito/>}/>
        <Route path = "/login" element = {<Login/>}/>
      </Routes>
    </BrowserRouter>
  </CartProvider>
  )
}