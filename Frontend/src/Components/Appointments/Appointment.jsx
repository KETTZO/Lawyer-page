import React, { useState, useEffect } from 'react';

import Navigation_Bar from '../Navigation_Bar/Navigation_Bar'
import './Appointment.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthProvider, useAuth } from '../../auth/AuthContext.jsx'
import API_URL from '../../auth/constants'

function Appointment() {

    const [selectedDate, setSelectedDate] = useState(null);
    const {isAuthenticated} = useAuth();
    const [citas, setCitas] = useState([]);
    const [error, setError] = useState(null);
    var citasArray = Object.values(citas);
    const {userId} = useAuth();
    const {userData} = useAuth();
    const [date, setDate] = useState('');
    const [text, setText] = useState('');
    useEffect(() => {
      const fetchAppointments = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/GetAppointments?userId=NO`, {
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
              
          }
          const data = await response.json();
          setCitas(data);
          
          citasArray = Object.values(citas);
          
         
        } catch (error) {
          console.error('Error al obtener los servicios:', error);
          setError(error.message);
        }
      };
      
      fetchAppointments();
      
    }, []);

    
    const isTimeDisabled = time => {
      // Lista de horas que deseas ocultar
      const avilableHours = [10,11,12,13,14,16,17];
      // Verifica si la hora actual está en la lista de horas deshabilitadas
      return avilableHours.includes(time.getHours());
    };

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
        blockedDates.push(new Date (year, month, day, hours, minutes));
});
      console.log(citasArray[1]);
    };

    const handleDateChange = date => {
      setSelectedDate(date);
      
    };
    const handleTextChange = (e) => {
      setText(e.target.value);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      const formattedDate = selectedDate.toISOString().split('T')[0];
      const formattedTime = selectedDate.toTimeString().split(' ')[0].slice(0, 5); // Formato HH:MM
      
      const data = {
        user: userData._id,
        date: formattedDate,
        service: text,
        hour: formattedTime,
      };
  
      try {
        const response = await fetch(`${API_URL}/Appointment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: userData._id,
            date: formattedDate,
            hour: formattedTime,
            service: text, 
          })
        });
        console.log(JSON.stringify({
          user: userData._id,
          date: formattedDate,
          hour: formattedTime,
          service: text,

        }));
        
        if (response.ok) {
          
          //redirect('../Appointments/MyAppointments.jsx');
          console.log('Data saved successfully');
        } else {
          console.error('Error saving data');
        }
      } catch (error) {
        console.error('Error saving data', error);
      }
    };
    
    
    const blockedDates = [
        new Date(2024, 4, 20, 13, 0), // 18 de mayo de 2024 (todo el día)
      ];
      const blockedHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 18, 19, 20, 21, 22, 23];
    
      // Función para bloquear días específicos
      // Función para bloquear días específicos
      const filterDate = date => {
        // Verificar si la fecha y hora están en el arreglo de fechas bloqueadas
        for (const blockedDate of blockedDates) {
          if (
            blockedDate.getFullYear() === date.getFullYear() &&
            blockedDate.getMonth() === date.getMonth() &&
            blockedDate.getDate() === date.getDate() &&
            blockedDate.getHours() === date.getHours() &&
            blockedDate.getMinutes() === date.getMinutes()
          ) {
            return false;
          }
        }
        return true;
      };
      
      // Función para bloquear horas específicas
      const filterTime = time => {
        if (blockedHours.includes(time.getHours())) {
          return false;
        }
        // Verificar si la fecha y hora están en el arreglo de fechas bloqueadas
        for (const blockedDate of blockedDates) {
          if (
            blockedDate.getFullYear() === time.getFullYear() &&
            blockedDate.getMonth() === time.getMonth() &&
            blockedDate.getDate() === time.getDate() &&
            blockedDate.getHours() === time.getHours() &&
            blockedDate.getMinutes() === time.getMinutes()
            ) {
            return false;
          }
        }
        return true;
      };

      
  return (
    <>
    <Navigation_Bar isLoggedIn={isAuthenticated}/>
    <body>
        
    <h1>Agendar cita</h1>
    
        <div className="calendar-container">
            <h2>Seleccionar Fecha para la Cita</h2>
            <div className="calendar-wrapper">
              <div onClick={handlePrintDate}>
              <DatePicker wrapperClassName="date"
              onChangeRaw={handleDateChange}
              selected={selectedDate}
              onChange={handleDateChange}
              showTimeSelect
              timeIntervals={60}
              filterTime={filterTime}
              filterDate={filterDate}
              minDate={new Date()} // Opcional: para evitar seleccionar fechas pasadas
              dateFormat="yyyy-MM-dd HH:mm"
              timeCaption="Time"
            />
              </div>
            
            </div>
            <label>
                Motivo
            </label>
            <textarea onChange={handleTextChange}/>
            
            <button onClick={handleSubmit}>Enviar</button>
        </div>
    
    </body>
    <footer>
        <p>© 2024 Abogadas Asociadas - Derecho familiar e inmobiliaro.</p>
    </footer>
    
    </>
    

  )
}

export default Appointment