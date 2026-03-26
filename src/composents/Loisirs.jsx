import React from 'react'

const Loisirs = () => {

  const loisirs = [
    { id: 1, nom: "Football" },
    { id: 2, nom: "Lire" },
    { id: 3, nom: "Cyclisme" },
    { id: 4, nom: "Voyage" },
    { id: 5, nom: "Plage" },
  ]

  return (
    <div className='loisirs'>
      <h1>Loisirs</h1>
      <div className="mes_loisirs">
        {
          loisirs.map((l) => (
            <div key={l.id} className="un_loisir">
              <p>{l.nom}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Loisirs