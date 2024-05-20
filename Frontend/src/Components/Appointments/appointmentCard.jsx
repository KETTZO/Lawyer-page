import { Link } from 'react-router-dom';
import './Appointment.css'


function AppointmentCard({ date, service }) {

    return (
        <>
        
        <div className='card'>
          
          <h3>{date}</h3>
          <p>{service}</p>
          </div>
      </>
    );

    
  }
  
  export default AppointmentCard;
  