import { Link } from 'react-router-dom';
import './ServiceCard.css'


function ServiceCard({ title, description, imageUrl }) {

    return (
        <>
        
      <div className='card'>
        <Link to='Appointment' replace={true}>
          <img src={imageUrl} alt={title}/>
          <h3>{title}</h3>
          <p>{description}</p>
        </Link>
        
      </div>
      </>
    );

    
  }
  
  export default ServiceCard;
  