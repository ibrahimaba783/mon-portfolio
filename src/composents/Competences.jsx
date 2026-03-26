import React from 'react'

const Competences = () => {

    const skills = [
        { id:1 , titre : "Html/Css" , duree: 3  },
        { id:2 , titre : "Javascript" , duree: 3  },
        { id:3 , titre : "PHP" , duree: 2  },
        { id:4 , titre : "Laravel" , duree: 2  },
        { id:5 , titre : "Angular" , duree: 1  },
        { id:6 , titre : "Bootstrap" , duree: 2  },
        { id:7 , titre : "C" , duree: 1  },
        { id:8 , titre : "Office" , duree: 3  },
    ]

  return (
    <div className='competences'>
       <h1>competences</h1>
       <div className="mes_competences">
           {
              skills.map((skill) => (
                 <div key={skill.id} className="un_competence">
                     <h1>{skill.titre}</h1>
                 </div>
            ))
           }
       </div>
    </div>
  )
}

export default Competences