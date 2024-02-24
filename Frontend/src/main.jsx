import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './Components/Login/Login.jsx'
import Navigation_Bar from './Components/Navigation_Bar/Navigation_Bar.jsx'
import Homepage from './Components/Homepage/Homepage.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Register from './Components/Login/Register.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:  <Homepage />,
    errorElement: <Homepage />,
  },
  {
    path: '/Login',
    element: <Login />,

  },
  {
    path: '/Signup',
    element: <Register />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)