import '../Cards/cards.css'
import { Link } from 'react-router-dom'

function Cards({ locations }) {
   return (
      <div className="card-container">
         {locations.map(({ id, title, cover }) => (
            <div className="card" key={id}>
               <Link to={`/appartement/${id}`}>
                  <img src={cover} alt={title} className="card-img" />
                  <div className="card-title">{title}</div>
               </Link>
            </div>
         ))}
      </div>
   )
}

export default Cards
