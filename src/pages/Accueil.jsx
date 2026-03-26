import React from 'react'
import Hero from '../composents/Hero'
import Competences from '../composents/Competences'
import Formation from '../composents/Formation'
import Langues from '../composents/Langues'
import Loisirs from '../composents/Loisirs'
import Contacts from '../pages/Contacts'

const Accueil = () => {
  return (
    <div className='accueil'>
        <Hero />
        <Competences />
        <Formation />
        <Langues />
        <Loisirs />
        <Contacts />
    </div>
  )
}

export default Accueil