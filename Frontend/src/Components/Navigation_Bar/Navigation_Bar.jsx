import './Navigation_Bar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { AuthProvider, useAuth } from '../../auth/AuthContext.jsx'

function Navigation_Bar({isLoggedIn}) {

  const { logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
  }
  const handleLogout = () => {
    logout();
  };
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
        {isLoggedIn ? (
            <>
              <div className='profile-conatiner' onClick={toggleMenu}>
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Imagen de perfil" className="profile-image" />
              {isMenuOpen && (
                <div className="dropdown-menu">
                  <Link to="/profile">Mi perfil</Link>
                  <button onClick={handleLogout}>Cerrar sesión</button>
                </div>
              )}
              {/* Aquí puedes agregar un enlace para la página de perfil si lo deseas */}
              {/* <Link to="/profile" className='link'>Mi perfil</Link> */}
              </div>
              
            </>
          ) : (
            <>
              <Link to="/Login" className='link'>Iniciar Sesión</Link>
              <Link to='/Signup' className='link'>Registrarse</Link>
            </>
          )}
        </section>
        </div>
    </>
  )
}

export default Navigation_Bar