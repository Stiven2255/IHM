import React from 'react'
import '../styles/Service.css'

function Service() {
  return (
    <div className='productos'>
      <h1>Los Videojuegos De Moda 2024/2025</h1>
      
      <h2>Playstation</h2>
      <section className="catalogo">
        {[
          {
            img: "https://www.alkosto.com/medias/711719553793-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzODA5NHxpbWFnZS93ZWJwfGFEWTNMMmcwTlM4eE5ETTJOakU1TVRNNE5qWTFOQzgzTVRFM01UazFOVE0zT1ROZk1EQXhYemMxTUZkNE56VXdTQXwxMzFhMDhjNWQ1MTExNDNkNzk1NWI0ODJmZGQzYzVhZjNlZTE3NmVmMWIwZjVlMGNiMTdlNTQ5ODU0NjUxNDQw",
            name: "The last of us Part 2 remastered",
            price: "$250.000"
          },
          {
            img: "https://panamericana.vtexassets.com/arquivos/ids/472085/juego-the-last-of-us-parte-1-para-ps5-711719553427.jpg?v=638073399576400000g",
            name: "The last of us Part 1",
            price: "$220.000"
          },
          {
            img: "https://http2.mlstatic.com/D_776926-MLA47133169574_082021-C.jpg",
            name: "Days Gone",
            price: "$160.000"
          },
          {
            img: "https://acdn-us.mitiendanube.com/stores/082/436/products/red-dead-redemption-21-b283c0f2846a1f01ae16615751721566-640-0.png",
            name: "Red Dead Redemption 2",
            price: "$180.000"
          }
        ].map((product, index) => (
          <div className="producto nike-product" key={`nike-${index}`}>
            <img src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <span className="precio">{product.price}</span>
            <button className="add-to-cart">Añadir al carrito</button>
          </div>
        ))}
      </section>

      <h2>Xbox</h2>
      <section className="catalogo">
        {[
          {
            img: "https://http2.mlstatic.com/D_Q_NP_2X_943140-MCO83137452187_032025-T.webp",
            name: "Halo Master Chief Collection",
            price: "$160.000"
          },
          {
            img: "https://i.ebayimg.com/images/g/oe4AAOSwXJhn3I8D/s-l400.jpg",
            name: "Gears of War 5",
            price: "$140.000"
          },
          {
            img: "https://content.konzolvilag.hu/product_instances_cover/Konzolvilag_0/1411561/xboxseries-motogp-25-d1-edition_thumb674.jpg?lmod=1743689788",
            name: "MotoGP 25",
            price: "$250.000"
          },
          {
            img: "https://panamericana.vtexassets.com/arquivos/ids/429283/grand-theft-auto-v-premium-edition-para-xbox-one-710425590375.jpg?v=637814871002600000",
            name: "Grand Theft Auto V",
            price: "$110.000"
          }
        ].map((product, index) => (
          <div className="producto adidas-product" key={`adidas-${index}`}>
            <img src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <span className="precio">{product.price}</span>
            <button className="add-to-cart">Añadir al carrito</button>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Service