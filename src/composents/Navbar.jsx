import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav> 
        {/* logo texte stylé */}
        <div className="logo" onClick={() => navigate('/')}>
          <span className="logo_crochet">&lt;</span>
          <span className="logo_nom">IB</span>
          <span className="logo_crochet">/&gt;</span>
        </div>

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
            <NavLink to="/about" onClick={() => setMenuOpen(false)}><p>À propos</p></NavLink>
          </div>
        )}
    </nav>
  )
}

export default Navbar