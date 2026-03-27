import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav> 
        <img className='logo' src={logo} alt="" srcSet="" />

        {/* menu normal desktop */}
        <div className="lien">
              <NavLink to="/"><p>Accueil</p></NavLink>
              <NavLink to="/projets"><p>Projets</p></NavLink>
              <NavLink to="/contact"><p>Contact</p></NavLink>
        </div>

        <div className="about" onClick={() => navigate('/about')}>About</div>

        {/* burger mobile */}
        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
        </div>

        {/* menu mobile */}
        {menuOpen && (
          <div className="menu_mobile">
            <NavLink to="/" onClick={() => setMenuOpen(false)}><p>Accueil</p></NavLink>
            <NavLink to="/projets" onClick={() => setMenuOpen(false)}><p>Projets</p></NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}><p>Contact</p></NavLink>
            <p onClick={() => { navigate('/about'); setMenuOpen(false) }}>About</p>
          </div>
        )}
    </nav>
  )
}

export default Navbar