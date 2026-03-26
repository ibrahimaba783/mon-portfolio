import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav> 
        <img className='logo' src={logo} alt="" srcSet="" />

        <div className="lien">
              <NavLink to="/"><p>Accueil</p></NavLink>
              <NavLink to="/projets"><p>Projets</p></NavLink>
              <NavLink to="/contact"><p>Contact</p></NavLink>
        </div>

        <div className="about" onClick={() => navigate('/about')}>About</div>
    </nav>
  )
}

export default Navbar