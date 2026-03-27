import React from 'react'
import { projets_bd } from '../data/Projet_bd'
import { NavLink } from 'react-router-dom'

const Projets = () => {
  return (
    <div className='projet'> 
      <h1>Mes projets</h1>

      <div className="mes_projet">
        {projets_bd.map((projet) => (
          <NavLink 
            key={projet.id} 
            to={`/projet/${projet.id}`} 
            className="un_projet"
          >
            <img src={projet.image} alt={projet.nom} srcSet="" />
            <div className="box_projet">
              <p>{projet.nom}</p>
              <div className="technos">
                {projet.techno.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Projets