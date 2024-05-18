import React, { useState, useEffect } from 'react';
import Navigation_Bar from '../Navigation_Bar/Navigation_Bar'
import './Appointment.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function Appointment() {
    const [selectedDate, setSelectedDate] = useState(null);

    const isTimeDisabled = time => {
      // Lista de horas que deseas ocultar
      const avilableHours = [10,11,12,13,14,16,17];
      // Verifica si la hora actual está en la lista de horas deshabilitadas
      return avilableHours.includes(time.getHours());
    };
    const blockedDates = [
        new Date(2024, 4, 18), // 18 de mayo de 2024
        new Date(2024, 4, 19), // 19 de mayo de 2024
        new Date(2024, 4, 25), // 25 de mayo de 2024
        new Date(2024, 4, 26), // 26 de mayo de 2024
        // Continúa con los días que deseas bloquear...
      ];
    
      // Función para bloquear días específicos
      const filterDate = date => {
        const formattedDate = new Date(date).setHours(0, 0, 0, 0); // Se establece la hora a 00:00:00 para comparar solo fechas
        return !blockedDates.some(blockedDate => new Date(blockedDate).getTime() === formattedDate);
      };

      
  return (
    <>
    <Navigation_Bar/>
    <body>
        
    <h1>Agendar cita</h1>
    
        <div className="calendar-container">
            <h2>Seleccionar Fecha para la Cita</h2>
            <div className="calendar-wrapper">
            <DatePicker wrapperClassName="date"
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            showTimeSelect
            timeIntervals={60}
            filterTime={isTimeDisabled}
            filterDate={filterDate}
            minDate={new Date()} // Opcional: para evitar seleccionar fechas pasadas
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="Time"
            />
            </div>
            <label>
                Motivo
            </label>
            <textarea />
            
            <button>Enviar</button>
        </div>
    
    </body>
    <footer>
        <p>© 2024 Abogadas Asociadas - Derecho familiar e inmobiliaro.</p>
    </footer>
    
    </>
    

  )
}

export default Appointment