import { useState } from 'react'
import './Login.css'
import Navigation_Bar from '../Navigation_Bar/Navigation_Bar'
import { Link } from 'react-router-dom'
import API_URL from '../../auth/constants'
import {checkUser} from '../../auth/checkUser'
import { useNavigate } from 'react-router-dom';

export function Register() {

  const [name, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setContra] = useState('')
  const [Confirmpassword, setConfirmContra] = useState('')
  const [error, setError] = useState(false)

  const user = ({name,email,password});
  const navigate = useNavigate();

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
            name,
            email,
            password,
            Confirmpassword,
          })
        });
  
        if(response.ok){
          console.log('El usuario se registró correctamente');
          setError(false);
          navigate("/Login");
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
        <h2 className='loginText'>Registro</h2>
        <div className='inputs'>
            <input type="email" className='' placeholder='Correo electrónico'
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
            <br />
            <input type="text" className='' placeholder='Nombre Completo'
            value={name}
            onChange={e => setNombre(e.target.value)}
            />
            <br />
            <input type="password" className='' placeholder='Contraseña'
            value={password}
            onChange={e => setContra(e.target.value)}
            />
            <input type="password" className='' placeholder='Confirmar Contraseña'
            value={Confirmpassword}
            onChange={e => setConfirmContra(e.target.value)}
            />
          {error && <p className='msgError'>Verifique usuario y/o contraseña</p>}
        </div>
          <button>Continuar</button>
        <Link to='/Login' className='SingupRedirect'>¿Ya tienes una cuenta?</Link>
      </form>
    </div>
    </div>
    </>
  )
}

export default Register