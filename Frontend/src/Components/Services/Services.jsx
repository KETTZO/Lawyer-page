import Navigation_Bar from '../Navigation_Bar/Navigation_Bar'
import ServiceCard from './ServiceCard'
import { useState, useEffect } from 'react';
import React from 'react';
import { AuthProvider, useAuth } from '../../auth/AuthContext.jsx'


function Services() {
    const [services, setServices] = useState([]);
    const [error, setError] = useState(null);
    var servicesArray = Object.values(services);
    const {isAuthenticated} = useAuth();

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/Service', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            },
            
        }); // Ruta de la API en tu servidor Express
        if (!response.ok) {
          throw new Error('No se pudo obtener la información del servicio');
        }
        else
        {
            
        }
        const data = await response.json();
        setServices(data);
        console.log(services);
        servicesArray = Object.values(services);
       
      } catch (error) {
        console.error('Error al obtener los servicios:', error);
        setError(error.message);
      }
    };

    fetchService();
  }, []);


  return (
    <>
    <Navigation_Bar isLoggedIn={isAuthenticated}/>
    <body>
        
        <div className='encabezado'>
            <div className='bg-image'> </div>
            <h1>Servicios</h1>
            <p>En nuestro despacho jurídico, ofrecemos una amplia gama de servicios legales especializados en derecho familiar e inmobiliario para brindarte la tranquilidad y seguridad que necesitas en situaciones importantes de tu vida.</p>
        </div>
        <div className='servicios'>
         {servicesArray[1] && Object.entries(servicesArray[1]).map(([key, service]) => (
            <ServiceCard
            title={service.name}
            description={"$" + service.price + " MXN"}
            imageUrl={service.desc}
        />
         ))}
        
         
        
        
        
        
        
        
      
        
        </div>
    </body>
    <footer>
        <p>© 2024 Abogadas Asociadas - Derecho familiar e inmobiliaro.</p>
    </footer>
    
    </>
    

  )
}

export default Services