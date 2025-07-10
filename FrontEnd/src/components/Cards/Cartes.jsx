import '../Cards/Cartes.css'
import { useNavigate } from 'react-router-dom'

function Cards({ locations }) {
   const navigate = useNavigate()

   function handleClick(id) {
      navigate(`/appartement/${id}`)
   }

   return (
      <div className="card-container">
         {locations.map(({ id, title, cover }) => (
            <div className="card" key={id}>
               <img
                  src={cover}
                  alt={title}
                  className="card-img"
                  onClick={() => handleClick(id)}
               />
               <div className="card-title">{title}</div>
            </div>
         ))}
      </div>
   )
}

export default Cards
