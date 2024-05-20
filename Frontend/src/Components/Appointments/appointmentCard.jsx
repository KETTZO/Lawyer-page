import { Link } from 'react-router-dom';
import './Appointment.css'


function AppointmentCard({ date, service, status }) {
  
  let statusClass;
    if (status === true)
      statusClass = 'status-proxima';
    else
    {
      statusClass = 'status-finalizada';
    }
      
    
    return (
        <>
        
        <div className='cita-card'>
          
          <h3>{date}</h3>
          <p>{service}</p>
          <p className={statusClass}>{status ? 'Cita agendada' : 'Cita finalizada'}</p>
          </div>
      </>
    );

    
  }
  
  export default AppointmentCard;
  