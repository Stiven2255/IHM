import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/ApiProducts.css";

function ApiProducts() {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    axios.get('https://api.rawg.io/api/games', {
      params: {
        key: '6964326f4f894f3c8071785336dd4239',
        page_size: 12,
      }
    })
    .then((respuesta) => {
      const dataJuegos = respuesta.data.results.map((item) => ({
        nombre: item.name,
        imagen: item.background_image,
        lanzamiento: item.released || 'No disponible',
        puntuacion: item.rating !== null ? item.rating.toFixed(1) : 'No disponible',
      }));
      setJuegos(dataJuegos);
    })
    .catch((error) => console.error('Error cargando API de videojuegos', error));
  }, []);

  return (
    <div className='registro-container'>
      <h2 className='registro-title'>REGISTRO VIDEOJUEGOS</h2>
      <ul className='zapatos-list'>
        {juegos.map((juego, index) => (
          <li key={index} className='zapato-item'>
            <img src={juego.imagen} alt={juego.nombre} className='zapato-imagen' />
            <h3>Nombre:</h3>
            <p>{juego.nombre}</p>
            <h3>Fecha de lanzamiento:</h3>
            <p>{juego.lanzamiento}</p>
            <h3>Valoración:</h3>
            <p>{juego.puntuacion} / 5</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApiProducts;