import React from 'react'
import profil from '../assets/images/profil.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className='hero'>
         <div className="box_hero">
             <div className="hero_gauche">
                <h1>Je suis Ibrahima ba </h1>
                 <h2>Etudiant en Développement Web & Mobile</h2>
                 <p>
                   Développeur en devenir, déterminé à maîtriser les technologies modernes pour devenir un expert du logiciel.
                 </p>
                <div className="hero_btn">
                     <button className='hero_btn1' onClick={() => navigate('/projets')}>
                        Voir mes projets
                        <FaLongArrowAltRight />
                     </button>
                     <button className='hero_btn2' onClick={() => navigate('/contact')}>Me contacter</button>
                </div>
             </div>
             <div className="hero_droite">
                  <img src={profil} alt="" srcSet="" />
             </div>
         </div>
    </div>
  )
}

export default Hero