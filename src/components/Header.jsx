import {Link} from "react-router-dom"
import { useContext, useState } from 'react'
import './Header.css'
export const Header = ()=>  {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="header">
        <nav>
          <div>
          <Link className="links" to = "/"><p className="logo">🎬Blockflix</p></Link>
          </div>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
          <div className="buttons">
            
          <Link className="links" to = "/cart"><button className="cart-button">Cart 🛒</button></Link>
          <Link className="links" to = "/login"><button className="login-button">Login 🚪</button></Link>
        </div>
        </nav>
      </header>

    </>
  )
}
