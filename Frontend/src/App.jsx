import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login/Login.jsx'
import Navigation_Bar from './Components/Navigation_Bar/Navigation_Bar.jsx'
import Homepage from './Components/Homepage/Homepage.jsx'
import Appointment from './Components/Appointments/Appointment'
import AboutUs from './Components/Nosotros/Nosotros'
import MyAppointments from './Components/Appointments/MyAppointments'
import Services from './Components/Services/Services.jsx'
import {createBrowserRouter, RouterProvider, useNavigate} from 'react-router-dom'
import Register from './Components/Login/Register.jsx'
import { AuthProvider, useAuth } from './auth/AuthContext.jsx'
import { jwtDecode } from 'jwt-decode'

function App() {
  const [count, setCount] = useState(0)
  const {isAuthenticated} = useAuth();

  //console.log(decodedToken.exp * 1000 < Date.now())

  const router = createBrowserRouter([
    {
      path: '/',
      element:  <Homepage />,
      errorElement: <Homepage />,
    },
    {
      path: '/Login',
      element: !isAuthenticated ? <Login /> : <Homepage />,
      //element: <Login />,
    },
    {
      path: '/Signup',
      //element: <Register />,
      element: !isAuthenticated ? <Register /> : <Homepage />,
  
    },
    {
      path: '/Services',
      element: <Services/>,
      //element: <Login />,
    },
    {
      path: '/Nosotros',
      element: <AboutUs/>,
    },
    {
       path: '/Appointment',
       element: !isAuthenticated ? <Login /> : <Appointment />,
    },
    {
      path: '/MyAppointments',
      element: !isAuthenticated ? <Login /> : <MyAppointments />,
   }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
/*     <AuthProvider>    </AuthProvider>*/