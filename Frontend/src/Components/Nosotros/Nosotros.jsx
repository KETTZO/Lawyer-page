import React from 'react';
import './Nosotros.css';
import Navigation_Bar from '../Navigation_Bar/Navigation_Bar';

const AboutUs = () => {
  return (
    <>
     <Navigation_Bar/>
    <div className="about-us-container">
      <h1>Sobre Nosotros</h1>
      <p>
        Bienvenidos a Abogadas Asociadas, donde nos dedicamos a otorgarte el mejor servicio.
        Nuestro compromiso es ofrecer una representación legal de la más alta calidad, centrados en la satisfacción del cliente.
      </p>
      <h2>Nuestra Historia</h2>
      <p>
        Abogadads Asociadas fue fundada en 2009 con la visión de ser la mejor opción en derecho familiar en Baja California Sur. Desde entonces, hemos crecido y evolucionado, 
        siempre manteniendo nuestros valores.
      </p>
      
      <h2>Nuestros Valores</h2>
      <ul>
        <li>Integridad</li>
        <li>Innovación</li>
        <li>Calidad</li>
        <li>Satisfacción del Cliente</li>
      </ul>
      <h2>Contáctanos</h2>
      <p>
        Si deseas saber más sobre nosotros, no dudes en ponerte en contacto a través de [correo electrónico] o llamarnos al [número de teléfono].
      </p>
    </div>
    
    </>
   
  );
};

export default AboutUs;
