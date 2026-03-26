import React from 'react'

const Formation = () => {

  const formations = [
    {
      id: 1,
      periode: "2024 - à nos jours",
      ecole: "ISEP ABDOULAYE LY DE THIES",
      diplome: "Licence en Science Informatique"
    },
    {
      id: 2,
      periode: "2022 - 2025",
      ecole: "LYCÉE BLOC VILLAGE",
      diplome: "Baccalauréat en Série L2"
    }
  ]

  return (
    <div className='formation'>
      <h1>Formation</h1>
      <div className="mes_formations">
        {
          formations.map((f) => (
            <div key={f.id} className="une_formation">
              <span className="formation_periode">{f.periode}</span>
              <h3>{f.ecole}</h3>
              <p>{f.diplome}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Formation