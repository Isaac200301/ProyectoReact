import React from 'react'
import Carrusel from './Carrusel'
import '../styles/Categorias.css'

const Categorias = () => {
  return (
    <div>
      <section>
        <Carrusel/>
      </section>

      <section className='titulo'>
        <h1>Servicios Confereasy</h1>
      </section>

      <section className='tarjetas'>
      <div className="tarjeta">
      <img src="./images/salajuntadirectiva101.jpg" alt="img" className="tarjeta-img" />
        <div className="tarjeta-body">
          <h2>Salas de Junta directiva</h2>
          <p>Una sala de junta directiva es un espacio diseñado específicamente para la realización de reuniones formales entre los miembros de una junta directiva de una empresa u organización.</p>
          <button className="tarjeta-button">Más información</button>
        </div>
      </div>
      <div className="tarjeta">
      <img src="./images/saladeentrevista202.jpg" alt="img" className="tarjeta-img" />
        <div className="tarjeta-body">
          <h2>Salas de Entrevista</h2>
          <p>Espacio diseñado específicamente para llevar a cabo conversaciones entre periodistas y personas de interés público, como políticos, artistas, deportistas, etc.</p>
          <button className="tarjeta-button">Más información</button>
        </div>
      </div>
      <div className="tarjeta">
      <img src="./images/salacapacitación301.jpg" alt="img" className="tarjeta-img" />
        <div className="tarjeta-body">
          <h2>Salas de Capacitación</h2>
          <p>Lugar donde se imparten conocimientos, habilidades y destrezas a un grupo de personas, ya sea para empleados de una empresa, estudiantes de una institución educativa o cualquier otro tipo de público.</p>
          <button className="tarjeta-button">Más información</button>
        </div>
      </div>
      <div className="tarjeta">
      <img src="./images/saladebrainstorming402.jpg" alt="img" className="tarjeta-img" />
        <div className="tarjeta-body">
          <h2>Salas de Brainstorming</h2>
          <p>Una sala de brainstorming, o también conocida como sala de lluvia de ideas, es un espacio diseñado específicamente para fomentar la creatividad y la generación de ideas innovadoras.</p>
          <button className="tarjeta-button">Más información</button>
        </div>
      </div>
      </section>
      <section className='contacto'>
          <div>
            <img src="public/images/whatsapp.png" alt="whatsapp" />
            <p>+57 321 895 6321</p>
          </div>
          <div>
            <img src="public/images/email.png" alt="email" />
            <p>confereasycontacto@gmail.com</p>
          </div>
          <div>
            <img src="public/images/telefono.png" alt="telefono" />
            <p>604 444 4165</p>
          </div>
        </section>


     {/* <section className='Principal'>
        <div className="cate">
          <img src="./images/salajuntadirectiva101.jpg" alt="Cat" />
          <img src="./images/saladeentrevista202.jpg" alt="Cat" />
          <img src="./images/saladebrainstorming402.jpg" alt="Cat" />
          <img src="" alt="Cat" />
        </div>
      </section>*/}

    </div>


  )
}

export default Categorias