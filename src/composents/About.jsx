import React from 'react'
import photo from '../assets/images/hero-bg.jpg'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFootballBall, FaBook, FaBicycle, FaPlane, FaUmbrellaBeach } from "react-icons/fa";

const About = () => {
  return (
    <div className='about_page'>
      <h1>À Propos</h1>

      <div className="about_content">

        {/* ---- photo + nom ---- */}
        <div className="about_top">
          <div className="about_photo">
            <img src={photo} alt="Ibrahima BA" />
          </div>
          <div className="about_intro">
            <h2>Ibrahima BA</h2>
            <span className="about_titre">Etudiant en Informatique</span>
            <p>
              Etudiant motivé en Informatique, je souhaite développer mes compétences
              en programmation afin de construire une carrière d'ingénieur logiciel.
            </p>
          </div>
        </div>

        {/* ---- formation ---- */}
        <div className="about_section">
          <h3>🎓 Formation</h3>
          <div className="about_items">
            <div className="about_item">
              <span className="about_periode">2024 - à nos jours</span>
              <p><strong>ISEP ABDOULAYE LY DE THIES</strong></p>
              <p>Licence en Science Informatique</p>
            </div>
            <div className="about_item">
              <span className="about_periode">2022 - 2025</span>
              <p><strong>LYCÉE BLOC VILLAGE</strong></p>
              <p>Baccalauréat en Série L2</p>
            </div>
          </div>
        </div>

        {/* ---- competences ---- */}
        <div className="about_section">
          <h3>💻 Compétences</h3>
          <div className="about_skills">
            {["Html/Css", "Javascript", "PHP", "Laravel", "Angular", "Bootstrap", "C", "Office"].map((s, i) => (
              <span key={i} className="about_skill">{s}</span>
            ))}
          </div>
        </div>

        {/* ---- contact ---- */}
        <div className="about_section">
          <h3>📬 Contact</h3>
          <div className="about_items">
            <div className="about_contact_item">
              <FaPhone className="about_icon" />
              <p>+221 78 381 84 13</p>
            </div>
            <div className="about_contact_item">
              <MdEmail className="about_icon" />
              <p>ibah2536@gmail.com</p>
            </div>
            <div className="about_contact_item">
              <FaLocationDot className="about_icon" />
              <p>Nimzath</p>
            </div>
          </div>
        </div>

        {/* ---- langues ---- */}
        <div className="about_section">
          <h3>🌍 Langues</h3>
          <div className="about_skills">
            <span className="about_skill">Français — Courant</span>
            <span className="about_skill">Anglais — Débutant</span>
          </div>
        </div>

        {/* ---- loisirs ---- */}
        <div className="about_section">
          <h3>🎯 Loisirs</h3>
          <div className="about_loisirs">
            <div className="about_loisir"><FaFootballBall /> Football</div>
            <div className="about_loisir"><FaBook /> Lire</div>
            <div className="about_loisir"><FaBicycle /> Cyclisme</div>
            <div className="about_loisir"><FaPlane /> Voyage</div>
            <div className="about_loisir"><FaUmbrellaBeach /> Plage</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About