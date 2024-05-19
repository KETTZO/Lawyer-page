import { Link } from 'react-router-dom';
import './ServiceCard.css'


function ServiceCard({ title, description, imageUrl }) {

    return (
        <>
        
      
        <Link to='/Appointment' replace={true}>
        <div className='card'>
          <img src={imageUrl} alt={title}/>
          <h3>{title}</h3>
          <p>{description}</p>
          </div>
        </Link>
        
      
      </>
    );

    
  }
  
  export default ServiceCard;
  