import React, { useState } from 'react'
import { useAuth } from '../auth/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import API_URL from '../auth/constants.ts';


const useLogin = () => {

   const { login } = useAuth();
   const navigate = useNavigate();
    //const [error, seterror] = useState(null);
    //const navigate = useNavigate();
    const loginUser = async (email, password) =>{
      try {
        const response = await fetch(`${API_URL}/Login`,{
          method: 'POST',
          headers:{
              'Content-Type':'application/json'
            },
          body: JSON.stringify({
            email,
            password
          })
        });
        
        const data = await response.json();

        if(response.ok){
          console.log('El usuario ingresó correctamente');
          login(data.token, data.user);
          console.log(data.user.name);
          //setError(false);
        }
        else{
          console.log('Ocurrió un error');
          //setError(true);
        }
      } catch (error) {
        console.log(error);
      }
    }

  return{loginUser};
}

export default useLogin;