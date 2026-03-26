import React from 'react'

const Langues = () => {

  const langues = [
    { id: 1, langue: "Français", niveau: "Courant" },
    { id: 2, langue: "Anglais", niveau: "Débutant" },
  ]

  return (
    <div className='langues'>
      <h1>Langues</h1>
      <div className="mes_langues">
        {
          langues.map((l) => (
            <div key={l.id} className="une_langue">
              <h3>{l.langue}</h3>
              <span>{l.niveau}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Langues