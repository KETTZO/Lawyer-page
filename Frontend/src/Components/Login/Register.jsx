import { useState } from 'react'
import './Login.css'
import Navigation_Bar from '../Navigation_Bar/Navigation_Bar'
import { Link } from 'react-router-dom'
import API_URL from '../../auth/constants'

function Register() {

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [contra, setContra] = useState('')
  const [ConfirmContra, setConfirmContra] = useState('')
  const [error, setError] = useState(false)

  const SignupUser = () => {
    // Código para iniciar sesión del usuario
    console.log('Usuario inició sesión');
  };

  const handleSubmit = async (e) =>{
    e.preventDefault()
    if(checkUser(user)){
      try {
        setError(false);
        const response = await fetch(`${API_URL}/Register`,{
          method: 'POST',
          headers:{
              'Content-Type':'application/json'
            },
          body: JSON.stringify({
            nombre,
            email,
            contra,
            ConfirmContra,
          })
        });
  
        if(response.ok){
          console.log('El usuario se registró correctamente');
          setError(false);
          goTo('/')
        }
        else{
          const data = await response.json();
          console.log('Ocurrió un error');
          console.log(data);
          setError(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
    else{
      setError('Verifique el formato de la información');
    }
    
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
          <h3 className="">Registrate para continuar</h3>
        </div>
        
      </div>
      <form className='loginForm'
        onSubmit={handleSubmit}
      >
        <h2 className='loginText'>Inicio de sesión</h2>
        <div className='inputs'>
            <input type="text" className='' placeholder='Correo electrónico'
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
            <br />
            <input type="text" className='' placeholder='Nombre Completo'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            />
            <br />
            <input type="password" className='' placeholder='Contraseña'
            value={contra}
            onChange={e => setContra(e.target.value)}
            />
            <input type="password" className='' placeholder='Confirmar Contraseña'
            value={ConfirmContra}
            onChange={e => setConfirmContra(e.target.value)}
            />
          {error && <p className='msgError'>Verifique usuario y/o contraseña</p>}
        </div>
        <Link to='/Login' className='link'>
          <button onClick={SignupUser}>Continuar</button>
        </Link>
        <Link to='/Login' className='SingupRedirect'>¿Ya tienes una cuenta?</Link>
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
export default Register