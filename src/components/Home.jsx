import React from 'react'
import '../styles/Home.css'
function Home() {
  return (
    <div className='inicio'>
      <h1 className="section-animate">Bienvenido a ViGo</h1>
      <p className="section-animate">En ViGo de ofrecemos los juegos mas top tanto en calificacion como en el impacto. Los mejores precios y tambien en diferentes plataformas como Xbox y Playstation</p>
      
      <div className="image-container section-animate">
        <img src="https://i.ebayimg.com/images/g/q2wAAOSwgDtlpNaq/s-l1200.jpg" alt="Zapatos de moda" />
      </div>
      
      <div className="benefits-section section-animate">
        <h2>¿Por qué ViGo es la tienda de moda actualmente?</h2>
        <ul className="benefits-list">
          <li>Contamos con el mejor catalogo de videojuegos actualmente, en especial para los juegos mas recientes como del 2024 o 2025.</li>
          <li>Nuestros servicios son muy eficientes, tanto para contestar dudas o sugerencias como tambien envios fisicos a su casa.</li>
          <li>Aqui te ofrecemos algo que no muchas empresas te ofrecen y es una garantia de 1 semana, que permite al usuario probar el juego y ver si es de su agrado o no, y si ese es el caso tendra plazo de una semana para poder pedir una devolucion de tu producto</li>
        </ul>
      </div>
      
      <div className="discounts-section section-animate">
        <h2>INCREIBLES DESCUENTOS DE REMATE EN VIDEOJUEGOS ENTRE 2015 Y 2020</h2>
        <div className="image-container">
          <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/01/super-ofertas-game.jpg?tf=3840g" alt="Ofertas especiales" />
        </div>
      </div>
    </div>
  )
}
export default Home