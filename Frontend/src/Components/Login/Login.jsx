import { useState } from 'react'
import './Login.css'
import Navigation_Bar from '../Navigation_Bar/Navigation_Bar'
import { Link } from 'react-router-dom'

function Login() {

  const [nombre, setNombre] = useState('')
  const [contra, setContra] = useState('')
  const [error, setError] = useState(false)

  const loginUser = () => {
    // Código para iniciar sesión del usuario
    console.log('Usuario inició sesión');
  };

  const handleSubmit = (e) =>{
    e.preventDefault()
    /*
    if(nombre === '' || contra === ''){
      setError(true)
      return
    }
    else if(nombre === 'admin' || contra === 'admin'){
      setError(false)
      setUser([nombre])
      return
    }
    else{
      setError(true)
      return
    }*/
    
  }

  return (
    <>
    <Navigation_Bar />
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
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
          <br />
          <input type="password" className='inputLogin' placeholder='Contraseña'
            value={contra}
            onChange={e => setContra(e.target.value)}
          />
          {error && <p className='msgError'>Verifique usuario y/o contraseña</p>}
        </div>
        <Link to='/' className='link'>
          <button onClick={loginUser}>Continuar</button>
        </Link>
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
