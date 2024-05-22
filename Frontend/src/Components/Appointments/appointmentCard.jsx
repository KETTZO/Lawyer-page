import { Link } from 'react-router-dom';
import './Appointment.css'


function AppointmentCard({ date, service }) {

    return (
        <>
        
        <div className='cardAppointment'>
          
          <h3>{date}</h3>
          <p>{service}</p>
          </div>
      </>
    );

    
  }
  
  export default AppointmentCard;
  