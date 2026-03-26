import React from 'react'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Contacts = () => {
  const navigate = useNavigate()

  return (
    <div className='contacts'>
      <h1>Contact</h1>
      <div className="mes_contacts">

        <div className="un_contact">
          <div className="contact_icon"><FaPhone /></div>
          <div className="contact_info">
            <h3>Téléphone</h3>
            <p>+221 78 381 84 13</p>
          </div>
        </div>

        <div className="un_contact">
          <div className="contact_icon"><MdEmail /></div>
          <div className="contact_info">
            <h3>Email</h3>
            <p>ibah2536@gmail.com</p>
          </div>
        </div>

        <div className="un_contact">
          <div className="contact_icon"><FaLocationDot /></div>
          <div className="contact_info">
            <h3>Localisation</h3>
            <p>Nimzath</p>
          </div>
        </div>

        <button className="form_btn" onClick={() => navigate('/formulaire')}>
          Envoyer un message
        </button>

      </div>
    </div>
  )
}

export default Contacts