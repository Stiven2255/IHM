import React from 'react'
import "../styles/Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className='container'>
      <div className='navbar'>
        <ul>
          <div className='logo'>
             <li><img src="https://marketplace.canva.com/EAFBr8O-o_0/2/0/1600w/canva-presentaci%C3%B3n-videojuegos-retro-geom%C3%A9trico-ne%C3%B3n-azul-y-magenta-wDo_p-zyeI4.jpg" alt="imagen no encontrada"/></li>
          </div>
          <li><Link to = "/">Inicio</Link></li>
          <li><Link to = "/Service">Servicios</Link></li>
          <li><Link to = "/ApiProducts">Productos en linea</Link></li>
          <li><Link to = "/CompAPi">Nueva IA</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar