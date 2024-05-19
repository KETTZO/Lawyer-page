import { useState } from 'react'
import './Login.css'
import Navigation_Bar from '../Navigation_Bar/Navigation_Bar'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import API_URL from '../../auth/constants'
import { AuthProvider, useAuth } from '../../auth/AuthContext.jsx'
import useLogin from '../../hooks/useLogin.jsx';

function Login() {

  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [error, setError] = useState(false)
  const {loginUser} = useLogin();
  const {isAuthenticated} = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault()
    loginUser(email, password)
    
    
  }

  return (
    <>
    <Navigation_Bar isLoggedIn={isAuthenticated}/>
      <div className='login'> 
      <div className="cardlogin">
      
      <div className="loginImage ">
        <img className="image-align" src="" alt="" />
        <br />
        <div className="text-align">
          <h1 className="">Bienvenido</h1>
          <h3 className="">Ingresa para continuar</h3>
        </div>
        
      </div>
      <form className='loginForm'
        onSubmit={handleSubmit}
      >
        <h2 className='loginText'>Inicio de sesión</h2>
        <div className='inputs'>
          <input type="text" className='inputLogin' placeholder='Correo electrónico'
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />
          <br />
          <input type="password" className='inputLogin' placeholder='Contraseña'
            value={password}
            required
            onChange={e => setpassword(e.target.value)}
          />
          {error && <p className='msgError'>Verifique usuario y/o contraseña</p>}
        </div>
          <button>Continuar</button>
        <Link to='/Signup' className='SingupRedirect'>¿Aún no tienes una cuenta?</Link>
      </form>
    </div>
    </div>
    </>
  )
}
/*
        <RouterLink to='/flicker'>
          <button onClick={loginUser}>Continuar</button>
        </RouterLink>
        <br />
        <RouterLink to='/signup'>¿Aún no tienes una cuenta?</RouterLink>
        */
export default Login
