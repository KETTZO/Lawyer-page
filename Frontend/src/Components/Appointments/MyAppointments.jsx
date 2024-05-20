import React, { useState, useEffect } from 'react';
import Navigation_Bar from '../Navigation_Bar/Navigation_Bar'
import './Appointment.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthProvider, useAuth } from '../../auth/AuthContext.jsx'
import API_URL from '../../auth/constants'
import AppointmentCard from './appointmentCard'


function Appointment() {

    const {isAuthenticated} = useAuth();
    const { userData } = useAuth();
    const [citas, setCitas] = useState([]);
    var citasArray = Object.values(citas);
    const [error, setError] = useState(null);
    const usuario = userData._id;
    const x = 1;
    var formattedDate = null;

    const handlePrintDate = () => {
        const appointments = citasArray[1];
        var year = null;
        var month = null
        var day = null;
        var hours = null;
        var minutes = null;
        var nuevafecha = null;
        appointments.forEach(appointment => {
          nuevafecha = new Date(appointment.date);
          
          year = nuevafecha.getUTCFullYear();
          month = String(nuevafecha.getUTCMonth()).padStart(2, '0'); // Los meses en JavaScript van de 0 a 11
          day = String(nuevafecha.getUTCDate()).padStart(2, '0');
          hours = String(nuevafecha.getUTCHours()).padStart(2, '0');
          minutes = String(nuevafecha.getUTCMinutes()).padStart(2, '0');
          console.log(new Date (year, month, day, hours, minutes));
          
  });
        console.log(typeof(citasArray));

        console.log(citasArray[1]);
      };
      const formatDate = (dateString) => {
        const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

  const date = new Date(dateString);
  const utcDayOfWeek = daysOfWeek[date.getUTCDay()];
  const utcDay = date.getUTCDate();
  const utcMonth = months[date.getUTCMonth()];
  const utcYear = date.getUTCFullYear();
  const utcHours = String(date.getUTCHours()).padStart(2, '0');
  const utcMinutes = String(date.getUTCMinutes()).padStart(2, '0');
  const ampm = date.getUTCHours() >= 12 ? 'pm' : 'am';

  return `${utcDayOfWeek} ${utcDay} de ${utcMonth} de ${utcYear} ${utcHours}:${utcMinutes} ${ampm}`;
    };
    useEffect(() => {
        const fetchAppointments = async () => {
          try {
            const response = await fetch(`${API_URL}/GetAppointments?userId=${usuario}`, {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json'
                },
                
            }); // Ruta de la API en tu servidor Express
            if (!response.ok) {

              throw new Error('No se pudo obtener la información de las citas');
            }
            else
            {
                console.log("datos traidos correctamente");
                
            }
            const data = await response.json();
            setCitas(data);
            handlePrintDate();
            
            citasArray = Object.values(citas);
            
           
          } catch (error) {
            console.error('Error al obtener los servicios:', error);
            setError(error.message);
          }
        };
        
        fetchAppointments();
        
      }, []);
      
  return (
    <>
    <Navigation_Bar isLoggedIn={isAuthenticated}/>
    <body>
    
    <h1 onClick={handlePrintDate}>Mis Citas</h1>
        <div className='citas-container'>
            {citasArray[1] && Object.entries(citasArray[1]).map(([key, cita]) =>(
            <AppointmentCard
            date={formatDate(cita.date)}
            service={cita.service}
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

export default Appointment