import React, { useState } from 'react'

const Formulaire = () => {

  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  })

  const [envoye, setEnvoye] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setEnvoye(true)
    setFormData({ nom: '', email: '', sujet: '', message: '' })
    setTimeout(() => setEnvoye(false), 4000)
  }

  return (
    <div className='formulaire'>
      <h1>Contactez-moi</h1>

      <div className="contact_form">

        {envoye && (
          <div className="form_success">
            ✅ Message envoyé avec succès !
          </div>
        )}

        <div className="form_group">
          <label>Nom complet</label>
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            value={formData.nom}
            onChange={handleChange}
          />
        </div>

        <div className="form_group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form_group">
          <label>Sujet</label>
          <input
            type="text"
            name="sujet"
            placeholder="Sujet du message"
            value={formData.sujet}
            onChange={handleChange}
          />
        </div>

        <div className="form_group">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Votre message..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button className="form_btn" onClick={handleSubmit}>
          Envoyer le message
        </button>

      </div>
    </div>
  )
}

export default Formulaire