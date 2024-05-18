import './Navigation_Bar.css'
import { Link } from 'react-router-dom'

function Navigation_Bar() {

  return (
    <>
      <div className='NavContainer'>
        <section className='logo'>
        <Link to='/' className='link'><h3>Lawyer Logo</h3></Link>
        </section>
        <nav>
            <a>Inicio</a>
            <Link to="/Services" className='link'>Servicios</Link>
            <a>Contacto</a>
            <a>Nosotros</a>
        </nav>
        <section className='userButtons'>
          <Link to="/Login" className='link'>Iniciar Sesión</Link>
          <Link to='/Signup' className='link'>Registrarse</Link>
        </section>
        </div>
    </>
  )
}

export default Navigation_Bar