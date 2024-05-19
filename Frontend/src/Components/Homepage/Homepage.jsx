import './Homepage.css'
import Navigation_Bar from '../Navigation_Bar/Navigation_Bar'
import { AuthProvider, useAuth } from '../../auth/AuthContext.jsx'
import {Link} from 'react-router-dom'
import { useState } from 'react'


function Homepage() {
  
  const {isAuthenticated} = useAuth();

  
  return (
    <>
    <div className='backgroundImage'>

    
    <Navigation_Bar isLoggedIn={isAuthenticated}/>
    <header>
        <section className="slogan">
        <div>
            <h1>Tu voz en la ley, <strong>tu defensora</strong> en la justicia.</h1>
                {/*<span>Limpieza</span>
                <span>Extracciones</span>
                <span>Ortodoncia</span>
  <span>Endodoncia</span>*/}
            </div>
        </section>
        {/*<section className="image">
            <img src={dentist} alt="" />
</section>*/}
    </header>
        </div>
    </>
  )
}

export default Homepage